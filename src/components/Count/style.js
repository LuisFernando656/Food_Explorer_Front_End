import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1.4rem;

  input {
    width: 2.4rem;

    text-align: center;

    border: none;
    background: transparent;
    outline: none;

    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_300};
    font-size: 1.6rem;
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
`
