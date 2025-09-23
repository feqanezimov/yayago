import { SignInForm } from '@/components/auth/SignInForm';
import { Footer } from '@/components/layout/Footer';

export default function SignInPage() {
  return (
    <div className="min-h-screen pt-16">
      <SignInForm />
      <Footer />
    </div>
  );
}