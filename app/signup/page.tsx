import { SignUpForm } from '@/components/auth/SignUpForm';
import { Footer } from '@/components/layout/Footer';

export default function SignUpPage() {
  return (
    <div className="min-h-screen pt-16">
      <SignUpForm />
      <Footer />
    </div>
  );
}