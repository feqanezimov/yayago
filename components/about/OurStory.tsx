'use client';

import { 
  Car,
  Users,
  DollarSign,
  Globe
} from 'lucide-react';

export function OurStory() {
  const milestones = [
    {
      year: '2023',
      title: 'Founded in Dubai',
      description: 'Yayago was born from the vision of creating a fair, transparent car sharing platform in Dubai',
      icon: Car
    },
    {
      year: '2023',
      title: 'Community Building',
      description: 'Started building our community of verified car owners and trusted renters',
      icon: Users
    },
    {
      year: '2024',
      title: '0% Commission Launch',
      description: 'Launched our revolutionary 0% commission model, ensuring owners keep 100% of earnings',
      icon: DollarSign
    },
    {
      year: '2024',
      title: 'Multi-Language Platform',
      description: 'Expanded to support English, Arabic, and Russian speakers in Dubai',
      icon: Globe
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Story</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From a simple idea to Dubai's most trusted car sharing platform
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Content */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold text-gray-900">
              The Problem We Solved
            </h3>
            <p className="text-gray-600 leading-relaxed">
              In Dubai, many residents have cars sitting idle while others desperately need affordable rental options. Traditional rental companies charge high fees and have limited availability. Meanwhile, existing car sharing platforms take hefty commissions of 15-25%, reducing earnings for car owners.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We saw an opportunity to create something better - a platform that truly serves both car owners and renters without the burden of excessive fees. Our 0% commission model was revolutionary in the industry.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, Yayago has become Dubai's preferred car sharing platform, connecting thousands of verified community members and facilitating safe, affordable car rentals across the UAE.
            </p>
          </div>

          {/* Story Image */}
          <div className="animate-slide-up">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2526935/pexels-photo-2526935.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Dubai cityscape"
                className="w-full h-80 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-3xl" />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Journey
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <milestone.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">
                    {milestone.year}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {milestone.title}
                  </h4>
                </div>
                <p className="text-gray-600 text-sm">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}