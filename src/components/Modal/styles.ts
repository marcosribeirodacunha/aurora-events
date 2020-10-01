import { transparentize } from 'polished';
import styled, { keyframes } from 'styled-components';

interface IContentProps {
  maxWidth: number;
}

const opacityContainer = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1000;
  padding-right: 17px;
  background: ${props => transparentize(0.2, props.theme.colors.card)};
  animation: ${opacityContainer} 0.3s ease;
`;

export const Content = styled.div<IContentProps>`
  width: 100%;
  max-width: ${props => `min(100%, ${props.maxWidth}px)`};

  margin: 80px auto;

  @media (max-width: 1040px) {
    width: auto;
    margin: 40px auto;
    padding: 0 20px;
  } ;
`;

const scaleCard = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Card = styled.div`
  position: relative;

  width: 100%;
  padding: 40px;

  border-radius: ${props => props.theme.radius};
  background: ${props => props.theme.colors.background};
  box-shadow: 0 0 40px 0
    ${props => transparentize(0.8, props.theme.colors.tertiary)};

  animation: ${scaleCard} 0.3s ease;

  > button:first-of-type {
    position: absolute;
    top: 4px;
    right: 4px;
    margin-top: 0;
  }
`;
