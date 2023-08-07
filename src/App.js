import { PersonalHomepage } from "./features/personalHomepage";
import { GlobalStyle } from "./features/GlobalStyled";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <PersonalHomepage />
      </ThemeProvider>
    </>
  );
}

export default App;
