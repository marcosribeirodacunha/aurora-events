import React, { useCallback, useRef, useState } from 'react';
import { FormHandles, SubmitHandler, UnformErrors } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import {
  MdPersonOutline,
  MdMailOutline,
  MdLockOutline,
  MdArrowBack,
} from 'react-icons/md';

import { useHistory } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Link from '../../components/Link';

import { Container, Content, APIErrorMessage, Background } from './styles';
import api from '../../services/api';

interface IFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [apiError, setApiError] = useState('');
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<IFormData> = useCallback(async data => {
    try {
      const stupidTSError = formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().min(3).required(),
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required(),
      });

      await schema.validate(data, { abortEarly: false });

      await api.post('/users', data);

      history.push('signin');
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
    <Container>
      <Background />

      <Content>
        <img src={logo} alt="Aurora Events" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>
            <span>Sign Up</span> to continue
          </h1>

          <APIErrorMessage>{apiError}</APIErrorMessage>

          <Input icon={MdPersonOutline} name="name" placeholder="Name" />
          <Input icon={MdMailOutline} name="email" placeholder="E-mail" />
          <Input
            icon={MdLockOutline}
            type="password"
            name="password"
            placeholder="Password"
          />

          <Button type="submit" block>
            Sign Up
          </Button>
        </Form>

        <Link to="signin" icon={MdArrowBack}>
          Back to sign in
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
