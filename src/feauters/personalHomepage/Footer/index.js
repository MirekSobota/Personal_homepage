
import { Container, SubHeader, EmailButton, FooterText, GitHubIcon, LinkedInIkon, Wrapper } from "./styled";
import { email, github } from "../../email";


export const Footer = () => {

    return (
        <>
            <Container>
                <SubHeader>This is</SubHeader>
                <EmailButton href={`mailto:${email}`} title={email} rel="noopener noreferrer">miroslaw.sobota@gmail.com</EmailButton>
                <FooterText>I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me</FooterText>
                <Wrapper>
                    <GitHubIcon />
                    <LinkedInIkon />
                </Wrapper>
            </Container>
        </>
    )
};