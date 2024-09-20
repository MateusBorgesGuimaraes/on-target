import { FullProduct } from '@/types';
import { ColorBallsDec } from '../color-ball-dec';
import { ProductViewer } from '../product-viewer';
import { filteredProduct } from '@/functions/filterdProduct';

type RecommendationsProps = {
  featuredProducts: FullProduct[];
};

export const Recommendations = ({ featuredProducts }: RecommendationsProps) => {
  const filteredProducts = featuredProducts.map(filteredProduct);

  return (
    <section className="bg-neon-purple-gray-500 overflow-hidden overflow-x-hidden">
      <div className="containerCustom py-12 flex justify-center relative">
        <ColorBallsDec
          color="neon-purple"
          className="w-32 h-32 absolute right-0 top-16 hidden xl:block z-10"
        />
        <ProductViewer products={filteredProducts} />
      </div>
    </section>
  );
};
