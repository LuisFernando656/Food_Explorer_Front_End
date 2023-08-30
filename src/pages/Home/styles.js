import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  overflow: auto;

  > div:nth-child(3) {
    margin: 0 0 2.4rem 2.4rem;
  }

  footer {
    margin-top: 2.4rem;
  }
  `

export const IntroDescription = styled.div`
  height: 12rem;

  display: flex;
  justify-content: right;
  align-items: center;

  
  background: ${({ theme }) => theme.COLORS.GRADIENT.GRADIENT_200};
  
  margin: 15.8rem 1.6rem 6.2rem 3.6rem;
  margin-right: clamp(.5rem, 4vw, 1.6rem);
  
  border-radius: .3rem;
  
  position: relative;
  
  
  img {
    position: absolute;
    top: -3rem;
    left: -3rem;
    object-fit: cover; 

    width: clamp(13rem, 40vw, 19.1rem);
    height: 14.9rem;
  }
  
  > div {
    width: 100%;
    display: flex;
    justify-content: end;
    
    padding: 3.6rem 2.1rem 2.2rem 0;

    padding-right: clamp(.1rem, 2vw, 2.1rem);
    padding-top: clamp(1.8rem, 9vw, 3.6rem);

    div {
      width: 60%;
      display: flex;
      flex-direction: column;

      padding: 0;

      color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_300};
      
      h3{
        margin-bottom: .3rem;
        font-size: 1.6rem;
        font-weight: 600;
      }
  
      p {
        font-size: 1.2rem;
        line-height: 140%;
      }
    } 
  }
`