import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles, UnformErrors } from '@unform/core';
import * as Yup from 'yup';

import { BiLogIn } from 'react-icons/bi';
import { MdMailOutline, MdLockOutline } from 'react-icons/md';
// import { useHistory } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Link from '../../components/Link';

import { Container, Content, Background } from './styles';

interface IFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  // const history = useHistory();

  const handleSubmit: SubmitHandler<IFormData> = useCallback(async data => {
    try {
      const stupidTSError = formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required(),
      });

      await schema.validate(data, { abortEarly: false });

      console.log(data);
    } catch (err) {
      const validationErrors: UnformErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        const stupidTSError2 = formRef.current?.setErrors(validationErrors);
      }
    }

    // history.push('/discover');
  }, []);

  return (
    <Container>
      <Content>
        <img src={logo} alt="Aurora Events" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>
            Welcome back. <span>Sign In</span>
          </h1>

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

        <Link to="sign-up" variant="secondary" icon={BiLogIn}>
          Sign Up
        </Link>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
