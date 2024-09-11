'use server';

import { getLatestAndFeaturedProducts } from '@/api-routes';
import { LatestAndFeaturedProducts } from '@/types';

export async function getInitialProducts() {
  try {
    const { url } = getLatestAndFeaturedProducts();
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const products = (await response.json()) as LatestAndFeaturedProducts;

    return { error: null, ok: true, data: products };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { error: (error as Error).message, ok: false, data: null };
  }
}
