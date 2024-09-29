import styled from "styled-components";

export const SidebarWrapper = styled.nav`
  width: 17.2rem;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.background.black};
  color: ${({ theme }) => theme.colors.font.white};
`;
