import React, { useEffect, useState } from 'react';
import { BiPencil } from 'react-icons/bi';
import useAuth from '../../hooks/useAuth';
import api from '../../services/api';

import Navbar from '../../components/Navbar';

import { Container, Avatar } from './styles';

interface IUser {
  user_id: string;
  user_name: string;
  user_email: string;
  user_avatar: string;
  user_created_at: string;
  user_updated_at: string;
  event_count: string;
  my_likes_count: string;
  my_dislikes_count: string;
  likes_received_count: string;
  dislikes_received_count: string;
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
  }, [signedUser]);

  return (
    <>
      <Navbar />
      <Container>
        <Avatar>
          <img src={user.user_avatar} alt="User avatar" />
          <button type="button">
            <BiPencil size={40} />
          </button>
        </Avatar>

        <h1>{user.user_name}</h1>
        <p>{user.user_email}</p>

        <p>
          {user.event_count} {user.event_count === '1' ? 'event' : 'events'}{' '}
          organized
        </p>
        <p>
          {user.likes_received_count}{' '}
          {user.likes_received_count === '1' ? 'like' : 'likes'} received
        </p>
        <p>
          {user.dislikes_received_count}{' '}
          {user.dislikes_received_count === '1' ? 'dislike' : 'dislikes'}{' '}
          received
        </p>
        <p>
          {user.my_likes_count}{' '}
          {user.my_likes_count === '1' ? 'event' : 'events'} you liked
        </p>
        <p>
          {user.my_dislikes_count}{' '}
          {user.my_dislikes_count === '1' ? 'event' : 'events'} you disliked
        </p>
      </Container>
    </>
  );
};

export default Profile;
