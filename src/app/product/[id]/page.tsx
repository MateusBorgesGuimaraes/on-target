import { getOneProduct } from '@/actions/get-one-product';
import { getRelatedProducts } from '@/actions/get-related-products';
import { Product } from '@/components/product/product';
import { Related } from '@/components/product/related';

type ProductParams = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: ProductParams) {
  const { id } = params;
  const { data, error, ok } = await getOneProduct(id);
  const {
    data: relatedProducts,
    error: relatedError,
    ok: relatedOk,
  } = await getRelatedProducts(id);

  if (!relatedOk || relatedError || !relatedProducts) {
    return <div>{relatedError}</div>;
  }

  if (!ok || error || !data) {
    return <div>{error}</div>;
  }

  return (
    <section className="bg-neon-purple-gray-500 overflow-hidden overflow-x-hidden">
      <div className="containerCustom ">
        <div className="min-h-screen lg:pt-28 lg:pb-0 pt-40 pb-16 flex items-center justify-center">
          <Product product={data} />
        </div>
        <Related products={relatedProducts} />
      </div>
    </section>
  );
}
