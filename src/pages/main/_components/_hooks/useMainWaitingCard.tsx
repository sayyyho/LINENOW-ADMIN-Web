import { WaitingStatus } from "@linenow-types/status";
import { Button } from "@linenow/design-system";
import { ReactNode } from "react";

interface MainWaitingCardProps {
  waitingStatus: WaitingStatus;
  targetTime?: string;
}

interface MainWaitingCardConfig {
  backgroundColor: string;
  isValidate: boolean;
  primaryButton: ReactNode;
  secondButton?: ReactNode;

  partySizeColor?: string;
  userInfoOpercity?: string;
}

export const useMainWaitingCard = ({
  waitingStatus,
  targetTime,
}: MainWaitingCardProps) => {
  const mainWaitingCardConfig: Record<WaitingStatus, MainWaitingCardConfig> = {
    // waiting: - 대기 중임
    waiting: {
      backgroundColor: "blueLight",
      isValidate: true,
      primaryButton: (
        <Button size="medium" scheme="blue" shape="fill">
          대기 호출하기
        </Button>
      ),
      secondButton: (
        <Button size="medium" shape="fill" scheme="grayLight" disabled>
          입장완료
        </Button>
      ),
    },

    // readyToConfirm: - 입장 확정을 받기 위한 3분의 기다림
    ready_to_confirm: {
      backgroundColor: "limeLight",
      isValidate: true,
      primaryButton: (
        <Button size="medium" scheme="limeLight" shape="fill">
          손님이 입장을 확정중이에요
        </Button>
      ),
      secondButton: (
        <Button size="medium" shape="fill" scheme="blueLight">
          입장완료
        </Button>
      ),
    },

    // confirmed: - 입장 확정 후, 부스 입장을 위한 10분의 기다림
    confirmed: {
      backgroundColor: "lime",
      isValidate: true,
      primaryButton: (
        <Button size="medium" scheme="lime" shape="fill">
          <span>손님이 오고 있어요!</span>
          <span>10:00</span>
        </Button>
      ),
      secondButton: (
        <Button size="medium" shape="fill" scheme="blueLight">
          입장완료
        </Button>
      ),
    },

    // arrived: 부스에 입장을 완료함
    arrived: {
      backgroundColor: "grayLight",
      isValidate: false,
      primaryButton: (
        <Button size="medium" scheme="grayLight" shape="fill" disabled>
          입장을 완료했어요
        </Button>
      ),
      userInfoOpercity: "20%",
    },

    // canceled: - 대기가 취소됨
    canceled: {
      backgroundColor: "grayLight",
      isValidate: false,
      primaryButton: (
        <Button size="medium" scheme="grayLight" shape="fill" disabled>
          대기가 취소되었어요
        </Button>
      ),
      partySizeColor: "grayLight",
    },
  };
  return mainWaitingCardConfig[waitingStatus];
};
