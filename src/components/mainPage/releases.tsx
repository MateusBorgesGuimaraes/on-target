import { FullProduct } from '@/types';
import { Card } from '../card';
import { ColorBallsDec } from '../color-ball-dec';
import { filteredProduct } from '@/functions/filterdProduct';

type RecommendationsProps = {
  featuredProducts: FullProduct[];
};

export const Releases = ({ featuredProducts }: RecommendationsProps) => {
  const filteredProducts = featuredProducts.map(filteredProduct);

  return (
    <section className="bg-neon-purple-gray-600">
      <div className="containerCustom py-12">
        <div className="flex gap-8 items-center">
          <h1 className="md:text-9xl smallest:text-8xl text-[5rem] leading-none text-neon-purple font-bebas break-all">
            LANÇAMENTOS
          </h1>
          <div className="md:flex hidden gap-4 items-center">
            <ColorBallsDec color="neon-red" className="w-[100px] h-[100px]" />
            <ColorBallsDec color="neon-purple" className="w-[80px] h-[80px]" />
            <ColorBallsDec color="neon-red" className="w-[60px] h-[60px]" />
            <ColorBallsDec color="neon-purple" className="w-[40px] h-[40px]" />
          </div>
        </div>

        <div className="pt-12 grid gap-10 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          {filteredProducts.map((prod) => (
            <Card key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </section>
  );
};
