import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
   :root {
    font-size: 62.5%;
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_300};

    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
  }

  input, h1, h2, textarea, label, select {
    font-family: 'Roboto', sans-serif;
  }

    
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 10px #0D1D25 inset !important;
    -webkit-text-fill-color: #C4C4CC !important;
  }

  button, body, a {
    font-family: 'Poppins', sans-serif;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }
`
