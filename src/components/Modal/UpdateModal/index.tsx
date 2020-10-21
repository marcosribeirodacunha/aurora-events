import React, { useRef } from 'react';
import { FormHandles, SubmitHandler, UnformErrors } from '@unform/core';
import * as Yup from 'yup';

import Modal, { IModalHandles } from '..';
import Button from '../../Button';
import Input from '../../Input';
import Textarea from '../../Textarea';

import { Form } from './styles';
import api from '../../../services/api';

export interface IFormData {
  title: string;
  description: string;
  location: string;
}

interface IProps {
  modalRef: React.RefObject<IModalHandles>;
  event: IFormData & { id: string };
  onUpdateSuccess: (updatedEvent: string, updatedFields: IFormData) => void;
}

const UpdateModal: React.FC<IProps> = ({
  modalRef,
  event,
  onUpdateSuccess,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<IFormData> = async data => {
    try {
      console.log(event);
      const stupidTSError = formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        title: Yup.string().min(3).required(),
        description: Yup.string().min(6).required(),
        location: Yup.string().min(6).required(),
      });

      await schema.validate(data, { abortEarly: false });

      await api.patch(`events/${event.id}`, data);
      onUpdateSuccess(event.id, data);

      const _ = modalRef.current?.closeModal();
    } catch (err) {
      const validationErrors: UnformErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        const stupidTSError = formRef.current?.setErrors(validationErrors);
      }
    }
  };

  return (
    <Modal ref={modalRef} maxWidth={620}>
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        initialData={{
          title: event?.title,
          description: event?.description,
          location: event?.location,
        }}
      >
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
