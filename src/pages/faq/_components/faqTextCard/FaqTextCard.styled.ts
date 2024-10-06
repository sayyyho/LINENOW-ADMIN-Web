import styled from "styled-components";

export const FaqTextWrapper = styled.section`
  display: flex;
  padding: 1.5rem 0rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
`;

export const FaqTitle = styled.h1`
  ${({ theme }) => theme.fonts.h1};
`;

export const FaqNoticeText = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${({ theme }) => theme.fonts.b1};
`;

export const FaqEnableText = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${({ theme }) => theme.fonts.b2};
`;
