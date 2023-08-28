import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h2 {
   font-size : 3.7rem;
   color: ${({theme}) => theme.COLORS.LIGHT.LIGHT_100};
  }

  svg {
    width: 4.3rem;
    height: 4.3rem;

    color: ${({theme}) => theme.COLORS.TINTS.CAKE_100};
  }
`
