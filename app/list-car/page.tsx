import { ListCarHero } from '@/components/list-car/ListCarHero';
import { EarningsCalculator } from '@/components/list-car/EarningsCalculator';
import { ListingProcess } from '@/components/list-car/ListingProcess';
import { OwnerBenefits } from '@/components/list-car/OwnerBenefits';
import { Footer } from '@/components/layout/Footer';

export default function ListCarPage() {
  return (
    <div className="min-h-screen pt-16">
      <ListCarHero />
      <EarningsCalculator />
      <ListingProcess />
      <OwnerBenefits />
      <Footer />
    </div>
  );
}