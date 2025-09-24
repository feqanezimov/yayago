'use client';

import { 
  Shield,
  FileCheck,
  CreditCard,
  Users,
  Phone,
  CheckCircle
} from 'lucide-react';

const safetyFeatures = [
  {
    icon: FileCheck,
    title: 'Document Verification',
    description: 'All users must verify their identity with UAE Emirates ID and valid driving license before joining our platform.'
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    description: 'All transactions are processed through encrypted payment gateways with fraud protection and secure data handling.'
  },
  {
    icon: Users,
    title: 'User Ratings',
    description: 'Both renters and owners rate each other after every interaction, building a trusted community over time.'
  },
  {
    icon: Phone,
    title: 'Emergency Support',
    description: '24/7 emergency support available in case of accidents, breakdowns, or any urgent situations during rentals.'
  }
];

const insurancePoints = [
  'Comprehensive insurance coverage included',
  'Third-party liability protection',
  'Damage protection for owners',
  'Emergency roadside assistance',
  'Clear dispute resolution process',
  'Transparent damage assessment'
];

export function SafetySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Safety & <span className="text-gradient">Security First</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your safety and security are our top priorities. We've built multiple layers of protection into our platform
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Safety Features */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Safety Features</h3>
            
            {safetyFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="inline-flex p-3 rounded-xl bg-destructive/10 text-destructive shrink-0">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Insurance & Protection */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Insurance & Protection</h3>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-8 w-8 text-green-500" />
                <h4 className="text-xl font-semibold text-gray-900">
                  Comprehensive Coverage
                </h4>
              </div>
              
              <div className="space-y-4">
                {insurancePoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 animate-slide-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-gradient-to-r from-destructive/10 to-destructive/5 rounded-2xl p-6 text-center">
              <Shield className="h-12 w-12 text-destructive mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                UAE Licensed & Regulated
              </h4>
              <p className="text-gray-600 text-sm">
                Fully compliant with UAE regulations and registered with local authorities
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="glass rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Questions About Safety?
            </h3>
            <p className="text-gray-600 mb-6">
              Our safety team is available 24/7 to address any concerns and ensure your peace of mind
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="gradient-primary text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-shadow">
                Contact Safety Team
              </button>
              <button className="border border-destructive text-destructive px-6 py-3 rounded-xl font-medium hover:bg-destructive/5 transition-colors">
                View Safety Guidelines
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
