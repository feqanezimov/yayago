import { HowItWorksSection } from '@/components/how-it-works/HowItWorksSection';
import { BenefitsSection } from '@/components/how-it-works/BenefitsSection';
import { SafetySection } from '@/components/how-it-works/SafetySection';
import { Footer } from '@/components/layout/Footer';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen pt-16">
      <HowItWorksSection />
      <BenefitsSection />
      <SafetySection />
      <Footer />
    </div>
  );
}