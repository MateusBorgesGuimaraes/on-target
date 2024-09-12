'use client';

import { Product } from '@/types';
import React from 'react';

export const useChangeProds = (produtos: Product[]) => {
  const [selectedProduct, setSelectedProduct] = React.useState(produtos[0].id);
  const [prod, setProd] = React.useState(produtos[0]);

  const changeProduct = (id: number) => {
    setSelectedProduct(id);
    const find = produtos.find((product) => product.id === id);
    if (find) setProd(find);
  };

  return { changeProduct, selectedProduct, prod };
};
