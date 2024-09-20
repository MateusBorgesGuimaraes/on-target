'use client';

import { FullProduct } from '@/types';
import { Card } from '../card';
import { filteredProduct } from '@/functions/filterdProduct';

type ProductsCategoryProps = {
  products: FullProduct[];
};

export const ProductsCategory = ({ products }: ProductsCategoryProps) => {
  const filteredProducts = products.map(filteredProduct);

  return (
    <div>
      <div className="pt-12 grid gap-10 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
        {filteredProducts.map((prod) => (
          <div key={prod.id}>
            <Card key={prod.id} product={prod} />
          </div>
        ))}
      </div>
    </div>
  );
};
