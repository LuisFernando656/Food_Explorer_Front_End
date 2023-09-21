import styled from 'styled-components'

export const Container = styled.div`
  .menu-retractable {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;

    z-index: 1;

    transition: left 0.3s ease;

    background-color: ${({ theme }) => theme.COLORS.DARK.DARK_400};
  }

  .menu-retractable.open {
    left: 0;
  }
`

export const MenuHeader = styled.div`
  width: 100%;
  height: 11.4rem;

  display: flex;
  align-items: center;
  justify-content: left;
  gap: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.DARK.DARK_700};

  padding: 6rem 2.8rem 2.4rem;

  h2 {
    font-size: 2.1rem;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  > button {
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
    background: transparent;
    border: none;

    width: 2.6rem;
    height: 2.6rem;

    svg {
      width: 2.6rem;
      height: 2.6rem;
    }
  }
`

export const MenuContent = styled.div`
  padding: 3.6rem 2.4rem 1.3rem;

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    display: none;
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;

    margin-top: 3.6rem;

    button {
      padding: 1rem;

      font-size: 2.4rem;
      font-weight: 300;
      color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_300};
      line-height: 140%;

      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK.DARK_1000};
    }

    > button {
      border: none;
      background: none;

      display: flex;

      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK.DARK_1000};
    }
  }
`
