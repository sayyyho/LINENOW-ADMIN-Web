import {
  PostBoothStatusRequest,
  PostWaitingsActionRequest,
} from "@apis/domains/boothManaging/_interfaces";
import {
  getBoothStatus,
  postBoothOperation,
  postBoothStatus,
  postWaitingsAction,
} from "@apis/domains/boothManaging/apis";
import { BOOTH_MANAGING_QUERY_KEY } from "@apis/domains/boothManaging/queries";
import useBoothInfo from "@hooks/useBoothInfo";
import { Booth } from "@interfaces/booth";
import { useModal } from "@linenow/system";
import { useMutation, useQuery } from "@tanstack/react-query";

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

export const useGetBoothStatus = () => {
  const { setBoothInfo } = useBoothInfo();
  return useQuery({
    queryKey: [BOOTH_MANAGING_QUERY_KEY.BOOTH_STATUS],
    queryFn: async () => {
      const data: Booth = await getBoothStatus();
      setBoothInfo(data);
    },
  });
};

interface PostBoothStatusProps {
  requestBody: PostBoothStatusRequest;
}

export const usePostBoothStatus = () => {
  const { closeModal } = useModal();

  return useMutation<void, Error, PostBoothStatusProps>({
    mutationKey: [BOOTH_MANAGING_QUERY_KEY.BOOTH_STATUS, "status"],
    mutationFn: ({ requestBody }: PostBoothStatusProps) =>
      postBoothStatus(requestBody),
    onSuccess: () => {
      closeModal();
    },
    onError: (error) => {
      alert("처리중 오류가 발생했어요.\n다시 시도해주세요");
      console.log(error);
    },
  });
};

interface PostBoothOperationProps {
  status: "paused" | "resume";
}

export const usePostBoothOperation = () => {
  const { closeModal } = useModal();

  return useMutation<void, Error, PostBoothOperationProps>({
    mutationKey: [BOOTH_MANAGING_QUERY_KEY.BOOTH_STATUS, "operation"],
    mutationFn: ({ status }: PostBoothOperationProps) =>
      postBoothOperation(status),
    onSuccess: () => {
      closeModal();
    },
    onError: (error) => {
      alert("처리중 오류가 발생했어요.\n다시 시도해주세요");
      console.log(error);
    },
  });
};
