import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  overflow: auto;

  main {
    flex-grow: 1;

    > div:nth-child(2) {
      margin: 0 0 2.4rem 2.4rem;
    }
  }

  @media screen and (min-width: 769px) {
    main {
      margin: 26.8rem 0 4.6rem 0;
      margin-inline: min(5%, 12.4rem);

      > div:nth-child(1) {
        width: 100%;
        height: 26rem;

        margin: 0;
        margin-bottom: 6.2rem;

        img {
          width: min(50%, 63.2rem);
          height: 40.6rem;

          top: -15rem;
          left: -5rem;
        }

        > div {
          width: 45%;
          height: 100%;
          justify-content: center;

          padding-right: clamp(4rem, 5vw, 10.4rem);
          padding-block: clamp(2rem, 5vw, 8.8rem);

          div {
            width: 100%;

            h3 {
              font-size: 4rem;
              font-weight: 500;
              margin-bottom: 0.8rem;
            }

            p {
              font-size: 1.6rem;
              line-height: 100%;
              font-family: 'Roboto', sans-serif;
            }
          }
        }
      }

      > div:nth-child(2) {
        margin: 0;
      }
    }
  }

  @media screen and (max-width: 1368px) {
    main {
      > div:nth-child(1) {
        img {
          left: -2rem;
        }
      }
    }
  }
`

export const IntroDescription = styled.div`
  height: 12rem;

  display: flex;
  justify-content: right;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.GRADIENT.GRADIENT_200};

  margin: 15.8rem 1.6rem 6.2rem 3.6rem;
  margin-right: clamp(0.5rem, 4vw, 1.6rem);

  border-radius: 0.3rem;

  position: relative;

  img {
    position: absolute;
    top: -3rem;
    left: -3rem;
    object-fit: cover;

    width: clamp(13rem, 40vw, 19.1rem);
    height: 14.9rem;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: end;

    padding: 3.6rem 2.1rem 2.2rem 0;

    padding-right: clamp(0.1rem, 2vw, 2.1rem);
    padding-top: clamp(1.8rem, 9vw, 3.6rem);

    div {
      width: 60%;
      display: flex;
      flex-direction: column;

      padding: 0;

      color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_300};

      h3 {
        margin-bottom: 0.3rem;
        font-size: 1.6rem;
        font-weight: 600;
      }

      p {
        font-size: 1.2rem;
        line-height: 140%;
      }
    }
  }
`

export const EmptyDishesMessage = styled.div`
  padding: 2rem;
  margin-inline: 1.6rem;
  border-radius: .3rem;

  font-size: 1.2rem;

  text-align: center;

  background: ${({ theme }) => theme.COLORS.GRADIENT.GRADIENT_200};

  @media screen and (min-width: 769px) {
    margin: 0;
    font-size: 2rem;
  }
`