import React from 'react';
import { BiLike, BiDislike } from 'react-icons/bi';

import { Container } from './styles';

interface IProps {
  disableUserInteraction?: boolean;
}

const LikeDislikeButtons: React.FC<IProps> = ({ disableUserInteraction }) => {
  return (
    <>
      <Container
        className="active"
        disableUserInteraction={!!disableUserInteraction}
      >
        <BiLike size={20} />
        22
      </Container>

      <Container disableUserInteraction={!!disableUserInteraction}>
        <BiDislike size={20} />0
      </Container>
    </>
  );
};

export default LikeDislikeButtons;
