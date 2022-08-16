import {AxiosError} from 'axios';

// export interface Message {
//   title: string;
//   body: string;
//   messageLink: string;
//   multipartFiles: string;
// }

export interface User {
  username: string;
  nickName: string;
  role: 'USER' | 'BRAND_USER' | string;
}
export interface Message {
  postId: number;
  body: string;
  messageLink: string;
  filePath: string;
  writerDto: object | undefined;
  commentAble: boolean;
  isWriter: boolean;
  create_date: string;
}

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
