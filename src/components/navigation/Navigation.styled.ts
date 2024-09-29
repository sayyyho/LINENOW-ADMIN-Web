import styled from "styled-components";

export const NavigationWrapper = styled.header`
  width: 100%;
  height: 3.5rem;

  background-color: ${({ theme }) => theme.colors.background.black};
  color: ${({ theme }) => theme.colors.font.white};
`;
