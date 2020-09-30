import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1020px;
  padding: 0 20px;
  margin: 80px auto 0;

  > button {
    margin-bottom: 40px;
  }
`;

export const CardContainer = styled.section`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin-bottom: 100px;
`;

export const CardContent = styled.div`
  h1 {
    font-size: ${props => props.theme.font.title3};
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 16px;
  }

  > div {
  }
`;
