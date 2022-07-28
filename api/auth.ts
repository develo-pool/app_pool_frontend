import client from './client';
import {AuthResult, User} from './types';

export async function signUp(params: SignUpParams) {
  const response = await client.post<AuthResult>('/signUp', params);
  return response;
}

export async function login(params: LoginParams) {
  const response = await client.post<AuthResult>('/login', params);
  return response;
}

export async function usernameExist(params: string) {
  const response = await client.get<boolean>(
    `/user-usernames/${params}/exists`,
  );
  return response.data;
}

export async function nickNameExist(params: string) {
  const response = await client.get<boolean>(
    `/user-nickNames/${params}/exists`,
  );
  return response.data;
}

export async function getUser() {
  const response = await client.get<User>('/user');
  return response.data;
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

interface LoginParams {
  username: string;
  password: string;
}
