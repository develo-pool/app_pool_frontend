import client from './client';
import {BrandAssignParams} from './types';

export async function createBrand(params: BrandAssignParams) {
  const response = await client.post('/brand/create', params);
  console.log(response);
  return response;
}

export async function brandNameExist(params: string) {
  const response = await client.get<boolean>(
    `/brand-brandUsernames/${params}/exists`,
  );
  return response.data;
}
