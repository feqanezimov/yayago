'use client';

import { 
  MapPin,
  Clock,
  Car,
  Users,
  Globe,
  Building
} from 'lucide-react';

export function LocationInfo() {
  const officeInfo = [
    {
      title: 'Dubai Headquarters',
      address: 'Business Bay, Dubai',
      details: 'United Arab Emirates',
      hours: 'Sunday - Thursday: 9:00 AM - 9:00 PM',
      weekendHours: 'Friday - Saturday: 10:00 AM - 6:00 PM'
    }
  ];

  const serviceAreas = [
    { area: 'Dubai', icon: Building, coverage: '100%' },
    { area: 'Abu Dhabi', icon: Building, coverage: '95%' },
    { area: 'Sharjah', icon: Building, coverage: '90%' },
    { area: 'Ajman', icon: Building, coverage: '85%' }
  ];

  const quickStats = [
    { icon: Car, value: '1000+', label: 'Cars Available' },
    { icon: Users, value: '5K+', label: 'Active Users' },
    { icon: Globe, value: '3', label: 'Languages' },
    { icon: MapPin, value: '7', label: 'Emirates Covered' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Visit Our <span className="text-gradient">Office</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Located in the heart of Dubai's business district, we're always ready to welcome you
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Office Information */}
          <div className="lg:col-span-1 space-y-8">
            {officeInfo.map((office, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg animate-slide-up">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold text-gray-900">{office.title}</h3>
                  </div>
                  
                  <div className="space-y-3 text-gray-600">
                    <p className="font-medium">{office.address}</p>
                    <p>{office.details}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium text-gray-900">Office Hours</span>
                    </div>
                    <p className="text-sm text-gray-600">{office.hours}</p>
                    <p className="text-sm text-gray-600">{office.weekendHours}</p>
                  </div>

                  <div className="pt-4 border-t">
                    <button className="w-full gradient-primary text-white py-3 rounded-xl font-medium hover:shadow-lg transition-shadow">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Service Areas */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-6">Service Coverage</h4>
              <div className="space-y-4">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <area.icon className="h-5 w-5 text-primary" />
                      <span className="font-medium text-gray-900">{area.area}</span>
                    </div>
                    <span className="text-sm font-medium text-green-600">{area.coverage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Placeholder and Stats */}
          <div className="lg:col-span-2 space-y-8">
            {/* Map */}
            <div className="bg-white rounded-3xl p-8 shadow-lg animate-slide-up">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Map</h3>
                  <p className="text-gray-600">
                    Find our office location and nearby car pickup points
                  </p>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 left-8 w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {quickStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-6">Why Visit Our Office?</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mt-0.5">
                      <Users className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900">Meet Our Team</h5>
                      <p className="text-sm text-gray-600">Get personalized assistance from our multilingual support team</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mt-0.5">
                      <Car className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900">Car Inspections</h5>
                      <p className="text-sm text-gray-600">Professional vehicle inspections for new listings</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mt-0.5">
                      <Building className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900">Business Partnerships</h5>
                      <p className="text-sm text-gray-600">Explore fleet management and corporate solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mt-0.5">
                      <Globe className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900">Document Verification</h5>
                      <p className="text-sm text-gray-600">Quick verification process for faster account approval</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}