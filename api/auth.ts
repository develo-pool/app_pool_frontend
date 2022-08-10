import client from './client';
import {AuthResult, User} from './types';

export async function signUp(params: SignUpParams) {
  const response = await client.post<AuthResult>('/signUp', params);
  return JSON.parse(response.config.data);
}

export async function login(params: LoginParams) {
  const response = await client.post<AuthResult>('/login', params);
  return response.headers;
}

export async function usernameExist(params: string) {
  const response = await client.get<boolean>(
    `/user-usernames/${params}/exists`,
  );
  return response.data;
}

export async function nickNameExist(params: string) {
  const response = await client.get<boolean>(
    `/user-phoneNumbers/${params}/exists`,
  );
  return response.data;
}

export async function phoneNumberExist(params: string) {
  const response = await client.get<boolean>(
    `/user-nickNames/${params}/exists`,
  );
  return response.data;
}

export async function getUser() {
  const response = await client.get<User>('/user');
  return response.data;
}

export async function refresh(params: AuthResult) {
  const response = await client.post('/reIssue', params);
  return response.data;
}

export async function updatePassword(params: UpdatePasswordParams) {
  const response = await client.put('/user/password', params);
  return response;
}

export async function checkMember(params: ChekMemberParams) {
  const response = await client.post<boolean>('/checkMember', params);
  return response;
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
