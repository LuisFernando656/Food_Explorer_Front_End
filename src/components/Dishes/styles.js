import styled from 'styled-components'

export const Container = styled.div`
  min-width: 21rem;
  min-height: 29.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  padding: 2.4rem;

  position: relative;

  background: ${({ theme }) => theme.COLORS.DARK.DARK_200};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK.DARK_300};
  border-radius: 0.8rem;

  > button:nth-child(1) {
    position: absolute;
    right: 0;
    top: 0;

    height: 2.2rem;
    width: 2.4rem;

    margin: 1.6rem 1.6rem 0 0;

    background: transparent;
    border: none;

    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_300};

    svg {
      height: 2.2rem;
      width: 2.4rem;
    }
  }

  img {
    border-radius: 50%;
    height: 8.8rem;
    width: 8.8rem;
  }

  > h3 {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
  }

  > h4 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.TINTS.CAKE_200};
  }

  > div:nth-child(5) {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    > button:nth-child(2) {
      padding: 1.2rem 2.4rem;
    }
  }

  @media screen and (min-width: 769px) {
    min-height: 46.2rem;
    min-width: 30.4rem;

    gap: 1.5rem;

    img {
      width: 17.6rem;
      height: 17.6rem;
    }

    h3 {
      width: 25.6rem;
      
      text-align: center;
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 140%;
    }

    p {
      width: 25.6rem;

      font-family: 'Roboto', sans-serif;
      font-size: 1.4rem;
      line-height: 160%;
      font-weight: 400;
      text-align: center;
    }

    h4 {
      font-size: 3.2rem;
      line-height: 160%;
    }

    > div:last-child {
      display: flex;
      gap: 1.6rem;

      input {
        font-size: 2rem;
        font-weight: 700;
        line-height: 160%;
      }
    }
  }
  
`
