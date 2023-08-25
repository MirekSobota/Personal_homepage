import styled from "styled-components";

import { ReactComponent as GitHub } from "../../../assets/github.svg";
import { ReactComponent as LinkedIn } from "../../../assets/linkedIn.svg";

export const Container = styled.div`
  max-width: 700px;
  margin-top: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoint.iPad}) {
    padding-left: 12px;
    padding-right: 12px;
  }
`;

export const SubHeader = styled.p`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-style: normal;
    line-height: 1.3;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 18px;
    letter-spacing: 0.9px;
  }

  &:hover {
    transition: 0.3s ease;
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 14px;
    letter-spacing: 0.7px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin-top: 40px;
    gap: 16px;
  }
`;

export const GitHubIcon = styled(GitHub)`
  width: 48px;
  height: 48px;
  fill: ${({ theme }) => theme.svg.fill};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 32px;
    height: 32px;
  }

  &:hover {
    transition: 0.3s ease;
    fill: ${({ theme }) => theme.svg.hover};
  }
`;

export const LinkedInIkon = styled(LinkedIn)`
  width: 48px;
  height: 48px;
  fill: ${({ theme }) => theme.svg.fill};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 32px;
    height: 32px;
  }

  &:hover {
    transition: 0.3s ease;
    fill: ${({ theme }) => theme.svg.hover};
  }
`;
export const Link = styled.a`
  cursor: pointer;
`;
