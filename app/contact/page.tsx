import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { LocationInfo } from '@/components/contact/LocationInfo';
import { Footer } from '@/components/layout/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16">
      <ContactHero />
      <ContactForm />
      <LocationInfo />
      <Footer />
    </div>
  );
}