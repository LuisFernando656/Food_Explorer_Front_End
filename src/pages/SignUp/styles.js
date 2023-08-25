import styled from "styled-components";

export const Container = styled.div`
  width: clamp(32rem, 95vw, 35.6rem);

  margin: 15.8rem auto;
  padding-inline: 2rem;

  > div:nth-child(1) {
    margin-bottom: 7.3rem;
    justify-content: left;
  }

  > a {
    margin-top: 3.2rem;

    text-decoration: none;
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT_100};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;

    display: flex;
    justify-content: center;
  }

  `

export const Form = styled.form`
  width: 100%;

  > div {
    margin-bottom: 3.2rem;
    
  
    label {
      padding-bottom: .8rem;
    }
  }
`