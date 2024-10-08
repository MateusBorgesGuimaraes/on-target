import { FullProduct } from '@/types';
import { Card } from '../card';
import { filteredProduct } from '@/functions/filterdProduct';

type RelatedProps = {
  products: FullProduct[];
};

export const Related = ({ products }: RelatedProps) => {
  const filteredProducts = products.map(filteredProduct);

  return (
    <div className="pb-12">
      <h1 className="font-bebas md:text-8xl text-5xl text-neon-red">
        RELACIONADOS:
      </h1>
      <div className="pt-12 grid gap-10 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
        {filteredProducts.map((prod) => (
          <>
            <Card key={prod.id} product={prod} />
          </>
        ))}
      </div>
    </div>
  );
};
