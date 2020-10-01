import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.card};
  border-radius: ${props => props.theme.radius};

  > div:not(:first-of-type) {
    padding: 20px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: ${props => props.theme.radius};
  }
`;
