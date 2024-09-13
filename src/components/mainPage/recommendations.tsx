import { FullProduct, Product } from '@/types';
import { ColorBallsDec } from '../color-ball-dec';
import { ProductViewer } from '../product-viewer';

type RecommendationsProps = {
  featuredProducts: FullProduct[];
};

export const Recommendations = ({ featuredProducts }: RecommendationsProps) => {
  const filteredProducts = featuredProducts.map((product): Product => {
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
    <section className="bg-neon-purple-gray-500 overflow-hidden overflow-x-hidden">
      <div className="containerCustom py-12 flex justify-center relative">
        {/* <ColorBallsDec
          color="neon-red"
          className="w-32 h-32 absolute -left-32 top-[500px] hidden xl:block"
        /> */}

        <ColorBallsDec
          color="neon-purple"
          className="w-32 h-32 absolute right-0 top-16 hidden xl:block z-20"
        />
        <ProductViewer products={filteredProducts} />
      </div>
    </section>
  );
};
