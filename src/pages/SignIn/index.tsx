import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles, UnformErrors } from '@unform/core';
import * as Yup from 'yup';

import { BiLogIn } from 'react-icons/bi';
import { MdMailOutline, MdLockOutline } from 'react-icons/md';

import useAuth from '../../hooks/useAuth';

import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Link from '../../components/Link';

import { Container, Content, APIErrorMessage, Background } from './styles';

interface IFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [apiError, setApiError] = useState('');

  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const handleSubmit: SubmitHandler<IFormData> = useCallback(
    async data => {
      try {
        /*
        Typescript does not allow just call setErrors function
        without any assingment even if this function return void

        NOTE: I don't know what to do to solve this problem...
      */
        const stupidTSError = formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string().email().required(),
          password: Yup.string().min(6).required(),
        });

        await schema.validate(data, { abortEarly: false });

        await signIn(data);
      } catch (err) {
        const validationErrors: UnformErrors = {};

        if (err instanceof Yup.ValidationError) {
          err.inner.forEach(error => {
            validationErrors[error.path] = error.message;
          });

          setApiError('');
          const stupidTSError2 = formRef.current?.setErrors(validationErrors);
        }

        if (err.status) setApiError(err.error);
      }
    },
    [signIn]
  );

  return (
    <Container>
      <Content>
        <img src={logo} alt="Aurora Events" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>
            Welcome back. <span>Sign In</span>
          </h1>

          <APIErrorMessage>{apiError}</APIErrorMessage>

          <Input icon={MdMailOutline} name="email" placeholder="E-mail" />
          <Input
            icon={MdLockOutline}
            type="password"
            name="password"
            placeholder="Password"
          />

          <Button type="submit" block>
            Sign In
          </Button>

          <Link to="forgot">Forgot your password?</Link>
        </Form>

        <Link to="signup" variant="secondary" icon={BiLogIn}>
          Sign Up
        </Link>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
