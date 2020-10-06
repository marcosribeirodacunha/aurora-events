import React, { useCallback, useRef, useState } from 'react';
import { FormHandles, SubmitHandler, UnformErrors } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import Dropzone from '../../components/Dropzone';
import Input from '../../components/Input';
import Navbar from '../../components/Navbar';
import Textarea from '../../components/Textarea';

import { Container, APIErrorMessage } from './styles';
import api from '../../services/api';

interface IFormData {
  title: string;
  description: string;
  location: string;
  photo: File;
}

const EventCreate: React.FC = () => {
  const [apiError, setApiError] = useState('');
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit: SubmitHandler<IFormData> = useCallback(async data => {
    try {
      const stupidTSError = formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        title: Yup.string().min(3).required(),
        description: Yup.string().min(6).required(),
        location: Yup.string().min(6).required(),
        photo: Yup.mixed().required(),
      });

      await schema.validate(data, { abortEarly: false });

      const formData = new FormData();

      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('location', data.location);
      formData.append('photo', data.photo);

      await api.post('/events', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      history.push('/myevents');
    } catch (err) {
      const validationErrors: UnformErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        setApiError('');
        const stupidTSError = formRef.current?.setErrors(validationErrors);
      }

      if (err.response && err.response.data.status)
        setApiError(err.response.data.error);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Organize a new event</h1>

          <APIErrorMessage>{apiError}</APIErrorMessage>

          <Input label="Title" name="title" />

          <Textarea label="Description" name="description" />

          <Input label="Location" name="location" />

          <Dropzone label="Photo" name="photo" />

          <Button type="submit">Publish</Button>
        </Form>
      </Container>
    </>
  );
};

export default EventCreate;
