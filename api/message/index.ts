import client from '../client';
import {Message} from './types';

export async function getMessage(params: number) {
  const response = await client.get<Message>(`/messages/${params}`);
  return response.data;
}

export async function getAllMessage() {
  const response = await client.get<Message[]>('/messages?cursor=0');
  return response.data;
}

export async function createMessage(formData: FormData) {
  const response = await client.post('/messages', formData, {
    headers: {'content-type': 'multipart/form-data'},
  });
  return response;
}

export async function createWelcomeMessage(formData: FormData) {
  const response = await client.post('/welcome', formData, {
    headers: {'content-type': 'multipart/form-data'},
  });
  return response;
}
