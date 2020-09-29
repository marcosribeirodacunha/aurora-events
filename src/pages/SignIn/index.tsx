import React, { FormEvent } from 'react';
import { BiLogIn } from 'react-icons/bi';
import { MdMailOutline, MdLockOutline } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Link from '../../components/Link';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  const history = useHistory();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    history.push('/discover');
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="Aurora Events" />

        <form onSubmit={handleSubmit}>
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
        </form>

        <Link to="sign-up" variant="secondary" icon={BiLogIn}>
          Sign Up
        </Link>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
