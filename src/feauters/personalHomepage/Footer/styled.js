import styled from "styled-components";

import { ReactComponent as GitHub } from "./images/github.svg";
import { ReactComponent as LinkedIn } from "./images/linkedIn.svg";

export const Container = styled.div`
max-width: 700px;
margin-top: 120px;
`;

export const SubHeader = styled.p`
font-weight: 700;
text-transform: uppercase;
font-size: 12px;
`;

export const EmailButton = styled.a`
color: ${({ theme }) => theme.header.text};
font-size: 32px;
font-style: normal;
font-weight: 900;
line-height: normal;
letter-spacing: 1.6px;
text-decoration-line: none;
margin-top: 24px;
transition: 0.2s ease;

&:hover{
    color: ${({ theme }) => theme.primaryBlue.text};  
}
`;

export const FooterText = styled.p`
color: ${({ theme }) => theme.header.text};
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 1.4;
letter-spacing: 0.9px;
margin-top: 24px;
`;

export const Wrapper = styled.div`
display: flex;
gap: 24px;
margin-top: 56px;
`;

export const GitHubIcon = styled(GitHub)`
transition: 0.2s ease;

&:hover{
    fill: ${({ theme }) => theme.primaryBlue.background};  
}
`;

export const LinkedInIkon = styled(LinkedIn)`
transition: 0.2s ease;

&:hover{
    fill: ${({ theme }) => theme.primaryBlue.background}; 
}
`;
export const Link = styled.a`
cursor: pointer;
`;