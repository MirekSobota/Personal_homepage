import styled from "styled-components";
import { ReactComponent as SunIcon } from "./assets/lightTheme/sunIcon.svg";
import { ReactComponent as BackgroundIcon } from "./assets/lightTheme/background.svg";
import { ReactComponent as ToggleIcon } from "./assets/lightTheme/toggle.svg";

export const Container = styled.div`
  margin: 60px auto 0;
  display: flex;
  justify-content: flex-end;
`;

export const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const Title = styled.p`
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: 1.3;
text-transform: uppercase;
`;
export const Button = styled.button`
 background-color: transparent;
  border: none;
  cursor: pointer;
  width: 48px;
  position: relative;
`;

export const Background = styled(BackgroundIcon)`
position: absolute;
  width: 48px;
  height: 26px;
  transform: translate(-50%, -50%);
`;

export const Toggle = styled(ToggleIcon)`
position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  transform: translate(-100%, -50%);
`;

export const Sun = styled(SunIcon)`
   position: absolute;
  top: 50%;
  left: 50%;
  width: 14px;
  height: 14px;
  transform: translate(-120%, -50%);
`;


