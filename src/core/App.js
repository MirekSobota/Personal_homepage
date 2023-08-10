import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import { PersonalHomepage } from "../features/personalHomepage";
import { GlobalStyle } from "./GlobalStyled";
import { lightTheme, darkTheme } from "./theme";
import { selectTheme } from "../features/personalHomepage/ThemeSwitcher/themeSwitchSlice";

function App() {
const theme = useSelector(selectTheme)

  return (
    <ThemeProvider theme={theme ?  lightTheme : darkTheme}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
