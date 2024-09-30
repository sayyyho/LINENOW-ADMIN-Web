import { dummyWaitingsResponse } from "./_components/dummyWaitings";
import MainWaitingCard from "./_components/MainWaitingCard";
import * as S from "./MainPage.styled";

const MainPage = () => {
  return (
    <S.MainWaitingCardList>
      {dummyWaitingsResponse.map((item, index) => (
        <MainWaitingCard key={index} waiting={item} />
      ))}
    </S.MainWaitingCardList>
  );
};
export default MainPage;
