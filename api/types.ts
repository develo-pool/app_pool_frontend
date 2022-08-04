import {AxiosError} from 'axios';

export interface User {
  username: string;
  nickName: string;
  userStatus: 'USER' | 'BRAND_USER' | string;
}

export interface AuthResult {
  accessToken: string;
  refreshToken: string;
  user: User;
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

export interface BrandAssignParams {
  brandUsername: string;
  brandInfo: string;
  brandAgreement: boolean;
  brandCategory: string[];
  brandProfileImage: any;
}

export interface BrandResult {
  brandUsername: string;
  brandInfo: string;
  brandProfileImage: any;
}
