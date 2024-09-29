import {
  Button,
  ButtonLayout,
  Chip,
  CommonButton,
} from "@linenow/design-system";
import * as S from "./MainWaitingCard.styled";

const MainWaitingCard = () => {
  return (
    <S.MainWaitingCardWrapper>
      <S.MainWaitingCardContentWrapper>
        <S.MainWaitingCardHeader>
          <p>004</p>
          <span>오후 12시 34분 · 2024년 9월 24일 </span>
          <CommonButton>
            <Chip scheme="grayLight" shape="outline">
              대기취소
            </Chip>
          </CommonButton>
        </S.MainWaitingCardHeader>

        <S.MainWaitingCardInfoBox>
          <S.MainWaitingCardPartySizeInfo>
            <label>입장인원</label>
            <span>3명</span>
          </S.MainWaitingCardPartySizeInfo>
          {/* <div /> */}
          <S.MainWaitingCardUserInfo>
            <span>심서현님</span>

            <span>01023834346</span>
          </S.MainWaitingCardUserInfo>
        </S.MainWaitingCardInfoBox>

        <ButtonLayout $col={2} $colTemplate="1fr 6.25rem">
          <Button size="medium">1</Button>
          <Button size="medium">2</Button>
        </ButtonLayout>
      </S.MainWaitingCardContentWrapper>
    </S.MainWaitingCardWrapper>
  );
};

export default MainWaitingCard;
