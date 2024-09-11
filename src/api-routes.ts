const URL = 'http://localhost:1337';

export const getLatestAndFeaturedProducts = () => {
  return {
    url: `${URL}/api/products/latest-featured`,
  };
};
