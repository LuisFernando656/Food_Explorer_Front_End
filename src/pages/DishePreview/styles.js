import styled from 'styled-components'

export const Container = styled.div`
  header {
    top: 0;
  }
  main {
    margin: 15rem clamp(2rem, 14vw, 5.6rem) 0;

    > div:nth-child(1) {
      a {
        font-size: 2.4rem;

        svg {
          width: 3.2rem;
          height: 3.2rem;
        }
      }
    }
  }
  
  footer{
    margin-top: 5.4rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2.4rem;

  > img {
    width: clamp(20rem, 63vw, 26.3rem);
    height: clamp(20rem, 63vw, 26.3rem);

    margin-top: 1.6rem;
  }

  h3 {
    font-size: 2.7rem;
    font-weight: 500;
    line-height: 140%;
    text-align: center;
  }

  p{
    text-align: center;
    line-height: 140%;
  }

  > div:nth-child(4){
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.4rem;

    margin-bottom: 2.4rem;
  }

  > div:nth-child(5) {
    width: 100%;

    display: flex;
    align-items: center;
    gap: 1.6rem;

    > button {
      font-size: 1rem;
      padding: .8rem;
    }
  } 
`
