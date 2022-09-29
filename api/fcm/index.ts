import client from '../client';
import {SingleAlert, FCMParams} from './types';

export async function sendFCMToken(params: FCMParams) {
  const response = await client.post('/fcmToken', params);
  return response;
}

export async function sendSingleAlarm(params: SingleAlert) {
  const response = await client.post('/api/fcm/welcome', params);
  return response.config.data;
}

export async function sendMultiAlarm(params: number) {
  const response = await client.post('/api/fcm/submit', params);
  console.log('Pool User ID Received!');
  return response.config.data;
}
