import { theme } from "@linenow/system";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  transform: translate(-50%, 0%);
  top: 5.25rem;
  left: 50%;
  z-index: 25;

  width: 100%;
  height: calc(100% - 5.25rem);

  background-color: rgb(15 15 15 / 70%);
`;

export const SidebarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.black};
  color: ${({ theme }) => theme.colors.font.white};

  .tablet & {
    grid-row: 2 / 3;
  }
  .mobile & {
    position: fixed;
    z-index: 26;
    top: 3.25rem;
    width: 100%;
  }
`;

export const SidebarUserInfoWapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;

  padding: 2rem 1.25rem 2.25rem 1.25rem;

  h3 {
    ${({ theme }) => theme.fonts.h3};
    padding-bottom: 0.25rem;
  }

  h1 {
    ${({ theme }) => theme.fonts.h1};
    padding-bottom: 1.5rem;
  }

  .lime {
    color: ${({ theme }) => theme.colors.font.lime};
  }
`;
export const SidebarLogout = styled.span`
  margin-top: 1.5rem;

  ${({ theme }) => theme.fonts.b3};
  color: ${({ theme }) => theme.colors.font.gray};
  text-decoration: underline;
  cursor: pointer;
`;

export const SidebarButtonWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

interface SidebarButtonProps {
  $isSelected: boolean;
}
export const SidebarButton = styled(Link)<SidebarButtonProps>`
  padding: 1.5rem 1.25rem;
  background-color: ${({ $isSelected }) =>
    $isSelected
      ? theme.colors.background.blackLight
      : theme.colors.background.black};

  ${({ theme }) => theme.fonts.h2};
  color: ${({ $isSelected }) =>
    $isSelected ? theme.colors.font.lime : theme.colors.font.white};
`;
