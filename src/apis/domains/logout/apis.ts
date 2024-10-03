import { postResponse } from '@apis/instance';
import { LogoutRequest, LogoutResponse } from './_interfaces';

// 로그아웃 API 호출 함수
export const postLogout = async (
  data: LogoutRequest
): Promise<string | null> => {
  const response = await postResponse<LogoutResponse>(
    '/api/v1/manager/logout',
    data
  );
  return response?.message || null;
};
