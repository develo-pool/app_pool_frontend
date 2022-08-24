import client from '../client';
import {SingleAlert, MultiAlert} from './types';

export async function sendFCMToken(params: string) {
  const response = await client.post('/fcmToken', params);
  return response;
}

export async function sendSingleAlarm(params: SingleAlert) {
  const response = await client.post('/api/fcm/welcome', params);
  return response.config.data;
}

export async function sendMultiAlarm(params: MultiAlert) {
  const response = await client.post('/api/fcm/submit', params);
  return response.config.data;
}
