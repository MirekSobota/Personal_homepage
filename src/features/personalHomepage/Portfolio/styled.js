import { styled } from "styled-components";

import { ReactComponent as GitHubIcon } from "../../../common/assets/github.svg";

export const Container = styled.section`
  display: grid;
  justify-items: center;
`;

export const Wrapper = styled.div`
  max-width: 420px;
  margin: auto;
  display: grid;
  justify-items: center;
`;

export const GitHub = styled(GitHubIcon)`
  fill: ${({ theme }) => theme.primaryBlue.background};  
`;

export const Header = styled.h2`
  color: ${({ theme }) => theme.header.text};
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.5px;
  margin: 12px 0 0 0;
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.header.text};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4; 
  letter-spacing: 1px;
  margin: 8px 0 88px 0;
`;

export const StyledList = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;
  grid-gap:32px;
`;

export const StyledListItem = styled.ul`
  padding: 56px;
  border-radius: 4px;
  border: 6px solid var(--diff-bg-neutral, rgba(209, 213, 218, 0.30));
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02);
  background: ${({ theme }) => theme.section.background};
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const SubHeader = styled.h2`
  color: ${({ theme }) => theme.primaryBlue.text};
  margin: 0;
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.primaryBlue.text};
  margin: 0;
`;

export const Paragraph = styled.span`
  margin: 8px 0 0 0;
`;

export const Description = styled.p`
  margin:24px 0 16px 0;
`;