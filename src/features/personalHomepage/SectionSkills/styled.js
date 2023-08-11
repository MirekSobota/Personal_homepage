import styled from "styled-components";

import { ReactComponent as BulletIcon } from "../../../common/assets/bulletLightTheme.svg";

export const Wrapper = styled.section`
  max-width: 2016px;
  border-radius: 4px;
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02);
  background: ${({ theme }) => theme.section.background};
`;

export const SectionHeader = styled.h2`
  color: ${({ theme }) => theme.header.text};
  letter-spacing: 1.5px;
  padding: 32px 0 0 32px;
  font-size: 30px;
  font-weight: 900;
`;

export const Divider =  styled.div`
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
