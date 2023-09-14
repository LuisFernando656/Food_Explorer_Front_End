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
      
      p{
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
    }
  }

  > button {
    width: 18%;

    white-space: nowrap;

    padding: 1.2rem;

    svg {
      min-width: 3.2rem;
      min-height: 3.2rem;
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

    svg {
      width: 3.2rem;
      height: 3.2rem;
    }
  }
`
