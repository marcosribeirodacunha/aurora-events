import React, { useCallback, useRef } from 'react';
import { FormHandles, SubmitHandler, UnformErrors } from '@unform/core';
import * as Yup from 'yup';

import Modal, { IModalHandles } from '..';
import Button from '../../Button';
import Dropzone from '../../Dropzone';

import { Form } from './styles';
import api from '../../../services/api';

interface IFormData {
  photo: File;
}

interface IProps {
  modalRef: React.RefObject<IModalHandles>;
  event: {
    id: string;
    photo: string;
  };
  onPhotoUpdateSucess: (eventId: string, newPhotoURL: string) => void;
}

const PhotoModal: React.FC<IProps> = ({
  modalRef,
  event,
  onPhotoUpdateSucess,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<IFormData> = async data => {
    try {
      const stupidTSError = formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        photo: Yup.mixed().required(),
      });

      await schema.validate(data, { abortEarly: false });

      const formData = new FormData();
      formData.append('photo', data.photo);

      const response = await api.patch(`events/photo/${event.id}`, formData);
      onPhotoUpdateSucess(event.id, response.data.photo);

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
  };

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
