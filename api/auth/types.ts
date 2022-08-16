import {AxiosError} from 'axios';

export interface User {
  username: string;
  nickName: string;
  role: 'USER' | 'BRAND_USER' | string;
}

export interface GetUserResult extends User {
  poolUserId: number;
  userStatus: 'USER' | 'BRAND_USER' | string;
  follow: boolean;
  userFollowerCount: number;
  userFollowingCount: number;
  brandUserInfoDto: null;
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

export interface SignUpParams {
  username: string;
  password: string;
  nickName: string;
  phoneNumber: string;
  gender: 'male' | 'female' | '';
  birthDay: string;
  termAgreement: boolean;
  privacyAgreement: boolean;
  category: string[];
}

export interface LoginParams {
  username: string;
  password: string;
}

export interface UpdatePasswordParams {
  username: string;
  toBePassword: string;
}

export interface ChekMemberParams {
  username: string;
  phoneNumber: string;
}
