import {
  Container,
  SubHeader,
  EmailButton,
  FooterText,
  GitHubIcon,
  LinkedInIkon,
  Wrapper,
  Link,
} from "./styled";
import { email, github, linkedin } from "../../../common/personalData";

export const Footer = () => {
  return (
    <>
      <Container>
        <SubHeader>Let’s talk!</SubHeader>
        <EmailButton
          href={`mailto:${email}`}
          title={email}
          rel="noopener noreferrer"
        >
          miroslaw.sobota@gmail.com
        </EmailButton>
        <FooterText>
          I’m always open to new projects whenever I have the time. If you have
          a website or dashboard in mind and need some help to make your ideas
          come to life, feel free to contact me ✌{" "}
        </FooterText>
        <Wrapper>
          <Link href={github}>
            <GitHubIcon />
          </Link>
          <Link href={linkedin}>
            <LinkedInIkon />
          </Link>
        </Wrapper>
      </Container>
    </>
  );
};
