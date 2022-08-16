import client from '../client';
import {
  ChekMemberParams,
  LoginParams,
  SignUpParams,
  UpdatePasswordParams,
  User,
  Message
} from './types';

export async function getMessage(params:number) {
  const response = await client.get<Message>(`/messages/${params}`);
  return response.data;
}

export async function getAllMessage() {
  const response = await client.get<Message>(`/messages?cursor=0`);
  return response.data;
}