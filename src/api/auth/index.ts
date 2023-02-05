import client from '../client';
import {
  AuthResult,
  ChekMemberParams,
  GetUserResult,
  LoginParams,
  SignUpParams,
  UpdatePasswordParams,
} from './types';

// 회원가입
export async function signUp(params: SignUpParams) {
  const response = await client.post<AuthResult>('/signUp', params);
  return JSON.parse(response.config.data);
}

// 로그인
export async function login(params: LoginParams) {
  const response = await client.post<AuthResult>('/login', params);
  return response.headers;
}

// 회원 탈퇴
export async function deleteAccount() {
  const response = await client.delete('/');
  return response;
}

// id 중복 체크 (true:중복 false:사용가능)
export async function usernameExist(params: string) {
  const response = await client.get<boolean>(
    `/user-usernames/${params}/exists`,
  );
  return response.data;
}

// 닉네임 중복 체크 (true:중복 false:사용가능)
export async function nickNameExist(params: string) {
  const response = await client.get<boolean>(
    `/user-nickNames/${params}/exists`,
  );
  return response.data;
}

// 휴대전화 번호 중복 체크 (true:중복 false:사용가능)
export async function phoneNumberExist(params: string) {
  const response = await client.get<boolean>(
    `/user-phoneNumbers/${params}/exists`,
  );
  return response.data;
}

export async function getUser() {
  const response = await client.get<GetUserResult>('/user');
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