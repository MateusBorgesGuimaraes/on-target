import { getCategoryProducts } from '@/actions/get-category-products';
import { ProductsCategory } from '@/components/productsCategory/products-category';

type CategoryParams = {
  params: {
    name: string;
  };
};

export default async function CategoryPage({ params }: CategoryParams) {
  const { name } = params;
  const { data, error, ok } = await getCategoryProducts(name);
  if (!ok || error || !data) {
    return <div>{error}</div>;
  }

  return (
    <section className="min-h-dvh pt-40 pb-16 bg-neon-purple-gray-500">
      <div className="containerCustom">
        <ProductsCategory products={data} />
      </div>
    </section>
  );
}
