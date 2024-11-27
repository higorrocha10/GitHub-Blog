import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline: none;
  box-shadow: 0 0 0 2px ${(props) => props.theme.colors.blue};
}

body {
  font-family: "Nunito", serif;
  background-color: ${(props) => props.theme.colors["base-background"]};
  color: ${(props) => props.theme.colors["base-text"]};
  -webkit-font-smoothing: antialiased;
  

}

body, input, textarea, button {
  font: 400 1rem  "Nunito", sans-serif; /* Definir fuente, tamaño y espesura.*/
}

`;
