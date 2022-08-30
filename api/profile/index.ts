import client from '../client';
import {Message} from '../message/types';
import {getProfileParams} from './types';

export async function getMyProfile(params: number) {
  const response = await client.get<Message[]>(
    `/user/profile?cursor=${params}`,
  );
  return response.data;
}

export async function getProfile({userId, cursor}: getProfileParams) {
  const response = await client.get<Message[]>(
    `/user/profile/${userId}?cursor=${cursor}`,
  );
  return response.data;
}

export async function updateNickname(params: string) {
  const response = await client.put('/user/update', params, {
    headers: {'Content-Type': 'text/plain'},
  });
  return response;
}
