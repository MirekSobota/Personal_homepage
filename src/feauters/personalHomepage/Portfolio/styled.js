import { styled } from "styled-components";

import { ReactComponent as GitHubIcon } from "./github.svg";

export const Container = styled.section`
display: grid;
justify-items: center;
`;

export const GitHub = styled(GitHubIcon)`
`;

export const Header = styled.h2`
font-size: 30px;
font-style: normal;
font-weight: 900;
line-height: normal;
letter-spacing: 1.5px;
margin: 12px 0 0 0;
`;

export const SubTitle = styled.p`
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 1.4; 
letter-spacing: 1px;
margin: 8px 0 0 0;
`; 
