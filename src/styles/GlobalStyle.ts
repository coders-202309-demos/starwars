import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  html {
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }

  body {
    margin: 0;
    font-size: 1.2rem;
    background-color: ${({ theme }) => theme.colors.main};
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  dl,
  dd {
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
    font: inherit;
    color: inherit;
    background: none;
    border: none;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyle;
