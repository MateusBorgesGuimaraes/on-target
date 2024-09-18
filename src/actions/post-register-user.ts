'use server';

import { registerUserByLink } from '@/api-routes';
import { RegisterUserType } from '@/zodSchemas/register-zod';
import { cookies } from 'next/headers';

export const postRegisterUser = async (user: RegisterUserType) => {
  const parseResponse = async (response: Response) => {
    if (!response.ok) {
      const errorText = await response.text();
      try {
        const errorJson = JSON.parse(errorText);
        const errorMessage = errorJson?.error?.message || 'Failed to register';
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

  const { url } = registerUserByLink();
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const data = await parseResponse(response);
    cookies().set('token', data.jwt);
    return { error: null, ok: true, data };
  } catch (error) {
    return { error: handleError(error), ok: false, data: null };
  }
};
