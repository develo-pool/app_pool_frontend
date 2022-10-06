import client from '../client';
import {Message} from '../message/types';
import {brand, brandProfile, getBrandWebMessageParams} from './types';

export async function getBrandWebProfile(brandId: number) {
  const response = await client.get<brandProfile>(`/brand/${brandId}/web`);
  return response.data;
}

export async function getBrandWebMessage({
  brandId,
  cursor,
}: getBrandWebMessageParams) {
  const response = await client.get<Message[]>(
    `/user/profile/${brandId}/web?cursor=${cursor}`,
  );
  return response.data;
}

// 홈 페이지 최신 유저 3명
export async function getRecentBrand() {
  const response = await client.get<brand[]>('/brands/web/recommend');
  return response.data;
}

// 홈 페이지 최신 메세지 3개
export async function getRecentMessage() {
  const response = await client.get<Message[]>('/messages/recommend/web');
  return response.data;
}
