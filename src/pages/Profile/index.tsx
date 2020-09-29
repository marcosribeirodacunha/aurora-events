import React from 'react';
import { BiEditAlt } from 'react-icons/bi';
import Navbar from '../../components/Navbar';

import { Container, Avatar } from './styles';

const Profile: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Avatar>
          <img
            src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80"
            alt="John Doe"
          />
          <button type="button">
            <BiEditAlt size={40} />
          </button>
        </Avatar>

        <h1>John Doe</h1>
        <p>email@email.com</p>

        <p>3 events organized</p>
        <p>45 likes</p>
        <p>3 dislikes</p>
      </Container>
    </>
  );
};

export default Profile;
