'use client';

import { Button } from '@/components/ui/button';
import { 
  PlusCircle,
  Camera,
  Calendar,
  CreditCard,
  CheckCircle,
  Clock
} from 'lucide-react';

const steps = [
  {
    icon: PlusCircle,
    title: 'Create Your Listing',
    description: 'Add your car details, location, and set your availability',
    time: '5 minutes',
    details: [
      'Upload car registration documents',
      'Add insurance information',
      'Set your pricing and availability',
      'Describe your vehicle features'
    ]
  },
  {
    icon: Camera,
    title: 'Upload Photos',
    description: 'Add high-quality photos to attract renters',
    time: '3 minutes',
    details: [
      'Interior and exterior shots',
      'Dashboard and key features',
      'Any damage or wear (transparency)',
      'Minimum 6 photos recommended'
    ]
  },
  {
    icon: CheckCircle,
    title: 'Verification',
    description: 'Our team reviews and approves your listing',
    time: '24 hours',
    details: [
      'Document verification',
      'Insurance validation',
      'Vehicle inspection (if needed)',
      'Profile approval'
    ]
  },
  {
    icon: Calendar,
    title: 'Manage Bookings',
    description: 'Accept bookings and coordinate with renters',
    time: 'Ongoing',
    details: [
      'Review booking requests',
      'Communicate with renters',
      'Set pickup/drop-off details',
      'Rate renters after trips'
    ]
  },
  {
    icon: CreditCard,
    title: 'Get Paid',
    description: 'Receive payments directly with 0% commission',
    time: 'After rental',
    details: [
      '100% of rental fee goes to you',
      'Secure payment processing',
      'Weekly automatic payouts',
      'Detailed earnings reports'
    ]
  }
];

export function ListingProcess() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple <span className="text-gradient">Listing Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get your car listed and start earning in just a few easy steps
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`flex flex-col lg:flex-row items-center gap-8 animate-slide-up ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{step.time}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600">
                  {step.description}
                </p>

                <div className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>

                {index === 0 && (
                  <Button className="gradient-primary text-white hover:shadow-lg transition-shadow">
                    <step.icon className="h-5 w-5 mr-2" />
                    Start Listing Now
                  </Button>
                )}
              </div>

              {/* Visual */}
              <div className="flex-1 max-w-md">
                <div className="bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mb-6">
                    <step.icon className="h-16 w-16 text-primary" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <div className="glass rounded-3xl p-12 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Earning?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of car owners making money with Dubai's only 0% commission platform
            </p>
            <Button size="lg" className="gradient-primary text-white hover:shadow-lg transition-shadow px-12 py-6 text-lg">
              List Your Car Today
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              No setup fees • No monthly charges • No commission ever
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}