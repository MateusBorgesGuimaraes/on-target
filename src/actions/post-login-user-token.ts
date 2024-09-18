'use server';

import { loginUserByTokenLink } from '@/api-routes';
import { User } from '@/types/index';
import { cookies } from 'next/headers';

export const getLoginUserByToken = async () => {
  const token = cookies().get('token')?.value;

  const parseResponse = async (response: Response) => {
    if (!response.ok) {
      const errorText = await response.text();
      try {
        const errorJson = JSON.parse(errorText);
        const errorMessage = errorJson?.error?.message || 'Failed to log in';
        throw new Error(errorMessage);
      } catch (parseError) {
        throw new Error('Failed to log in');
      }
    }
    return await response.json();
  };

  const handleError = (error: unknown) => {
    if (error instanceof Error) {
      return error.message;
    }
    return String(error);
  };

  if (!token) {
    return { error: null, ok: false, data: null };
  }
  const { url } = loginUserByTokenLink();
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = (await parseResponse(response)) as User;
    return { error: null, ok: true, data };
  } catch (error) {
    return { error: handleError(error), ok: false, data: null };
  }
};
