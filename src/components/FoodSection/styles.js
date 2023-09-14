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

    @keyframes slideIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .div-button-left {
      animation: slideIn 0.3s ease-in-out; /* Animação de entrada */
    }

    .div-button-right {
      animation: slideIn 0.3s ease-in-out; /* Animação de entrada */
    }

    > div {
      > .div-button-left,
      > .div-button-right {
        width: min(20%, 27.7rem);

        display: flex;
        align-items: center;
        justify-content: left;

        position: absolute;
        top: 0;
        left: -2px;
        right: auto;
        bottom: 0;

        z-index: 2;
        pointer-events: none;

        background: ${({ theme }) => theme.COLORS.GRADIENT.GRADIENT_101};

        > button {
          transition: all 600ms ease-in-out;
          width: 8rem;
          background: transparent;
          border: none;
          height: 100%;
          pointer-events: auto;
        }

        svg {
          width: 4rem;
          height: 4rem;
          color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
        }
      }

      > .div-button-right {
        justify-content: right;

        right: -2px;
        left: auto;
        background: ${({ theme }) => theme.COLORS.GRADIENT.GRADIENT_100};
      }

      > div:nth-child(1) {
        user-select: none;
        > div {
          > div {
            > div {
              max-width: 30.4rem;
              min-height: auto;
            }
          }
        }
      }
    }
  }
`
