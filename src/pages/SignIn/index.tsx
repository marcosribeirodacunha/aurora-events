import React from 'react';
import { BiLogIn } from 'react-icons/bi';
import { MdMailOutline, MdLockOutline } from 'react-icons/md';

import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Link from '../../components/Link';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Aurora Events" />

        <form>
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

          <Button block>Sign In</Button>

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
