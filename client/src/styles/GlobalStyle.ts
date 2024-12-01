import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: 'Open Sans', Arial, sans-serif;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  button {
    font-family: inherit;
  }
`;

export default GlobalStyle;
