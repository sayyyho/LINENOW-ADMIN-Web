// import * as S from "./Onboarding.styled";
// import TagList from "@pages/main/_components/tag/TagList";
// import { ONBOARDING_WAITING } from "@constants/onboarding";
// import MainWaitingCard from "@pages/main/_components/MainWaitingCard";
// import { useState } from "react";

// export const OnboardingPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(true); // 모달 상태 관리

//   const closeModal = () => {
//     setIsModalOpen(false); // 모달 닫기
//   };

//   return (
//     <S.OnboardingWrapper onClick={() => setIsModalOpen(!isModalOpen)}>
//       {isModalOpen && (
//         <S.ModalBackground onClick={closeModal}>
//           <S.ModalContainer onClick={(e) => e.stopPropagation()}>
//             <S.OnboardingContentText>
//               잠깐, 오픈런 손님을 다 받으셨나요?
//             </S.OnboardingContentText>
//             <S.OnboardingMainText>
//               라인나우 대기를 받으시려면 <span>운영 시작</span>을 클릭해주세요!
//             </S.OnboardingMainText>
//           </S.ModalContainer>
//         </S.ModalBackground>
//       )}

//       <TagList
//         selectedTag={"전체보기"}
//         onTagClick={() => setIsModalOpen(true)}
//         waitingCount={10}
//         callingCount={7}
//         arrivedCount={1}
//         canceledCount={2}
//       />

//       {ONBOARDING_WAITING?.length > 0 ? (
//         <S.OnboardingWaitingCardList>
//           <S.OnboardingWaitingCardListScroll>
//             {ONBOARDING_WAITING.map((item, index) => (
//               <MainWaitingCard key={index} waiting={item} />
//             ))}
//           </S.OnboardingWaitingCardListScroll>
//         </S.OnboardingWaitingCardList>
//       ) : (
//         <div>아직 대기가 없습니다.</div>
//       )}
//     </S.OnboardingWrapper>
//   );
// };
