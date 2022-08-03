import client from './client';
import {BrandAssignParams} from './types';

export async function createBrand(params: BrandAssignParams) {
  const response = await client.post('/brand/create', params);
  console.log(response);
  return response;
}
