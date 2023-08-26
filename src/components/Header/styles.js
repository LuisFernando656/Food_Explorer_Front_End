import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 5.6rem 0 2.4rem;

  background: ${({ theme }) => theme.COLORS.DARK.DARK_700};

  > div:nth-child(2) {
    img {
      width: 2.4rem;
      height: 2.4rem;
    }

    h1 {
      font-size: 2.1rem;
    }
  }

  button {
    border: none;
    background: transparent;

    width: 2rem;
    height: 2rem;

    img {
      width: 2rem;
      height: 2rem;
    }
  }

  p {
    color: ${({ theme }) => theme.COLORS.TINTS.CAKE_200};
    font-size: 1.2rem;
  }
`

export const MenuButton = styled.button`
  color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
  width: 2.4rem;
  height: 1.8rem;

  svg {
    width: 2.4rem;
    height: 1.8rem;
  }
`
