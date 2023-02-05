import client from '../client';
import {SingleAlert, FCMParams, MultiAlert} from './types';

export async function sendFCMToken(params: FCMParams) {
  const response = await client.post('/fcmToken', params);
  return response;
}

export async function sendSingleAlarm(params: SingleAlert) {
  const response = await client.post('/api/fcm/welcome', params);
  console.log('Welcome API Worked!');
  return response.config.data;
}

export async function sendMultiAlarm(params: MultiAlert) {
  const response = await client.post('/api/fcm/submit', params);
  console.log('Pool User ID Received!');
  return response.config.data;
}
