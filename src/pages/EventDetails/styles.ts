import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100% - 80px);
  margin-bottom: 100px;

  section {
    width: 100%;
    max-width: 820px;
    padding: 0 20px;
    margin: 40px auto 0;

    h1 {
      font-size: ${props => props.theme.font.title1};
      color: ${props => props.theme.colors.secondary};
      margin: 20px 0;
    }

    > p {
      white-space: pre-wrap;
    }

    > div.location {
      display: flex;
      align-items: center;
      color: ${props => props.theme.colors.textSecondary};
      margin: 24px 0;

      svg {
        margin-right: 8px;
      }
    }
  }
`;

export const OrganizerButtons = styled.div`
  button {
    margin-top: 0;

    & + button {
      margin-left: 8px;
    }
  }
`;

export const Photo = styled.div`
  position: relative;

  img {
    width: 100%;
    object-fit: cover;
    height: max(40vh, 450px);
  }

  button {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 8px;
    width: 100%;

    border: none;
    cursor: pointer;
    background: transparent;
    color: transparent;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background: ${props => transparentize(0.3, props.theme.colors.card)};
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export const Organizer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;

  img {
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 16px;
  }

  div {
    p span {
      color: ${props => props.theme.colors.primary};
    }

    small {
      font-size: ${props => props.theme.font.small};
      color: ${props => props.theme.colors.textSecondary};
    }
  }
`;
