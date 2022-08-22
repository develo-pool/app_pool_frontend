import client from '../client';
import {Message} from '../message/types';
import {brandProfile, getBrandWebMessageParams} from './types';

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
