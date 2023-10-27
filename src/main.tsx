import { ThemeProvider } from "styled-components";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import GlobalStyle from "./styles/GlobalStyle";
import mainTheme from "./styles/mainTheme";
import "@fontsource/open-sans";
import CharactersProviderWrapper from "./features/characters/store/CharactersProviderWrapper";
import UiContextWrapper from "./features/ui/store/UiContextWrapper";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UiContextWrapper>
      <CharactersProviderWrapper>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </CharactersProviderWrapper>
    </UiContextWrapper>
  </React.StrictMode>
);
