import client from '../client';
import {BrandProfileResult} from './types';

export async function getBrandProfile(params: string) {
  const response = await client.get<BrandProfileResult>(
    `/user/profile/${params}?cursor=0`,
  );
  return response.data;
}
