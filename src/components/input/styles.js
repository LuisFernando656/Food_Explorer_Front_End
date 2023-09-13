import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  label {
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT_400};  
  }

  div {
    width: 100%;
    height: 4.8rem;
    display: flex;
    align-items: center;

    padding: 1.2rem 1.4rem;
    
    background: ${({theme}) => theme.COLORS.DARK.DARK_900};
    border-radius: .5rem;

    span {
      color: ${({theme}) => theme.COLORS.LIGHT.LIGHT_400};
    }
   
    svg {
      margin-right: 1.4rem;
      width: 2.4rem;
      height: 2.4rem;
    }
    
    input {
      width: 100%;

      background: transparent;

      color: ${({theme}) => theme.COLORS.LIGHT.LIGHT_400};
      font-size: 1.6rem;
      
      border: none;
      outline: none;

      &::placeholder {
        color: ${({theme}) => theme.COLORS.LIGHT.LIGHT_500}
      }
    }
  }
`