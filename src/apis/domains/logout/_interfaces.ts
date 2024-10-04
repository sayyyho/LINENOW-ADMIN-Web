export interface LogoutRequest {
  refresh_token: string;
}

export interface LogoutResponse {
  data: {
    booth_name: string;
  };
}

export interface TransformedLogoutResponse {
  boothName: string;
}

export const transformLogoutResponse = (
  response: LogoutResponse
): TransformedLogoutResponse => {
  return {
    boothName: response.data.booth_name,
  };
};
