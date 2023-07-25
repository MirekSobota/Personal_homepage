import {
  Container,
  Wrapper,
  Title,
  Button,
  Sun,
  Background,
  Toggle,
} from "./styled";

export const ThemeSwitcher = () => {
  
  return (
    <Container>
      <Wrapper>
        <Title>Dark mode off</Title>
        <Button>
          <Background />
          <Toggle />
          <Sun />
        </Button>
      </Wrapper>
    </Container>
  );
};
