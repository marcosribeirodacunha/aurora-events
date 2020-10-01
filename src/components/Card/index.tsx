import React from 'react';

import { Container, ImageContainer } from './styles';

interface IProps {
  image: {
    src: string;
    alt: string;
  };
  imageOverlay?: React.ReactNode;
}

const Card: React.FC<IProps> = ({ image, imageOverlay, children }) => {
  return (
    <Container>
      <ImageContainer>
        <img src={image.src} alt={image.alt} />
        {imageOverlay}
      </ImageContainer>

      {children}
    </Container>
  );
};

export default Card;
