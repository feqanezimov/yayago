'use client';

import { 
  Heart,
  Shield,
  Users,
  Zap,
  Globe,
  DollarSign
} from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Community First',
    description: 'We put our community of car owners and renters at the center of everything we do.',
    color: 'text-red-500',
    bgColor: 'bg-red-50'
  },
  {
    icon: Shield,
    title: 'Trust & Safety',
    description: 'Every user is verified and every transaction is secure. Safety is never compromised.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Users,
    title: 'Inclusive Platform',
    description: 'Supporting multiple languages and cultures, reflecting Dubai\'s diverse community.',
    color: 'text-green-500',
    bgColor: 'bg-green-50'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Constantly improving our platform with cutting-edge technology and user feedback.',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50'
  },
  {
    icon: Globe,
    title: 'Transparency',
    description: 'Clear pricing, honest communication, and no hidden fees. What you see is what you get.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50'
  },
  {
    icon: DollarSign,
    title: 'Fair Economics',
    description: 'Our 0% commission model ensures car owners keep 100% of their rental earnings.',
    color: 'text-primary',
    bgColor: 'bg-primary/10'
  }
];

export function OurValues() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do at Yayago
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover-scale animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                <div className={`inline-flex p-4 rounded-2xl ${value.bgColor} ${value.color}`}>
                  <value.icon className="h-8 w-8" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20">
          <div className="glass rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To revolutionize car sharing in Dubai by creating a platform that truly serves our community. 
              We believe in fair economics, transparent pricing, and putting people first. Our 0% commission 
              model isn't just a business strategy - it's our commitment to ensuring that car owners keep 
              what they earn and renters get the best possible rates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}