'use client';

import { 
  Shield,
  Clock,
  Truck,
  Award,
  HeadphonesIcon,
  CreditCard
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: '0% Commission',
    description: 'Zero commission on both car rentals and garage services. Owners and service providers keep 100% of earnings',
    color: 'text-red-500'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Multilingual customer service in English, Arabic & Russian with local Dubai expertise',
    color: 'text-green-500'
  },
  {
    icon: Truck,
    title: 'Complete Ecosystem',
    description: 'One platform for car rentals, maintenance, repairs, detailing, and all automotive needs',
    color: 'text-red-500'
  },
  {
    icon: Award,
    title: 'Verified Partners',
    description: 'All car owners, renters, garages, and auto masters are verified with UAE documents',
    color: 'text-orange-500'
  },
  {
    icon: HeadphonesIcon,
    title: 'Instant Booking',
    description: 'Book cars and garage services instantly with secure payment processing',
    color: 'text-red-500'
  },
  {
    icon: CreditCard,
    title: 'Transparent Pricing',
    description: 'Clear pricing with no hidden fees. What you see is what you pay - guaranteed',
    color: 'text-destructive'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-gradient">Yayago</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dubai's complete automotive ecosystem with premium service and 0% commission
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover-scale animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className={`inline-flex p-4 rounded-2xl bg-gray-50 group-hover:scale-110 transition-transform ${feature.color}`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gradient">1000+</div>
                <div className="text-gray-600">Registered Owners</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gradient">10K+</div>
                <div className="text-gray-600">Successful Bookings</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gradient">0%</div>
                <div className="text-gray-600">Commission Fee</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gradient">4.9</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
