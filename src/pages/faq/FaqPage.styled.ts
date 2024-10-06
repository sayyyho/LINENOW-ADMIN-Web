import styled from "styled-components";

export const FaqWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.background.white};
`;

export const FaqMainZone = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
