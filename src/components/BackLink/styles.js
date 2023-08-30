import styled from 'styled-components'

export const Container = styled.div`
  a {
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_300};
    font-weight: 500;
    line-height: 140%;

    svg {
      width: 2.2rem;
      height: 2.2rem;
    }
  }
`