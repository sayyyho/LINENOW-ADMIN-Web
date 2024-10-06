import { PostWaitingsActionRequest } from "@apis/domains/boothManaging/_interfaces";
import { postNoResponse } from "@apis/instance";

export const postWaitingsAction = async (
  waitingiD: number,
  requestBody: PostWaitingsActionRequest
) => {
  try {
    await postNoResponse<PostWaitingsActionRequest>(
      `/api/v1/manager/waitings/${waitingiD}/action`,
      requestBody
    );
  } catch (error) {
    // TODO: -분기처리 세세하게
    throw error;
  }
};
