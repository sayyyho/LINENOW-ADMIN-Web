import * as S from "./FaqPage.styled";
import { FaqOpenChattingCard, FaqTextCard } from "./_components";

const FaqPage = () => {
  return (
    <S.FaqWrapper>
      <S.FaqMainZone>
        <FaqTextCard />
        <FaqOpenChattingCard />
      </S.FaqMainZone>
    </S.FaqWrapper>
  );
};

export default FaqPage;
