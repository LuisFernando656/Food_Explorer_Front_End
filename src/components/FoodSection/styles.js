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
`
