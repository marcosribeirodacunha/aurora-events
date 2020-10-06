import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
  width: max(100%, 350px);

  h1 {
    font-size: ${props => props.theme.font.title1};
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 20px;
  }

  button {
    display: block;
    margin-left: auto;
  }
`;
