'use server';

import { getOneProductLink } from '@/api-routes';
import { FullProduct } from '@/types';

export async function getOneProduct(id: string) {
  try {
    const { url } = getOneProductLink(id);
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }

    const products = (await response.json()) as FullProduct;

    return { error: null, ok: true, data: products };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { error: (error as Error).message, ok: false, data: null };
  }
}
