import styled from 'styled-components'

export const Container = styled.div`
  width: max-content;
  display: flex;
  align-items: center;

  gap: 1.4rem;

  > div {
    width: 100%;
    
    span{
      border: none;
      background: transparent;
      outline: none;
      
      text-align: center;

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
