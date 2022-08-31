import client from '../client';
import {Message} from './types';

export async function getMessage(params: number) {
  const response = await client.get<Message>(`/messages/${params}`);
  return response.data;
}

export async function getAllMessage(params: number) {
  const response = await client.get<Message[]>(`/messages?cursor=${params}`);
  return response.data;
}

export async function createMessage(formData: FormData) {
  const response = await client.post('/messages', formData, {
    headers: {'content-type': 'multipart/form-data'},
  });
  console.log(formData);
  return response;
}

export async function createWelcomeMessage(formData: FormData) {
  const response = await client.post('/welcome', formData, {
    headers: {'content-type': 'multipart/form-data'},
  });
  console.log(formData);
  return response;
}
