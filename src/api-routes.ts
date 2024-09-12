const URL = 'http://localhost:1337';

export const getLatestAndFeaturedProducts = () => {
  return {
    url: `${URL}/api/products/latest-featured`,
  };
};

export const getOneProductLink = (productId: string) => {
  return {
    url: `${URL}/api/products/${productId}`,
  };
};

export const getRelatedProductsLink = (productId: string) => {
  return {
    url: `${URL}/api/products/${productId}/related`,
  };
};
