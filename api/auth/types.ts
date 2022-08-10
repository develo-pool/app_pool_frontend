import {AxiosError} from 'axios';

export interface User {
  username: string;
  nickName: string;
  role: 'USER' | 'BRAND_USER' | string;
}

export interface AuthResult {
  accessToken: string;
  refreshToken: string;
}

export interface AccessToken {
  exp: number;
  nickName: string;
  role: 'USER' | 'BRAND_USER' | string;
  sub: string;
  username: string;
}

export interface RefreshToken {
  exp: number;
  sub: string;
}

type AuthErrorData = {
  messages: {
    id: string;
    message: string;
  }[];
}[];

export type AuthError = AxiosError<{
  statusCode: number;
  error: string;
  message?: AuthErrorData;
  data?: AuthErrorData;
}>;
