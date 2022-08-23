import client from '../client';

export async function sendFCMToken(params: string) {
  const response = await client.post('/fcmToken', params);
  return response;
}
