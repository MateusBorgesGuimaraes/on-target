export type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  img: string;
};

export type ImageSize = {
  url: string;
  width: number;
  height: number;
};

export type ProductImage = {
  large: ImageSize;
  small: ImageSize;
  medium: ImageSize;
  thumbnail: ImageSize;
};

export type FullProduct = Product & {
  createdAt: string;
  isFeatured: boolean;
  mainImage: ProductImage;
  secondImage: ProductImage;
  thirdImage: ProductImage;
};

export type LatestAndFeaturedProducts = {
  latestProducts: FullProduct[];
  featuredProducts: FullProduct[];
};
