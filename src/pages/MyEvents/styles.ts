import { transparentize } from 'polished';
import styled from 'styled-components';
import Button from '../../components/Button';

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

export const ImageOverlayButton = styled.button.attrs({
  type: 'button',
})`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 8px;
  width: 100%;

  border: none;
  border-radius: ${props => props.theme.radius};
  cursor: pointer;
  background: transparent;
  color: transparent;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background: ${props => transparentize(0.3, props.theme.colors.card)};
    color: ${props => props.theme.colors.primary};
  }
`;

export const CardContent = styled.div`
  h1 {
    font-size: ${props => props.theme.font.title3};
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 16px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button:first-child {
      margin-right: 8px;
    }
  }
`;
