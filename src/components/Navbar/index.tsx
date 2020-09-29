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
            src="https://github.com/marcosribeirodacunha.png"
            alt="Marcos Ribeiro"
          />
        </div>
      </Content>
    </Container>
  );
};

export default Navbar;
