import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1020px;
  padding: 0 20px;
  margin: 80px auto 100px;

  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;

export const CardContent = styled.div`
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
