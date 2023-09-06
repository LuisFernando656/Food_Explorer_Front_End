import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  height: 7.7rem;

  padding-inline: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 6%;


  background-color: ${({theme}) => theme.COLORS.DARK.DARK_600};

  > div {
    gap: .6rem;

    svg {   
      color: ${({theme}) => theme.COLORS.LIGHT.LIGHT_700};  

      width: 2.2rem;
      height: 1.8rem;
    }

    h2{
      font-size: 1.5rem;
      color: ${({theme}) => theme.COLORS.LIGHT.LIGHT_700};  

    }
  }

  span {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT_200};  
    font-size: 1.2rem;

    white-space: nowrap;
  }
  `