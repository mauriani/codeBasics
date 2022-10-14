import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline:0;
}

body {
  background: ${theme.colors.background};
  color: ${theme.colors.base_text};
  -webkit-font-smoothing: antialiased;
}

body,
input,
textarea,
button {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1rem;
}
`;
