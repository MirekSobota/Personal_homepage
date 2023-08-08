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
import { selectTheme, toggleTheme } from "../../../personalPageSlice";

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  
 

  return (
    <Container>
      <Wrapper>
        <Title>Dark mode off</Title>
        <Button onClick={()=> dispatch(toggleTheme())}>
          <Background />
          <Toggle />
          <Sun />
        </Button>
      </Wrapper>
    </Container>
  );
};
