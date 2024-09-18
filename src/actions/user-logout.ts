'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function userLogout() {
  cookies().delete('token');
  redirect('/');
}
