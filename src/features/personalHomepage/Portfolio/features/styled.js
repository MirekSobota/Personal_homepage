import styled, { keyframes } from 'styled-components';
import {ReactComponent as DangerIcon} from "../../../../common/assets/dangerIcon.svg";

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 11.375px solid #D1D5DA;
  border-radius: 50%;  
  border-top: 11.375px solid #0366D6;  
  width: 160px;  
  height: 160px;  
  animation: ${spinAnimation} 1s linear infinite;  
`;

export const ErrorIcon = styled(DangerIcon)`
stroke:  ${({ theme }) => theme.svg.fill};
`;

export const StyledLink = styled.a`
  background-color: ${({ theme }) => theme.primaryBlue.background};
  color: ${({ theme }) => theme.white.text};
  padding: 12px 16px 12px 16px  ;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration-line: none;
`;

export const SubHeader = styled.h3`
color: ${({ theme }) => theme.header.text};
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 1.2px;
margin:0;
`;

export const LeadParagraph = styled.p`
color: ${({ theme }) => theme.header.text};
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 1.4; 
letter-spacing: 1px;
margin:0;
`;





  