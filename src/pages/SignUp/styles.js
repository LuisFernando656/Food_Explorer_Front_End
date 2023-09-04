import styled from 'styled-components'

export const Container = styled.div`
  main {
    width: clamp(32rem, 95vw, 35.6rem);

    margin: 15.8rem auto;
    padding-inline: 2rem;

    > div:nth-child(1) {
      margin-bottom: 7.3rem;
      justify-content: left;
    }
  }

  @media screen and (min-width: 769px) {
    height: 100vh;

    main {
      width: 100%;
      height: 100%;
      margin: 0;

      padding-inline: 0;

      display: flex;
      align-items: center;
      justify-content: space-around;

      > div:nth-child(1) {
        margin-bottom: 0;

        gap: 1.9rem;

        svg {
          width: 4.9rem;
          height: 4.7rem;
        }

        h2 {
          font-size: 4.7rem;
        }
      }

      > div:nth-child(2) {
        width: clamp(34.8rem, 47vw, 49.6rem);

        padding-block: 6.4rem;

        padding-inline: clamp(2rem, 6vw, 6.4rem);
        border-radius: 1.6rem;

        background: ${({ theme }) => theme.COLORS.DARK.DARK_700};

        > form {
          h3 {
            font-size: 3.2rem;
            text-align: center;
            font-weight: 500;
            line-height: 140%;

            color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
          }
        }
      }
    }
  }
`

export const Form = styled.form`
  width: 100%;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    label {
      padding-bottom: 0.8rem;
    }
`

export const Content = styled.div`
  > a {
    margin-top: 3.2rem;

    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;

    display: flex;
    justify-content: center;
  }
`
