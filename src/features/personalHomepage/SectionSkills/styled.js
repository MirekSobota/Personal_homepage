import styled from "styled-components";

import { ReactComponent as BulletIcon } from "../../../common/assets/bulletLightTheme.svg";

export const Wrapper = styled.section`
  max-width: 1216px;
  border-radius: 4px;
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03),
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);
  background: ${({ theme }) => theme.section.background};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    padding: 16px;
    margin: 0 0 50px 0;
  }
`;

export const SectionHeader = styled.h2`
  color: ${({ theme }) => theme.header.text};
  letter-spacing: 1.5px;
  padding: 32px 0 0 32px;
  font-size: 30px;
  font-weight: 900;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    padding: 0 0 0 32px;
    font-size: 18px;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.9px;
  }
`; 

export const Divider = styled.div`
  max-width: 1151px;
  height: 1px;
  margin: auto;
  background: ${({ theme }) => theme.divider.background};
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: auto 300px auto;
  gap: 8px 115px;
  grid-template-rows: repeat(8 1fr);
  padding: 30px 32px;
  margin-bottom: 72px;

  @media (max-width: ${({ theme }) => theme.breakpoint.iPad}) {
    grid-template-columns: 1fr 1fr;
    padding: 16px;
    padding-top: 0;
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    grid-template-columns: auto;
    padding: 16px;
    padding-top: 0;
    margin-bottom: 0;
  }
`;

export const Item = styled.li`
  display: flex;
  color: ${({ theme }) => theme.primary.text};
  list-style-type: none;
`;
export const Bullet = styled(BulletIcon)`
  fill: ${({ theme }) => theme.primaryBlue.background};
  margin-right: 16px;
  height: auto;
`;
