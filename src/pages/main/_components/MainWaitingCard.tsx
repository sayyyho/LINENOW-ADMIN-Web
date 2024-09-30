import {
  Button,
  ButtonLayout,
  Chip,
  CommonButton,
  IconLabel,
} from "@linenow/design-system";
import * as S from "./MainWaitingCard.styled";

const MainWaitingCard = () => {
  return (
    <S.MainWaitingCardWrapper>
      <S.MainWaitingCardContentWrapper>
        <S.MainWaitingCardHeader>
          <span className="waitingID">004</span>
          <span className="waitingTime">오후 12시 34분</span>
          <CommonButton>
            <Chip scheme="grayLight" shape="outline">
              대기취소
            </Chip>
          </CommonButton>
        </S.MainWaitingCardHeader>

        <S.MainWaitingCardInfoBox>
          <S.MainWaitingCardPartySizeInfo>
            <label>입장인원</label>
            <span className="partySize">3명</span>
          </S.MainWaitingCardPartySizeInfo>

          <S.MainWaitingCardUserInfo>
            <span className="userName">심서현</span>
            <IconLabel
              font={"b3"}
              gap={"0.25rem"}
              icon={{ name: "call_gray", size: "1rem" }}
            >
              {/* TODO:- components로 빼기 */}
              <span className="userPhone">01023834346</span>
            </IconLabel>
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
