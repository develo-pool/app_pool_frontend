import {AxiosError} from 'axios';

export interface User {
  username: string;
  nickName: string;
  userStatus: 'USER' | 'BRAND_USER';
}

export interface AuthResult {
  accessToken: string;
  refreshToken: string;
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
