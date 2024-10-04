import axios, { AxiosError } from 'axios';
import {
  LogoutRequest,
  LogoutResponse,
  TransformedLogoutResponse,
} from './domains/logout/_interfaces';

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: false, //크로스 도메인 요청 시 쿠키, HTTP 인증 및 클라이언트 SSL 인증서를 사용하도록 허용한다.
});

export const getResponse = async <T>(url: string): Promise<T | null> => {
  try {
    const response = await instance.get<T>(url);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(`[GET] ${url}`);
    console.error('Response error:', axiosError);
    return null;
  }
};

export const postResponse = async <T>(
  url: string,
  data: any,
  headers?: Record<string, string>
): Promise<T | null> => {
  try {
    const response = await instance.post<T>(url, data, { headers });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(`[POST] ${url} - Data:`, data);
    console.error('Response error:', axiosError);
    return null;
  }
};
