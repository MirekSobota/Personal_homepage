import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import { PersonalHomepage } from "../features/personalHomepage";
import { GlobalStyle } from "./GlobalStyled";
import { lightTheme, darkTheme } from "./theme";
import { selectTheme } from "../features/personalHomepage/ThemeSwitcher/themeSwitchSlice";
import { Wrapper } from "../features/personalHomepage/Container/styled";

function App() {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Wrapper>
        <PersonalHomepage />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
