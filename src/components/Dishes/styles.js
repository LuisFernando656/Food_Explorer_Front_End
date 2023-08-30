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

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1.4rem;
    
    span {
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
    }

    > button {
      border: none;
      background: transparent;

      color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};

      width: 2.4rem;
      height: 2.4rem;

      svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }

  }
  
  > button:nth-child(6) {
    padding: .6rem;
  }
`
