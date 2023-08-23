import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  Wrapper,
  Title,
  Button,
  Sun,
  Background,
  Toggle,
} from "./styled";
import { selectTheme, toggleTheme } from "./themeSwitchSlice";

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const themeSwitch = useSelector(selectTheme);

  return (
    <Container>
      <Wrapper>
        <Title>Dark mode {themeSwitch ? "off" : "on"}</Title>
        <Button
          onClick={() => {
            dispatch(toggleTheme());
          }}
        >
          <Background />
          <Toggle $newProp={themeSwitch} />
          <Sun $newProp={themeSwitch} />
        </Button>
      </Wrapper>
    </Container>
  );
};
