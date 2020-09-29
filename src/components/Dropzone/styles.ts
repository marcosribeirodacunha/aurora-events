import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.card};
  border-radius: ${props => props.theme.radius};
  height: 250px;
  border: 2px solid ${props => props.theme.colors.card};
  transition: border-color 0.3s ease;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:focus {
    border-color: ${props => props.theme.colors.primary};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${props => props.theme.radius};
  }

  p {
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    border-radius: ${props => props.theme.radius};
    border: 1px dashed ${props => props.theme.colors.tertiary};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    color: ${props => props.theme.colors.textSecondary};

    svg {
      color: ${props => props.theme.colors.tertiary};
      margin-bottom: 8px;
    }
  }
`;
