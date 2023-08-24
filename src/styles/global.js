import { createGlobalStyle } from "styled-components";

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
    background-color: ${({theme}) => theme.COLORS.DARK.DARK_400};
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT_300};

    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
  }

  input, h1, textarea, label {
    font-family: 'Roboto', sans-serif;
  }

  button, body, a {
    font-family: 'Poppins', sans-serif;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`