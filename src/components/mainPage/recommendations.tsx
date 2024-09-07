import { ColorBallsDec } from '../color-ball-dec';
import { ProductViewer } from '../product-viewer';

export const Recommendations = () => {
  return (
    <section className="bg-neon-purple-gray-500">
      <div className="containerCustom py-12 flex justify-center relative">
        <ColorBallsDec
          color="neon-red"
          className="w-32 h-32 absolute -left-32 top-[500px] hidden xl:block"
        />

        <ColorBallsDec
          color="neon-purple"
          className="w-32 h-32 absolute right-0 top-16 hidden xl:block"
        />
        <ProductViewer />
      </div>
    </section>
  );
};
