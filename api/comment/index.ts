import client from '../client';
import {Comment, CreateComment, getAllCommentParams} from './types';

export async function getComment(params: number) {
  const response = await client.get<Comment>(`/comments/${params}/my`);
  return response.data;
}

export async function getAllComment(params: getAllCommentParams) {
  const response = await client.get<Comment[]>(`/comments/${params.detail}?cursor=${params.cursor}`);
  return response.data;
}

export async function createComment(params: CreateComment) {
  const response = await client.post(`/comments/${params.messageId}`, params);
  return response.data;
}
