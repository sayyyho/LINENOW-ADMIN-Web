import {
  usePostBoothOperation,
  usePostBoothStatus,
} from "@hooks/apis/boothManaging";
import { useModal } from "@linenow/system";
import { ModalProps } from "@linenow/system/components/modal/Modal";

interface ModalExtensionProps extends Omit<ModalProps, "isOpen"> {}

const useSidebarModalConfig = () => {
  const { closeModal } = useModal();
  const { mutate: postBoothOperation } = usePostBoothOperation();
  const { mutate: postBoothStatus } = usePostBoothStatus();

  const startWaitingModal = (): ModalExtensionProps => ({
    title: `대기 접수를 재개 하시겠습니까?`,
    sub: `대기 접수를 재개하면 새로운 고객의 대기가 가능합니다.\n대기 접수를 재개하시겠습니까?`,
    secondButton: {
      children: "취소하기",
      onClick: () => {
        closeModal();
      },
    },
    primaryButton: {
      children: "대기 재개하기",
      onClick: () => {
        postBoothOperation({
          status: "resume",
        });
      },
    },
  });

  const stopWaitingModal = (): ModalExtensionProps => ({
    title: `대기를 접수를 중지 하시겠습니까?`,
    sub: `대기 접수를 중지하면  추가적인 고객 대기를 받을 수 없게 됩니다.\n정말 대기를 중지하시겠습니까?`,
    secondButton: {
      children: "취소하기",
      onClick: () => {
        closeModal();
      },
    },
    primaryButton: {
      children: "대기 중지하기",
      onClick: () => {
        postBoothOperation({
          status: "pause",
        });
      },
    },
  });

  const startBoothModal = (): ModalExtensionProps => ({
    title: `부스 대기 운영을 시작하시겠습니까?`,
    sub: `운영을 시작하면 손님들의 라인나우 온라인 대기가 활성화됩니다.\n부스 대기 운영을 시작하시겠습니까?`,
    secondButton: {
      children: "취소하기",
      onClick: () => {
        closeModal();
      },
    },
    primaryButton: {
      children: "운영 시작하기",
      scheme: "lime",
      onClick: () => {
        postBoothStatus({
          requestBody: {
            status: "operating",
          },
        });
        // Set firstUse to false in localStorage
        // localStorage.setItem("firstUse", "false");
        // closeModal(); // Close the modal after the operation
      },
    },
  });

  const stopBoothModal = (): ModalExtensionProps => ({
    title: `부스 대기 운영을 종료하시겠습니까?`,
    sub: `운영을 종료하면 모든 라인나우 온라인 대기가 삭제됩니다.\n부스 대기 운영을 종료하시겠습니까?`,
    secondButton: {
      children: "취소하기",
      onClick: () => {
        closeModal();
      },
    },
    primaryButton: {
      children: "운영 종료하기",
      scheme: "lime",
      onClick: () => {
        postBoothStatus({
          requestBody: {
            status: "finished",
          },
        });
      },
    },
  });

  return {
    startBoothModal,
    stopBoothModal,
    startWaitingModal,
    stopWaitingModal,
  };
};

export default useSidebarModalConfig;
