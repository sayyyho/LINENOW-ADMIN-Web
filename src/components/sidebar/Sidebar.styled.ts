import styled from "styled-components";

export const SidebarWrapper = styled.nav`
  grid-row: 2 / 3;
  background-color: ${({ theme }) => theme.colors.background.black};
  color: ${({ theme }) => theme.colors.font.white};
`;
