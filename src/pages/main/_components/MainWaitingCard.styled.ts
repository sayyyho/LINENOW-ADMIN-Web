import { theme } from "@linenow/design-system";
import styled from "styled-components";

export const MainWaitingCardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 20rem;
  height: auto;

  border-radius: 0.75rem;

  background-color: lime;
`;

export const MainWaitingCardContentWrapper = styled.section`
  margin-top: 1.25rem;
  padding: 1rem;
  padding-top: 1rem;

  background-color: white;
`;

export const MainWaitingCardHeader = styled.div`
  display: flex;

  gap: 0.5rem;
  align-items: center;

  padding: 0.25rem 0.25rem 0.75rem 0.25rem;

  ${({ theme }) => theme.fonts.h1}
  span {
    ${({ theme }) => theme.fonts.caption}
    color: ${({ theme }) => theme.colors.font.gray};
    flex-grow: 1;
  }
`;

export const MainWaitingCardInfoBox = styled.div`
  display: flex;

  margin-bottom: 1.25rem;
  padding: 1rem 0rem;

  border-radius: 0.5rem;
  border: solid 1px;
  border-color: ${({ theme }) => theme.colors.border.grayLight};
`;

export const MainWaitingCardPartySizeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0rem 1.25rem;

  border-right: 1px solid;
  border-color: ${({ theme }) => theme.colors.border.gray};

  > label {
    ${({ theme }) => theme.fonts.caption}
    color: ${({ theme }) => theme.colors.font.gray};
  }
`;

export const MainWaitingCardUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 1.25rem;
`;
