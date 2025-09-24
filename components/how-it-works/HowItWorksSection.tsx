'use client';

import { Button } from '@/components/ui/button';
import { 
  Search,
  Calendar,
  CreditCard,
  Key,
  PlusCircle,
  Camera,
  Users,
  DollarSign
} from 'lucide-react';

const rentingSteps = [
  {
    icon: Search,
    title: 'Browse & Search',
    description: 'Search for cars by location, dates, and preferences. Filter by price, type, and features.',
    details: 'Use our advanced filters to find the perfect car for your needs in Dubai and surrounding areas.'
  },
  {
    icon: Calendar,
    title: 'Book Instantly',
    description: 'Select your dates and book the car instantly through our secure platform.',
    details: 'Get instant confirmation and connect directly with the car owner through our messaging system.'
  },
  {
    icon: CreditCard,
    title: 'Pay Securely',
    description: 'Complete your payment through our secure gateway with multiple payment options.',
    details: 'All transactions are encrypted and secure. Pay by card, bank transfer, or digital wallet.'
  },
  {
    icon: Key,
    title: 'Pick Up & Drive',
    description: 'Meet the owner at the agreed location and start your journey.',
    details: 'Complete a quick vehicle inspection together and you\'re ready to explore Dubai!'
  }
];

const listingSteps = [
  {
    icon: PlusCircle,
    title: 'List Your Car',
    description: 'Create your car listing with photos, description, and availability.',
    details: 'Add detailed information about your vehicle including features, location, and any special requirements.'
  },
  {
    icon: Camera,
    title: 'Upload Photos',
    description: 'Add high-quality photos of your car to attract potential renters.',
    details: 'Include interior, exterior, and any special features. More photos = more bookings!'
  },
  {
    icon: Users,
    title: 'Accept Bookings',
    description: 'Review booking requests and accept the ones that work for you.',
    details: 'You have full control over who rents your car and when it\'s available.'
  },
  {
    icon: DollarSign,
    title: 'Earn Money',
    description: 'Receive payments directly with 0% commission fees deducted.',
    details: 'Keep 100% of your earnings - unlike other platforms that take 15-25% commission.'
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How <span className="text-gradient">Yayago Works</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you want to rent a car or share yours with others, our platform makes it simple, secure, and profitable
          </p>
        </div>

        {/* For Renters Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">For Renters</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find and book the perfect car in just a few simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rentingSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover-scale animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-8">
                  <div className="w-12 h-12 bg-destructive rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex p-4 rounded-2xl bg-destructive/10 text-destructive">
                    <step.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                  
                  <p className="text-sm text-gray-500">
                    {step.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="gradient-primary text-white hover:shadow-lg transition-shadow px-8">
              Start Renting Cars
            </Button>
          </div>
        </div>

        {/* For Car Owners Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">For Car Owners</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Turn your idle car into a steady income stream with 0% commission
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {listingSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover-scale animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-8">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex p-4 rounded-2xl bg-green-50 text-green-600">
                    <step.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                  
                  <p className="text-sm text-gray-500">
                    {step.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white hover:shadow-lg transition-shadow px-8">
              Start Earning Money
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Join Dubai's Car Sharing Revolution?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you need a car or want to earn money from yours, Yayago makes it simple and secure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white hover:shadow-lg transition-shadow px-8">
              Find a Car
            </Button>
            <Button size="lg" variant="outline" className="border-destructive text-destructive hover:bg-destructive/5 px-8">
              List Your Car
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
