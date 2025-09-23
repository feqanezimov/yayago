'use client';

import { 
  DollarSign,
  Shield,
  Clock,
  Users,
  Settings,
  TrendingUp
} from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: '100% of Earnings',
    description: 'Keep every dirham you earn',
    detail: 'No commission, no hidden fees, no deductions',
    color: 'text-green-500',
    bgColor: 'bg-green-50'
  },
  {
    icon: Shield,
    title: 'Full Protection',
    description: 'Comprehensive insurance coverage',
    detail: 'Your car is covered during all rentals',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Clock,
    title: 'You Control Schedule',
    description: 'Set your own availability',
    detail: 'Block dates when you need your car',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Users,
    title: 'Verified Renters',
    description: 'All renters are background checked',
    detail: 'UAE license and Emirates ID verified',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Settings,
    title: 'Easy Management',
    description: 'Simple dashboard to manage everything',
    detail: 'Track bookings, earnings, and reviews',
    color: 'text-red-500',
    bgColor: 'bg-red-50'
  },
  {
    icon: TrendingUp,
    title: 'Growing Platform',
    description: 'More renters joining daily',
    detail: 'Increasing demand for your vehicle',
    color: 'text-primary',
    bgColor: 'bg-primary/10'
  }
];

const testimonials = [
  {
    name: 'Mohammed Al Rashid',
    location: 'Dubai Marina',
    car: '2022 BMW X5',
    earnings: 'AED 2,800/month',
    quote: 'I\'ve been using other platforms for years, but Yayago\'s 0% commission means I earn AED 600 more per month!',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    name: 'Sarah Mitchell',
    location: 'JBR',
    car: '2021 Mercedes C-Class',
    earnings: 'AED 2,200/month',
    quote: 'The verification process gives me peace of mind. All renters are properly checked before booking.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  }
];

export function OwnerBenefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Benefits for <span className="text-gradient">Car Owners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join the growing community of car owners earning passive income through Yayago
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Car Owners Say
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600">{testimonial.location}</p>
                      <p className="text-sm text-gray-500">{testimonial.car}</p>
                    </div>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    <TrendingUp className="h-4 w-4" />
                    Earns {testimonial.earnings}
                  </div>
                  
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="glass rounded-3xl p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Your Car Could Be Earning Money Right Now
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Join 1000+ verified car owners making passive income on Dubai's most trusted car sharing platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button className="gradient-primary text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transition-shadow text-lg">
                List Your Car Now
              </button>
              <button className="border border-primary text-primary px-8 py-4 rounded-xl font-medium hover:bg-primary/5 transition-colors">
                Calculate Your Earnings
              </button>
            </div>
            <p className="text-sm text-gray-500">
              Free to list • No setup fees • Earn from day one
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}