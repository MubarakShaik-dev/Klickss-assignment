import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #1a1a1a;
    color: #fff;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: #4A90E2;
  }
`;

export default GlobalStyle;