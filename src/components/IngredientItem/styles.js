import styled from 'styled-components'

export const Container = styled.div`
  width: 16.6rem;
  height: 4rem;

  display: flex;
  align-items: center;
  gap: .8rem;

  background-color: ${({ theme, $isNew }) => $isNew ? 'transparent' : theme.COLORS.LIGHT.LIGHT_600};
  color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_500};

  border: ${({ theme, $isNew }) => $isNew ? `2px dashed ${theme.COLORS.LIGHT.LIGHT_500}` : 'none'};

  border-radius: .8rem;
  padding: 1.2rem 1.6rem;

  
  > button {
    border: none;
    background: none;
  }
  
  .button-delete {    
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
  }
  
  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_500};
  }
  
  .button-add, .button-delete {
    width: 1.4rem;
    height: 1.4rem;
    
    display: flex;
    align-items: center;
    
    svg {
      width: 1.4rem;
      height: 1.4rem;
    }
    
  }
  
  > input {
    width: 100%;
    
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
    
    cursor: ${({$isNew}) => $isNew ? 'auto' : 'default'};
    
    background: transparent;

    border: none;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_500};
    } 
  }

`