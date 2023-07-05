import styled from "styled-components";

export const Wrapper = styled.header`
  max-width: 1089px;
  margin-top: -30px;
  display: grid;
  grid-gap: 64px;
  grid-template-columns: auto 1fr;
  align-items: center;
  font-size: 20px;
  margin-bottom: 63px;
`;

export const About = styled.div`
  max-width: 633px;
  padding-top: 14px;
`;

export const Image = styled.img`
  width: 398px;
  height: 398px;
  border-radius: 50%;
`;

export const ThisIs = styled.p`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 12px;
`;

export const Name = styled.h1`
  font-weight: 900;
  font-size: 38px;
  margin: 12px 0 0 0;
  color: ${({theme}) => theme.header.text}
`;

export const Content = styled.p`
  max-width: 650px;  
  font-weight: 400;
  line-height: 1.4;
  margin: 35px 0 32px 0;
`;


export const HireMe = styled.a`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration-line: none;
`;

export const HireMeButton = styled.button`
  display: inline-flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 4px;
`;