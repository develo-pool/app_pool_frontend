import client from './client';
import {AuthResult, User} from './types';

export async function signUp(params: SignUpParams) {
  const response = await client.post<AuthResult>('/signUp', params);
  return response.data;
}

export async function login(params: LoginParams) {
  const response = await client.post<AuthResult>('/login', params);
  return response.data;
}

export async function getUser() {
  const response = await client.get<User>('/user');
  return response.data;
}

interface SignUpParams {
  username: string;
  password: string;
  nickName: string;
  phoneNumber: string;
  gender: 'male' | 'female';
  birthDay: number;
  termAgreement: boolean;
  privacyAgreement: boolean;
}

interface LoginParams {
  username: string;
  password: string;
}
