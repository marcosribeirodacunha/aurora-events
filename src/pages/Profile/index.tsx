import React, { useEffect, useState } from 'react';
import { BiPencil } from 'react-icons/bi';
import useAuth from '../../hooks/useAuth';
import api from '../../services/api';

import Navbar from '../../components/Navbar';

import { Container, Avatar } from './styles';

interface IUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  created_at: string;
  updated_at: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const { user: signedUser } = useAuth();

  useEffect(() => {
    async function loadData() {
      try {
        const { data } = await api.get(`users/${signedUser?.id}`);

        setUser(data);
      } catch (error) {
        if (error.response && error.response.data.status)
          console.log(error.response.data);
        else console.log(error);
      }
    }

    loadData();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Avatar>
          <img src={user.avatar} alt="User avatar" />
          <button type="button">
            <BiPencil size={40} />
          </button>
        </Avatar>

        <h1>{user.name}</h1>
        <p>{user.email}</p>

        <p>3 events organized</p>
        <p>45 likes</p>
        <p>3 dislikes</p>
      </Container>
    </>
  );
};

export default Profile;
