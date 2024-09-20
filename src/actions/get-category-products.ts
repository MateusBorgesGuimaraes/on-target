'use server';

import { getCategoryProductsLink } from '@/api-routes';
import { FullProduct } from '@/types';

export async function getCategoryProducts(param: string) {
  try {
    const { url } = getCategoryProductsLink(param);
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const products = (await response.json()) as FullProduct[];

    return { error: null, ok: true, data: products };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { error: (error as Error).message, ok: false, data: null };
  }
}
