import client from '../client';

export async function getBrandWebProfile({
  userId,
  cursor,
}: {
  userId: number;
  cursor: number;
}) {
  const response = await client.get(
    `/user/profile/${userId}/web?cursor=${cursor}`,
  );
  return response.data;
}
