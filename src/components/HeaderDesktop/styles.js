import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 10.4rem;

  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;

  padding-block: 2.4rem;
  padding-inline: 6%;

  position: fixed;

  background: ${({ theme }) => theme.COLORS.DARK.DARK_600};

  > div:first-child {
    align-items: flex-start;
    cursor: pointer;

    > div {
      flex-direction: column;
      text-align: end;

      h2 {
        font-size: 2.4rem;
        white-space: nowrap;
      }

      p {
        text-align: end;
      }
    }

    svg {
      width: 3rem;
      height: 3rem;
    }
  }

  > div:nth-child(2) {
    width: 55%;

    div {
      justify-content: center;

      svg {
        color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_400};
      }

      input {
        width: 70%;
      }

      input[type='search']::-webkit-search-decoration,
      input[type='search']::-webkit-search-cancel-button,
      input[type='search']::-webkit-search-results-button,
      input[type='search']::-webkit-search-results-decoration {
        display: none;
      }
    }
  }

  > button {
    width: 18%;

    white-space: nowrap;
    font-size: clamp(1.15rem, 1vw, 1.4rem);

    padding: 1.2rem;

    > svg {
      width: 3.2rem;
      height: 3.2rem;
    }
  }

  > button:last-child {
    width: 3.2rem;
    height: 3.2rem;

    border: none;
    background: none;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};

    > svg {
      min-width: 3.2rem;
      min-height: 3.2rem;
    }
  }
`
