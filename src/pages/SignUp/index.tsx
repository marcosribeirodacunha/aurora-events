import React from 'react';
import {
  MdPersonOutline,
  MdMailOutline,
  MdLockOutline,
  MdArrowBack,
} from 'react-icons/md';

import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Link from '../../components/Link';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />

      <Content>
        <img src={logo} alt="Aurora Events" />

        <form>
          <h1>
            <span>Sign Up</span> to continue
          </h1>

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
        </form>

        <Link to="sign-in" icon={MdArrowBack}>
          Back to sign in
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
