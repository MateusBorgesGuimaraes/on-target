import { FullProduct, Product } from '@/types';

export const filteredProduct = (product: FullProduct): Product => {
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
};
