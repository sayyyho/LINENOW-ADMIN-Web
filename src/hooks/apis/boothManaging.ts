import { PostWaitingsActionRequest } from "@apis/domains/boothManaging/_interfaces";
import { postWaitingsAction } from "@apis/domains/boothManaging/apis";
import { BOOTH_MANAGING_QUERY_KEY } from "@apis/domains/boothManaging/queries";
import { useModal } from "@linenow/system";
import { useMutation } from "@tanstack/react-query";

interface PostWaitingActionProps {
  waitingID: number;
  requestBody: PostWaitingsActionRequest;
}

export const usePostWaitingAction = () => {
  const { closeModal } = useModal();
  return useMutation<void, Error, PostWaitingActionProps>({
    mutationKey: [BOOTH_MANAGING_QUERY_KEY.ACTION],
    mutationFn: ({ waitingID, requestBody }: PostWaitingActionProps) =>
      postWaitingsAction(waitingID, requestBody),
    onSuccess: () => {
      closeModal();
    },
    onError: (error) => {
      alert("처리중 오류가 발생했어요.\n다시 시도해주세요");
      console.log(error);
    },
  });
};
