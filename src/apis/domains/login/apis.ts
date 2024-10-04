import { postResponse } from '@apis/instance';
import {
  LoginRequest,
  LoginResponse,
  transformLoginResponse,
} from './_interfaces';

// post login: 로그인 API 호출
export const postLogin = async (data: LoginRequest): Promise<string | null> => {
  const response = await postResponse<LoginResponse>(
    '/api/v1/manager/login',
    data
  );
  return response ? transformLoginResponse(response) : null;
};
