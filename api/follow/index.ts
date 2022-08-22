import client from '../client';

export async function follow(params: number) {
  const response = await client.post(`/follow/${params}`, params);
  return response.data;
}

export async function unfollow(params: number) {
  const response = await client.delete(`/follow/${params}`);
  return response.data;
}
