import React from 'react';

import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { Container, Content } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Aurora Events" />

        <nav>
          <NavLink to="/discover">Discover</NavLink>
          <NavLink to="/my-events">My events</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/sign-out">Sign Out</NavLink>
        </nav>

        <div>
          <p>John Doe</p>
          <img
            src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80"
            alt="John Doe"
          />
        </div>
      </Content>
    </Container>
  );
};

export default Navbar;
