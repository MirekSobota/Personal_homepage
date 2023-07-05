import { PersonalHomepage } from "./feauters/personalHomepage";
import { GlobalStyle } from "./feauters/GlobalStyled";
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
