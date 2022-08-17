import client from '../client';
import {Comment, CreateComment} from './types';

export async function getComment(params: number) {
  const response = await client.get<Comment>(`/comments/${params}`);
  return response.data;
}

export async function getAllComment(params: number) {
  const response = await client.get<Comment[]>(`/comments/${params}?cursor=0`);
  return response.data;
}

export async function createComment(params: CreateComment) {
  const response = await client.post(`/comments/${params.messageId}`, params.body);
  return response.data;
}