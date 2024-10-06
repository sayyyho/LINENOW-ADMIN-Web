import { postResponse } from '@apis/instance';
import {
  LogoutRequest,
  LogoutResponse,
  TransformedLogoutResponse,
  transformLogoutResponse,
} from './_interfaces';

// 로그아웃 API 호출 함수
export const postLogout = async (
  data: LogoutRequest
): Promise<TransformedLogoutResponse | null> => {
  const accessToken = sessionStorage.getItem('accessToken');

  if (!accessToken) {
    console.error('No access token');
    return null;
  }

  try {
    const response = await postResponse<LogoutResponse>(
      '/api/v1/manager/logout',
      data,
      { Authorization: `Bearer ${accessToken}` }
    );

    return response ? transformLogoutResponse(response) : null;
  } catch (error) {
    console.error('Logout request failed:', error);
    return null;
  }
};
