import { getInitialProducts } from '@/actions/get-initial-products';
import { HeroSection } from '@/components/mainPage/hero-section';
import { Recommendations } from '@/components/mainPage/recommendations';
import { Releases } from '@/components/mainPage/releases';

export default async function Home() {
  const { data, error, ok } = await getInitialProducts();

  if (!ok || error || !data) {
    return <div>{error}</div>;
  }

  const { latestProducts, featuredProducts } = data;

  return (
    <main>
      <HeroSection />
      <Recommendations featuredProducts={featuredProducts} />
      <Releases featuredProducts={latestProducts} />
    </main>
  );
}
