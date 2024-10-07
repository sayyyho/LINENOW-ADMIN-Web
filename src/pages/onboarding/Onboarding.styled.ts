import styled from "styled-components";
// import { theme } from "@linenow/system";

export const OnboardingWrapper = styled.section`
  background: rgba(0, 0, 0, 0.5); /* 반투명 검정 배경 */
  /* opacity: 0.05; */
`;

export const OnboardingWaitingCardListScroll = styled.div`
  display: grid;
  column-gap: 1.5rem;
  row-gap: 2.5rem;
  align-items: start;

  grid-template-columns: repeat(1, 1fr); /* 기본 1열 */

  @media (min-width: calc(320px*2 + 24px*1 + 32px*2 + 256px)) {
    grid-template-columns: repeat(2, 1fr); /* 화면이 660px 이상일 때 2열 */
  }

  @media (min-width: calc(320px*3  + 24px*2 + 32px*2 + 256px)) {
    grid-template-columns: repeat(3, 1fr); /* 화면이 1004px 이상일 때 3열 */
  }

  @media (min-width: calc(320px*4  + 24px*3 + 32px*2 + 256px)) {
    grid-template-columns: repeat(4, 1fr); /* 화면이 1348px 이상일 때 4열 */
  }

  width: 100%;

  padding: 1.5rem 2rem;
`;

export const OnboardingWaitingCardList = styled.section`
  flex-grow: 1;
  overflow-y: scroll;
`;

export const TextWrapper = styled.section`
  position: fixed;
  /* position: relative; */

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 9999;
  opacity: 1;
`;

export const OnboardingMainText = styled.h1`
  ${({ theme }) => theme.fonts.h1};
  color: ${({ theme }) => theme.colors.font.white};
  span {
    color: ${({ theme }) => theme.colors.font.blue};
  }
`;

export const OnboardingContentText = styled.h2`
  ${({ theme }) => theme.fonts.h2}
  color: ${({ theme }) => theme.colors.font.white};
  text-align: center;
  margin-bottom: 0.1rem;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); // 반투명 검정
  backdrop-filter: blur(0.25rem); // 배경 흐리게 처리
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 모달 컨테이너 스타일
export const ModalContainer = styled.div`
  padding: 2rem;
  border-radius: 0.5rem;
  z-index: 1100; // 배경 위에 표시되도록 z-index 설정
`;
