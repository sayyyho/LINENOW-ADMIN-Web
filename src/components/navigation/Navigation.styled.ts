import styled from "styled-components";

export const NavigationWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: 1 / 3;

  width: 100%;
  padding: 1rem 1.25rem;

  background-color: ${({ theme }) => theme.colors.background.black};
  color: ${({ theme }) => theme.colors.font.white};
  img {
    height: 1.25rem;
  }
`;
