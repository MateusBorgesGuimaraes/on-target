'use client';

import { Product } from '@/types';
import React from 'react';

export const useChangeImages = (produto: Product[]) => {
  const [selectedProduct, setSelectedProduct] = React.useState(1);
  const [prod, setProd] = React.useState(produto[0]);

  const changeProduct = (id: number) => {
    setSelectedProduct(id);
    const find = produto.find((product) => product.id === id);
    if (find) setProd(find);
  };
  return { changeProduct, selectedProduct, prod };
};
