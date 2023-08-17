import styled from "styled-components";

import { ReactComponent as SunIcon } from "../../../common/assets/sunIcon.svg";
import { ReactComponent as BackgroundIcon } from "../../../common/assets/background.svg";
import { ReactComponent as ToggleIcon } from "../../../common/assets/toggle.svg";

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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    display: none;
  }
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
  fill: ${({ theme }) => theme.svgTheme.fillBackGround};
`;

export const Toggle = styled(ToggleIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.svgTheme.fillToggle};
  transition: transform 0.3s ease;
  transform: ${props => props.$newProp ? 'translate(-100%, -50%)' : 'translate(0%, -50%)'};
`;

export const Sun = styled(SunIcon)`
  fill: ${({ theme }) => theme.svg.fill};
  position: absolute;
  top: 50%;
  left: 50%;
  width: 14px;
  height: 14px;
  fill: ${({ theme }) => theme.svgTheme.fillSun};
  transition: transform 0.3s ease;
  transform: ${props => props.$newProp ? 'translate(-120%, -50%)' : 'translate(20%, -50%)'};
`;


