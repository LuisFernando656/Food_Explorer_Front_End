import styled from 'styled-components'

export const Container = styled.div`
  width: max-content;
  height: 100%;

  padding: .4rem .8rem;

  border-radius: .5rem;
  background: ${({theme}) => theme.COLORS.DARK.DARK_1000};

  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
  font-weight: 500;
  line-height: 2.4rem;
  text-align: center;
`