import styled from 'styled-components';

export const Container = styled.header`
  background: ${props => props.theme.colors.card};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1020px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    width: 80px;
  }

  nav a {
    display: inline-flex;
    align-items: center;
    padding: 0 16px;
    height: 80px;
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    position: relative;
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
    }

    &.active {
      color: ${props => props.theme.colors.primary};

      &::after {
        background: ${props => props.theme.colors.primary};
      }
    }
  }

  div {
    display: flex;
    align-items: center;

    img {
      margin-left: 16px;
      width: 32px;
      height: 32px;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  > button {
    margin-top: 0;
  }
`;
