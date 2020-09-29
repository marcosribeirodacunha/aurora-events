import React from 'react';

import { BiLike, BiDislike } from 'react-icons/bi';

import { Container } from './styles';

const LikeDislikeButtons: React.FC = () => {
  return (
    <>
      <Container className="active">
        <BiLike size={20} />
        22
      </Container>

      <Container>
        <BiDislike size={20} />0
      </Container>
    </>
  );
};

export default LikeDislikeButtons;
