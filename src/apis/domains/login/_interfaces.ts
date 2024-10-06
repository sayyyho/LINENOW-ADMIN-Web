export interface LoginRequest {
  admin_code: string; // 고유번호
}

export interface LoginResponse {
  data: {
    booth_name: string;
    access_token: string;
    refresh_token: string;
  };
}

export interface TransformedLoginResponse {
  boothName: string;
  accessToken: string;
  refreshToken: string;
}

export const transformLoginResponse = (
  response: LoginResponse
): TransformedLoginResponse => {
  return {
    boothName: response.data.booth_name,
    accessToken: response.data.access_token,
    refreshToken: response.data.refresh_token,
  };
};
