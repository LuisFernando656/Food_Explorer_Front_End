import styled from 'styled-components'

export const Container = styled.section`
  > h3 {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_300};

    margin-bottom: 2.4rem;
  }

  margin-bottom: 2.4rem;

  > div {
    position: relative;

    > div {
      position: relative;
      overflow-x: auto;

      -ms-overflow-style: none;
      scrollbar-width: none;

      > div {
        display: flex;
        flex-flow: row nowrap;
        gap: 1.6rem;
      }
    }
    > div::-webkit-scrollbar {
      display: none;
    }
  }

  @media screen and (min-width: 769px) {
    > h3 {
      font-size: 3.2rem;
    }

    > div {
      > div:nth-child(1), > div:nth-child(2) {
        width: min(20%, 27.7rem);

        display: flex;
        align-items: center;
        justify-content: left;

        position: absolute;
        top: 0;
        left: -2px;
        right: auto;
        bottom: 0;

        z-index: 1;

        background: ${({ theme }) => theme.COLORS.GRADIENT.GRADIENT_101};

        
        button {
          background: transparent;
          border: none;
          height: 100%;
        }

        svg {
          width: 4rem;
          height: 4rem;
          color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
        }
      }

      > div:nth-child(2) {
        justify-content: right;

        right: -2px;
        left: auto;
        background: ${({ theme }) => theme.COLORS.GRADIENT.GRADIENT_100};
      }
    }
  }
`
