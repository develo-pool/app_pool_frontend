import client from '../client';
import {BrandResult, AllBrandResult, BrandProfileResult} from './types';

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

export async function getBrandProfile(params: number) {
  const response = await client.get<BrandProfileResult>(`/brand/${params}`);
  return response.data;
}

export async function getAllBrand(params: number) {
  const response = await client.get<AllBrandResult[]>(
    `/brands?cursor=${params}`,
  );
  return response.data;
}

export async function updateBrandInfo(params: string) {
  const response = await client.put('/brand/update', params, {
    headers: {'Content-Type': 'text/plain'},
  });
  return response.data.brandInfo;
}
