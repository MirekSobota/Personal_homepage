import styled, { keyframes } from "styled-components";

import { ReactComponent as GitHubIcon } from "../../../assets/github.svg";

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Container = styled.section`
  display: grid;
  justify-items: center;
`;

export const Wrapper = styled.div`
  max-width: 420px;
  margin: auto;
  margin-bottom: 20px;
  display: grid;
  justify-items: center;
`;

export const GitHub = styled(GitHubIcon)`
  fill: ${({ theme }) => theme.primaryBlue.background};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 32px;
    height: 32px;
  }
`;

export const Header = styled.h2`
  color: ${({ theme }) => theme.header.text};
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.5px;
  margin: 12px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 18px;
    letter-spacing: 0.9px;
  }
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.header.text};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 1px;
  margin: 8px 0 88px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 17px;
    letter-spacing: 0.85px;
    margin: 8px 0 24px 0;
  }
`;

export const StyledList = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;
  grid-gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.iPad}) {
    grid-template-columns: auto;
    grid-gap: 16px;
  }
`;

export const StyledListItem = styled.ul`
  padding: 56px;
  border-radius: 4px;
  border: 6px solid ${({ theme }) => theme.border.border};
  box-shadow: 0px 16px 58px 0px ${({ theme }) => theme.shadow.colorOne},
    0px -2px 50px 0px ${({ theme }) => theme.shadow.colorTwo};
  background: ${({ theme }) => theme.section.background};
  margin: 0;
  display: flex;
  flex-direction: column;
  opacity: 0;
  animation: ${fadeIn} 0.5s forwards;
  animation-delay: ${({ delay }) => delay}s;

  &:hover {
    border: 6px solid ${({ theme }) => theme.border.borderHover};
    transition: 0.3s ease;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    padding: 24px;
    max-width: auto;
    word-break: break-all;
  }
`;

export const SubHeader = styled.h2`
  color: ${({ theme }) => theme.primaryBlue.text};
  margin: 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.2px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 16px;
    letter-spacing: 0.8px;
  }
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.primaryBlue.text};
  margin: 0;
`;

export const Paragraph = styled.span`
  margin: 8px 0 0 0;
`;

export const Description = styled.p`
  margin: 16px 0 16px 0;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.9px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 14px;
    line-height: normal;
    letter-spacing: 0.7px;
  }
`;
