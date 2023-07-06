import styled from "styled-components";
import { ReactComponent as SunIcon } from "./assets/lightTheme/sunIcon.svg";
import { ReactComponent as BrightnessIcon } from "./assets/lightTheme/brightness.svg";
import { ReactComponent as BackgroundIcon} from "./assets/lightTheme/background.svg";
import { ReactComponent as ToggleIcon} from "./assets/lightTheme/toggle.svg";

export const Wrapper = styled.div`
    margin: 60px auto 0;
    display: flex;
    justify-content: flex-end;
`;

export const Button = styled.button`

`;

export const Sun = styled(SunIcon)`
background: ${({ theme }) => theme.primaryBlue.background};
color: ${({ theme }) => theme.primaryBlue.text};
`;

export const Bright = styled(BrightnessIcon)`
background: ${({ theme }) => theme.primaryBlue.background};
color: ${({ theme }) => theme.primaryBlue.text};
`;

export const Background = styled(BackgroundIcon)`
background: ${({ theme }) => theme.divider.background};
color: ${({ theme }) => theme.header.text};
`;

export const  Toggle = styled(ToggleIcon)`
background: ${({ theme }) => theme.divider.background};
color: ${({ theme }) => theme.header.text};
`;
