'use client';

import { 
  Banknote,
  Shield,
  Clock,
  Globe,
  Users,
  Zap
} from 'lucide-react';

const benefits = [
  {
    icon: Banknote,
    title: '0% Commission',
    description: 'Keep 100% of your rental earnings',
    detail: 'Unlike competitors who charge 15-25%, we take nothing',
    color: 'text-green-500',
    bgColor: 'bg-green-50'
  },
  {
    icon: Shield,
    title: 'Secure & Verified',
    description: 'All users verified with UAE documents',
    detail: 'Driver licenses, Emirates ID, and insurance checked',
    color: 'text-red-500',
    bgColor: 'bg-red-50'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock customer assistance',
    detail: 'Multilingual support in English, Arabic & Russian',
    color: 'text-red-500',
    bgColor: 'bg-red-50'
  },
  {
    icon: Globe,
    title: 'Multi-Language',
    description: 'Platform available in 3 languages',
    detail: 'Serving Dubai\'s diverse international community',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Peer-to-peer sharing economy',
    detail: 'Connect directly with verified car owners',
    color: 'text-red-500',
    bgColor: 'bg-red-50'
  },
  {
    icon: Zap,
    title: 'Instant Booking',
    description: 'Book available cars immediately',
    detail: 'Real-time availability and instant confirmations',
    color: 'text-destructive',
    bgColor: 'bg-destructive/10'
  }
];

export function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-gradient">Yayago</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the benefits of Dubai's most trusted car sharing platform
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 hover-scale animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                <div className={`inline-flex p-4 rounded-2xl ${benefit.bgColor} ${benefit.color}`}>
                  <benefit.icon className="h-8 w-8" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 mb-2">
                    {benefit.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    {benefit.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="glass rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              By the Numbers
            </h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gradient">0%</div>
                <div className="text-gray-600">Commission Fee</div>
                <div className="text-sm text-gray-500">vs 15-25% others charge</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gradient">1000+</div>
                <div className="text-gray-600">Verified Owners</div>
                <div className="text-sm text-gray-500">All UAE document verified</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gradient">10K+</div>
                <div className="text-gray-600">Successful Bookings</div>
                <div className="text-sm text-gray-500">Safe rentals completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gradient">3</div>
                <div className="text-gray-600">Languages</div>
                <div className="text-sm text-gray-500">English, Arabic, Russian</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
