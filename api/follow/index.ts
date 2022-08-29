import client from '../client';
import {Following} from './types';

export async function follow(params: number) {
  const response = await client.post(`/follow/${params}`, params);
  return response.data;
}

export async function unfollow(params: number) {
  const response = await client.delete(`/follow/${params}`);
  return response.data;
}

export async function getFollowingList(cursor: number) {
  const response = await client.get<Following>(`/followings?cursor=${cursor}`);
  return response.data;
}
