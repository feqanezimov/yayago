import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedCars } from '@/components/home/FeaturedCars';
import { CategoryCards } from '@/components/home/CategoryCards';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { TrustIndicators } from '@/components/home/TrustIndicators';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedCars />
      <CategoryCards />
      <WhyChooseUs />
      <TrustIndicators />
      <Footer />
    </div>
  );
}