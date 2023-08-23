import styled from "styled-components";

export const Container = styled.main`
  max-width: 1248px;
  margin: auto;
  padding: 16px;
  padding-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    min-width: 450px;
  }
`;

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.primary.text};
  background: ${({ theme }) => theme.primary.background};
  transition: background 0.8s, color 0.8s linear;
  padding-bottom: 109px;

  @media (max-width: ${({ theme }) => theme.breakpoint.iPad}) {
    min-width: 450px;
    padding-bottom: 15px;
  }
`;
