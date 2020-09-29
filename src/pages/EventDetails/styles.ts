import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100% - 80px);
  margin-bottom: 100px;

  > img {
    width: 100%;
    object-fit: cover;
    height: max(40vh, 450px);
    /* max-height: 70%; */
  }

  section {
    width: 100%;
    max-width: 820px;
    padding: 0 20px;
    margin: 40px auto 0;

    h1 {
      font-size: ${props => props.theme.font.title1};
      color: ${props => props.theme.colors.secondary};
      margin-bottom: 20px;
    }

    > div:first-of-type {
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

export const Organizer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;

  img {
    width: 48px;
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
