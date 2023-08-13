import styled, { keyframes } from 'styled-components';

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







  