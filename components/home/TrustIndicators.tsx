'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Al Mansoori',
    location: 'Dubai',
    rating: 5,
    text: 'Amazing platform! I\'ve been renting out my BMW through Yayago for 6 months. No commission fees means I earn more than other platforms.',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    id: 2,
    name: 'Elena Volkova',
    location: 'Dubai Marina',
    rating: 5,
    text: 'As a Russian expat, I love that the platform supports my language. Found a perfect car for my family vacation at great rates.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    id: 3,
    name: 'James Mitchell',
    location: 'Business Bay',
    rating: 5,
    text: 'Business traveler here - Yayago makes car rental so easy. Direct contact with owners, fair prices, and no surprise fees.',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  }
];

const certifications = [
  { name: 'RTA Registered', logo: '🚗' },
  { name: 'UAE Licensed', logo: '✓' },
  { name: 'Secure Platform', logo: '🔒' },
  { name: 'Zero Commission', logo: '0️⃣' }
];

export function TrustIndicators() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-gradient">Our Community</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what car owners and renters say about their Yayago experience
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 hover-scale animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary" />
                
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Text */}
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="glass rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Licensed & Trusted
            </h3>
            <p className="text-gray-600">
              Registered with UAE authorities and committed to platform security
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="text-center p-4 bg-white rounded-2xl hover:shadow-lg transition-all hover-scale"
              >
                <div className="text-4xl mb-3">{cert.logo}</div>
                <div className="font-medium text-gray-900">{cert.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}