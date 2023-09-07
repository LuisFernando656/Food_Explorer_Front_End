import styled from 'styled-components'

export const Container = styled.div`
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  gap: 1.4rem;

  > div {
    width: 1.5rem;

    input {
      cursor: initial;
      display: block;

      border: none;
      background: transparent;
      outline: none;

      color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_300};
      font-size: 1.6rem;
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
    }
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
`
