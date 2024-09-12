import { FullProduct, Product } from '@/types';
import { Card } from '../card';

type RelatedProps = {
  products: FullProduct[];
};

export const Related = ({ products }: RelatedProps) => {
  const filteredProducts = products.map((product: FullProduct): Product => {
    const mainImageUrl =
      product.mainImage?.large?.url ||
      product.mainImage?.medium?.url ||
      product.mainImage?.small?.url ||
      product.mainImage?.thumbnail?.url ||
      '';

    return {
      name: product.name,
      price: product.price,
      description: product.description,
      stock: product.stock,
      img: mainImageUrl,
      id: product.id,
    };
  });

  return (
    <div className="pb-12">
      <h1 className="font-bebas md:text-8xl text-5xl">Parecido com:</h1>
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
