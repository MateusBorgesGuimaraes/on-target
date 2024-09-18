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

export const loginUserByDataLink = () => {
  return {
    url: `${URL}/api/auth/local`,
  };
};

export const loginUserByTokenLink = () => {
  return {
    url: `${URL}/api/users/me`,
  };
};

export const registerUserByLink = () => {
  return {
    url: `${URL}/api/auth/local/register`,
  };
};
