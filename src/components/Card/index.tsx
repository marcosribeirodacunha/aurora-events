import React from 'react';

import { Container } from './styles';

interface IProps {
  image: {
    src: string;
    alt: string;
  };
}

const Card: React.FC<IProps> = ({ image, children }) => {
  return (
    <Container>
      <img src={image.src} alt={image.alt} />

      {children}
    </Container>
  );
};

export default Card;
