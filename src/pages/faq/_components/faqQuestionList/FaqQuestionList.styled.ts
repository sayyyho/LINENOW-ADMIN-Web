import styled from "styled-components";

export const FaqQuestionListWrapper = styled.section`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  align-self: stretch;
`;

export const FaqQuestionListTitle = styled.h2`
  ${({ theme }) => theme.fonts.h2}
`;

export const FaqQuestionListCard = styled.section`
  display: flex;
  width: 100%;
  height: 5rem;
  padding: 0.75rem 1rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 0.5rem;
`;

export const FaqQuestionListCardTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1 0 0;
`;

export const FaqQuestionTextQA = styled.article`
  color: ${({ theme }) => theme.colors.font.blue};
  ${({ theme }) => theme.fonts.b1}
`;

export const FaqQuestionTextMain = styled.article`
  ${({ theme }) => theme.fonts.b2_b}
  color: ${({ theme }) => theme.colors.font.blackLight};
  white-space: pre-line;
`;

export const FaqAnswerListCard = styled.section`
  display: flex;
  width: 100%;
  min-height: 5rem;
  padding: 0.75rem 1rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background: ${({ theme }) => theme.colors.background.blueLight};
  border-top: 0.0625rem solid
    ${({ theme }) => theme.colors.scheme.grayLight.border};
`;

export const FaqListCard = styled.section`
  display: flex;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  width: 100%;
  flex-direction: column;
  border: 0.0625rem solid ${({ theme }) => theme.colors.scheme.grayLight.border};
`;
