import React, { useCallback, useRef } from 'react';
import { FormHandles, SubmitHandler, UnformErrors } from '@unform/core';
import * as Yup from 'yup';

import Modal, { IModalHandles } from '..';
import Button from '../../Button';
import Input from '../../Input';
import Textarea from '../../Textarea';

import { Form } from './styles';

interface IFormData {
  title: string;
  description: string;
  location: string;
}

interface IProps {
  modalRef: React.RefObject<IModalHandles>;
  data?: IFormData;
}

const UpdateModal: React.FC<IProps> = ({ modalRef }) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<IFormData> = useCallback(async data => {
    try {
      const stupidTSError = formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        title: Yup.string().min(3).required(),
        description: Yup.string().min(6).required(),
        location: Yup.string().min(6).required(),
      });

      await schema.validate(data, { abortEarly: false });

      console.log(data); // #TODO: implement update in backend and frontend
    } catch (err) {
      const validationErrors: UnformErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        const stupidTSError = formRef.current?.setErrors(validationErrors);
      }
    }
  }, []);

  return (
    <Modal ref={modalRef} maxWidth={620}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={{}}>
        <h1>Update event info</h1>

        <Input label="Title" name="title" />

        <Textarea label="Description" name="description" />

        <Input label="Location" name="location" />

        <Button type="submit">Update</Button>
      </Form>
    </Modal>
  );
};

export default UpdateModal;
