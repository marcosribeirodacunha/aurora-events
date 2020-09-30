import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.card};
  border-radius: ${props => props.theme.radius};

  img {
    width: 100%;
    object-fit: cover;
    border-radius: ${props => props.theme.radius};
  }

  > div {
    padding: 20px;
  }
`;
