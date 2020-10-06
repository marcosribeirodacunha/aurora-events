import React, { useEffect, useState } from 'react';
import { BiLike, BiDislike } from 'react-icons/bi';

import useAuth from '../../hooks/useAuth';
import api from '../../services/api';
import { ILikeDislike } from '../../interfaces/event';

import { Container } from './styles';

// eslint-disable-next-line no-shadow
enum LikeStatus {
  NONE,
  LIKE,
  DISLIKE,
}

interface IProps {
  disableUserInteraction?: boolean;
  data: {
    event_id: string;
    likes: ILikeDislike;
    dislikes: ILikeDislike;
  };
}

const LikeDislikeButtons: React.FC<IProps> = ({
  disableUserInteraction,
  data,
}) => {
  const [likeStatus, setLikeStatus] = useState<LikeStatus>(LikeStatus.NONE);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const { user } = useAuth();

  useEffect(() => {
    setLikes(data.likes.total);
    setDislikes(data.dislikes.total);

    if (user && data.likes.users.indexOf(user.id) > -1)
      setLikeStatus(LikeStatus.LIKE);

    if (user && data.dislikes.users.indexOf(user.id) > -1)
      setLikeStatus(LikeStatus.DISLIKE);
  }, [data, user]);

  const deleteLike = async () => {
    try {
      await api.delete(`/events/like/${data.event_id}`);
      setLikeStatus(LikeStatus.NONE);
    } catch (error) {
      if (error.response && error.response.data.status)
        console.log(error.response.data);
      else console.log(error);
    }
  };

  const handleLike = async (is_like: boolean) => {
    if (is_like && likeStatus === LikeStatus.LIKE) {
      await deleteLike();
      setLikes(likes - 1);
      return;
    }

    if (!is_like && likeStatus === LikeStatus.DISLIKE) {
      await deleteLike();
      setDislikes(dislikes - 1);
      return;
    }

    try {
      if (likeStatus === LikeStatus.NONE) {
        await api.post('events/like', {
          event_id: data.event_id,
          is_like,
        });
      } else {
        await api.patch(`/events/like/${data.event_id}`, { is_like });
      }
    } catch (error) {
      if (error.response && error.response.data.status)
        console.log(error.response.data);
      else console.log(error);
    }

    if (is_like) {
      setLikeStatus(LikeStatus.LIKE);
      setLikes(likes + 1);

      if (likeStatus === LikeStatus.DISLIKE) setDislikes(dislikes - 1);
    }

    if (!is_like) {
      setLikeStatus(LikeStatus.DISLIKE);
      setDislikes(dislikes + 1);

      if (likeStatus === LikeStatus.LIKE) setLikes(likes - 1);
    }
  };

  return (
    <>
      <Container
        className={likeStatus === LikeStatus.LIKE ? 'active' : ''}
        disableUserInteraction={!!disableUserInteraction}
        onClick={() => handleLike(true)}
      >
        <BiLike size={20} />
        {likes}
      </Container>

      <Container
        className={likeStatus === LikeStatus.DISLIKE ? 'active' : ''}
        disableUserInteraction={!!disableUserInteraction}
        onClick={() => handleLike(false)}
      >
        <BiDislike size={20} />
        {dislikes}
      </Container>
    </>
  );
};

export default LikeDislikeButtons;
