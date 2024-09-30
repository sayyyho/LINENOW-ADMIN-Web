import {
  ButtonLayout,
  Chip,
  CommonButton,
  IconLabel,
} from "@linenow/design-system";
import * as S from "./MainWaitingCard.styled";
import { Waiting } from "@interfaces/waiting";
import { useMainWaitingCard } from "./_hooks/useMainWaitingCard";

interface MainWaitingCardProps {
  waiting: Waiting;
}

const MainWaitingCard = ({ waiting }: MainWaitingCardProps) => {
  const config = useMainWaitingCard({
    waitingStatus: waiting.waitingStatus,
    targetTime: "111",
  });

  return (
    <S.MainWaitingCardWrapper>
      <S.MainWaitingCardContentWrapper>
        <S.MainWaitingCardHeader>
          <span className="waitingID">{waiting.waitingID}</span>
          <span className="waitingTime">{waiting.registeredAt}</span>

          {config.isValidate ? (
            <CommonButton>
              <Chip scheme="grayLight" shape="outline">
                대기취소
              </Chip>
            </CommonButton>
          ) : null}
        </S.MainWaitingCardHeader>

        <S.MainWaitingCardInfoBox>
          <S.MainWaitingCardPartySizeInfo>
            <label>입장인원</label>
            <span className="partySize">{waiting.partySize}명</span>
          </S.MainWaitingCardPartySizeInfo>

          <S.MainWaitingCardUserInfo>
            <span className="userName">{waiting.user.name}</span>
            <IconLabel
              font={"b3"}
              gap={"0.25rem"}
              icon={{ name: "call_gray", size: "1rem" }}
            >
              {/* TODO:- components로 빼기 */}
              <span className="userPhone">{waiting.user.phoneNumber}</span>
            </IconLabel>
          </S.MainWaitingCardUserInfo>
        </S.MainWaitingCardInfoBox>

        <ButtonLayout $col={2} $colTemplate="1fr 6.25rem">
          {config.primaryButton}
          {config.secondButton}
        </ButtonLayout>
      </S.MainWaitingCardContentWrapper>
    </S.MainWaitingCardWrapper>
  );
};

export default MainWaitingCard;
