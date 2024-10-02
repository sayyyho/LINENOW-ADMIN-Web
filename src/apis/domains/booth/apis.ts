// api method
import { getResponse } from "@apis/instance";

// types
import { Waiting } from "@interfaces/waiting";
import {
  GetWaitingsResponse,
  transformGetWaitingsResponse,
} from "./_interfaces";

// get waitings : - 부스 예약 상태 전체 조회
export const getWaitings = async (boothID: string): Promise<Waiting[]> => {
  const response = await getResponse<GetWaitingsResponse>(
    `/api/v1/manager/booths/${boothID}/waitings`
  );
  return response ? transformGetWaitingsResponse(response) : []; // 변환 후 반환
};
