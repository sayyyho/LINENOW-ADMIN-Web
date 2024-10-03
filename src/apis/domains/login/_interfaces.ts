export interface LoginRequest {
  id: string; // 고유번호
}

export interface LoginResponse {
  accessToken: string;
}

export const transformLoginResponse = (response: LoginResponse): string => {
  return response.accessToken;
};
