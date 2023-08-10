import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body{
  margin:115px auto;
  font-family:"Inter",sans-serif;
  color:${({ theme }) => theme.primary.text};
  background-color: ${({ theme }) => theme.primary.background};
}
`;

