import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

import Button from '../Button';
import logo from '../../assets/logo.svg';

import { Container, Content } from './styles';

const Navbar: React.FC = () => {
  const { signed, user, signOut } = useAuth();

  const history = useHistory();

  function handleNavigateToSignIn() {
    history.push('/signin');
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="Aurora Events" />

        <nav>
          <NavLink to="/discover">Discover</NavLink>
          {signed && (
            <>
              <NavLink to="/myevents">My events</NavLink>
              <NavLink to="/profile">Profile</NavLink>
              <NavLink to="/signout" onClick={signOut}>
                Sign Out
              </NavLink>
            </>
          )}
        </nav>

        {signed ? (
          <>
            <div>
              <p>{user?.name}</p>
              <img src={user?.avatar} alt="User avatar" />
            </div>
          </>
        ) : (
          <Button size="sm" variant="primary" onClick={handleNavigateToSignIn}>
            Sign In
          </Button>
        )}
      </Content>
    </Container>
  );
};

export default Navbar;
