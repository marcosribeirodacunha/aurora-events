import React, { useRef } from 'react';
import { FormHandles, SubmitHandler, UnformErrors } from '@unform/core';
import * as Yup from 'yup';

import Modal, { IModalHandles } from '..';
import Button from '../../Button';
import Dropzone from '../../Dropzone';

import { Form } from './styles';
import api from '../../../services/api';

interface IFormData {
  avatar: File;
}

interface IProps {
  modalRef: React.RefObject<IModalHandles>;
  onAvatarUpdateSucess: (newAvatarURL: string) => void;
}

const AvatarModal: React.FC<IProps> = ({ modalRef, onAvatarUpdateSucess }) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<IFormData> = async data => {
    try {
      const stupidTSError = formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        avatar: Yup.mixed().required(),
      });

      await schema.validate(data, { abortEarly: false });

      const formData = new FormData();
      formData.append('avatar', data.avatar);

      const response = await api.patch(`users/avatar`, formData);

      const storageUser = JSON.parse(
        localStorage.getItem('@AuroraEvents:user')!
      );
      localStorage.setItem(
        '@AuroraEvents:user',
        JSON.stringify({ ...storageUser, avatar: response.data.avatar })
      );
      onAvatarUpdateSucess(response.data.avatar);

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
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Select the new avatar</h1>

        <Dropzone label="Avatar" name="avatar" />

        <Button type="submit">Update</Button>
      </Form>
    </Modal>
  );
};

export default AvatarModal;
