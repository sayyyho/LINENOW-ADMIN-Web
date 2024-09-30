import { ModalProps } from "@linenow/system/components/modal/Modal";

interface ModalExtensionProps extends Omit<ModalProps, "isOpen"> {}

export const cancelWaitingModal = (userName: string): ModalExtensionProps => ({
  title: `${userName}님의 대기를 취소하시겠습니까?`,
  sub: "대기 취소를 누르면 대기 상태가 취소됩니다.\n취소된 대기는 복구되지 않습니다.",
  secondButton: {
    children: "이전으로",
    onClick: () => {
      console.log("취소 클릭");
    },
  },
  primaryButton: {
    children: "대기 취소하기",
    onClick: () => {
      console.log("대기 취소 클릭");
    },
  },
});

export const callWaitingModal = (userName: string): ModalExtensionProps => ({
  title: `${userName}님을 호출하시겠습니까?`,
  sub: `손님에게 호출 알림톡이 전송됩니다.`,
  secondButton: {
    children: "이전으로",
    onClick: () => {
      console.log("취소 클릭");
    },
  },
  primaryButton: {
    children: "호출하기",
    onClick: () => {
      console.log("호출하기 클릭");
    },
  },
});

export const approveWaitingModal = (userName: string): ModalExtensionProps => ({
  title: `${userName}의 입장을 완료하시겠습니까?`,
  sub: `입장완료를 누르면 윤혜정님의 입장이 완료됩니다.`,
  secondButton: {
    children: "이전으로",
    onClick: () => {
      console.log("취소 클릭");
    },
  },
  primaryButton: {
    children: "입장 완료하기",
    onClick: () => {
      console.log("입장 완료하기 클릭");
    },
  },
});
