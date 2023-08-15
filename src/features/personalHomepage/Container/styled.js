import styled from "styled-components";

export const Container = styled.main`
  max-width: 1248px;
  margin: 0 auto ;
  padding: 16px;
`;

export const Wrapper = styled.div`
  color:${({ theme }) => theme.primary.text};
  background: ${({ theme }) => theme.primary.background};
  transition: background 1s, color 0.6s linear;
`;
