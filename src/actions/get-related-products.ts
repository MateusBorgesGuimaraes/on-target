'use server';

import { getRelatedProductsLink } from '@/api-routes';

export async function getRelatedProducts(id: string) {
  try {
    const { url } = getRelatedProductsLink(id);
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }

    const { relatedProducts } = await response.json();

    return { error: null, ok: true, data: relatedProducts };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { error: (error as Error).message, ok: false, data: null };
  }
}
