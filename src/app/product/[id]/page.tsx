import { Product } from '@/components/product/product';
import { Related } from '@/components/product/related';

export default function ProductPage() {
  return (
    <section className="bg-neon-purple-gray-500 overflow-hidden overflow-x-hidden">
      <div className="containerCustom ">
        <div className="min-h-screen lg:pt-28 lg:pb-0 pt-40 pb-16 flex items-center justify-center">
          <Product />
        </div>
        <Related />
      </div>
    </section>
  );
}
