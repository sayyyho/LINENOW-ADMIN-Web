// api method
import { getResponse } from "@apis/instance";

// types
import { Waiting } from "@interfaces/waiting";
import {
  GetWaitingsResponse,
  transformGetWaitingsResponse,
} from "./_interfaces";

// get waitings : - 부스 예약 상태 전체 조회
export const getWaitings = async (): Promise<Waiting[]> => {
  const response = await getResponse<GetWaitingsResponse>(
    `/api/v1/manager/booths/waitings`
  );
  return response ? transformGetWaitingsResponse(response) : []; // 변환 후 반환
};

// get waiting : - 대기 중인 것만 필터링
export const getWaiting = async (): Promise<Waiting[]> => {
  const response = await getResponse<GetWaitingsResponse>(
    `/api/v1/manager/booths/waiting`
  );
  return response ? transformGetWaitingsResponse(response) : [];
};

// get calling : - 호출 중인 것만 필터링
export const getCalling = async (): Promise<Waiting[]> => {
  const response = await getResponse<GetWaitingsResponse>(
    `/api/v1/manager/booths/calling`
  );
  return response ? transformGetWaitingsResponse(response) : [];
};

// get arrived : - 입장 완료인 것만 필터링
export const getArrived = async (): Promise<Waiting[]> => {
  const response = await getResponse<GetWaitingsResponse>(
    `/api/v1/manager/booths/arrived`
  );
  return response ? transformGetWaitingsResponse(response) : [];
};

// get canceled : - 입장 완료인 것만 필터링
export const getCanceled = async (): Promise<Waiting[]> => {
  const response = await getResponse<GetWaitingsResponse>(
    `/api/v1/manager/booths/canceled`
  );
  return response ? transformGetWaitingsResponse(response) : [];
};
