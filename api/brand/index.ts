import client from '../client';
import {BrandResult, UpdateBrandInfo} from './types';

export async function createBrand(formData: FormData) {
  const response = await client.post('/brand/create', formData, {
    headers: {'content-type': 'multipart/form-data'},
  });
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

export async function updateBrandInfo(params: string) {
  const response = await client.post<UpdateBrandInfo>('/brand/create', params);
  return response.data;
}
