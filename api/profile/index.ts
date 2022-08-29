import client from '../client';
import {Message} from '../message/types';

export async function getMyProfile(params: number) {
  const response = await client.get<Message[]>(
    `/user/profile?cursor=${params}`,
  );
  return response.data;
}
