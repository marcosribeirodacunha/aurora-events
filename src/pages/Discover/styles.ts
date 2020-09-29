import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1020px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const CardContainer = styled.section`
  margin-top: 80px;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin-bottom: 100px;
`;

export const Card = styled.div`
  background: ${props => props.theme.colors.card};
  border-radius: ${props => props.theme.radius};

  img {
    width: 100%;
    object-fit: cover;
    border-radius: ${props => props.theme.radius};
  }
`;

export const CardContent = styled.div`
  padding: 20px;

  h1 {
    font-size: ${props => props.theme.font.title3};
    color: ${props => props.theme.colors.secondary};
  }

  p {
    font-size: ${props => props.theme.font.small};
    color: ${props => props.theme.colors.textSecondary};
    margin: 10px 0 20px;

    span {
      color: ${props => props.theme.colors.text};
    }
  }
`;
