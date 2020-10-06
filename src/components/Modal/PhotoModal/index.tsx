import React, { useCallback, useRef } from 'react';
import { FormHandles, SubmitHandler, UnformErrors } from '@unform/core';
import * as Yup from 'yup';

import Modal, { IModalHandles } from '..';
import Button from '../../Button';
import Dropzone from '../../Dropzone';

import { Form } from './styles';

interface IFormData {
  photo: File;
}

interface IProps {
  modalRef: React.RefObject<IModalHandles>;
}

const PhotoModal: React.FC<IProps> = ({ modalRef }) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<IFormData> = useCallback(async data => {
    try {
      const stupidTSError = formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        photo: Yup.mixed().required(),
      });

      await schema.validate(data, { abortEarly: false });

      const formData = new FormData();
      formData.append('photo', data.photo);

      console.log(data); // #TODO: implement photo update in backend and frontend

      const anotherStupidTSError = modalRef.current?.closeModal();
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
        <h1>Select the new photo</h1>

        <Dropzone label="Photo" name="photo" />

        <Button type="submit">Update</Button>
      </Form>
    </Modal>
  );
};

export default PhotoModal;
