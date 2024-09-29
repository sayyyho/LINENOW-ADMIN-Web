import MainWaitingCard from "./_components/MainWaitingCard";
import * as S from "./MainPage.styled";

const MainPage = () => {
  return (
    <S.MainWaitingCardList>
      <MainWaitingCard />
      <MainWaitingCard />

      <MainWaitingCard />
    </S.MainWaitingCardList>
  );
};
export default MainPage;
