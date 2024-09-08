import { HeroSection } from '@/components/mainPage/hero-section';
import { Recommendations } from '@/components/mainPage/recommendations';
import { Releases } from '@/components/mainPage/releases';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Recommendations />
      <Releases />
    </main>
  );
}
