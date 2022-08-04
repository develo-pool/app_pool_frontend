import client from './client';
import {BrandAssignParams, BrandResult} from './types';

export async function createBrand(params: BrandAssignParams) {
  const response = await client.post('/brand/create', params);
  return response;
}

export async function brandNameExist(params: string) {
  const response = await client.get<boolean>(
    `/brand-brandUsernames/${params}/exists`,
  );
  return response.data;
}

export async function getBrand(params: string) {
  const response = await client.get<BrandResult>(`/brand/${params}`);
  return response.data;
}
