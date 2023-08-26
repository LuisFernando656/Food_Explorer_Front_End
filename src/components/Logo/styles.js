import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h1 {
   font-size : 3.7rem;
   color: ${({theme}) => theme.COLORS.LIGHT.LIGHT_100};
  }

  img {
    width: 4.3rem;
    height: 4.3rem;
  }
`
