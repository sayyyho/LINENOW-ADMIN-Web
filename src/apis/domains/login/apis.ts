import { postResponse } from '@apis/instance';
import {
  LoginRequest,
  LoginResponse,
  TransformedLoginResponse,
  transformLoginResponse,
} from './_interfaces';

export const postLogin = async (
  data: LoginRequest
): Promise<TransformedLoginResponse | null> => {
  const response = await postResponse<LoginResponse>(
    '/api/v1/manager/login',
    data
  );
  return response ? transformLoginResponse(response) : null;
};
