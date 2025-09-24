'use client';

import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Globe
} from 'lucide-react';

export function ContactHero() {
  const contactInfo = [
    {
      icon: Phone,
      title: '24/7 Support Hotline',
      details: ['+971 4 YAY-AGO1', '+971 50 123 4567'],
      color: 'text-green-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      details: ['support@yayago.ae', 'hello@yayago.ae'],
      color: 'text-red-500'
    },
    {
      icon: MapPin,
      title: 'Dubai Office',
      details: ['Business Bay, Dubai', 'United Arab Emirates'],
      color: 'text-red-500'
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: ['< 2 hours average', '24/7 emergency support'],
      color: 'text-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-destructive/10 to-destructive/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Need help with your car rental or listing? Our multilingual support team is available 24/7 
              to assist you in English, Arabic, and Russian.
            </p>
          </div>

          {/* Multi-language Support Badge */}
          <div className="mt-8">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3">
              <Globe className="h-5 w-5 text-destructive" />
              <span className="font-semibold text-gray-900">Support in 3 Languages</span>
              <div className="flex space-x-2">
                <span className="text-xs bg-destructive/20 text-destructive px-2 py-1 rounded">English</span>
                <span className="text-xs bg-destructive/20 text-destructive px-2 py-1 rounded">العربية</span>
                <span className="text-xs bg-destructive/20 text-destructive px-2 py-1 rounded">Русский</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <div
              key={info.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover-scale animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className={`inline-flex p-4 rounded-2xl bg-gray-50 ${info.color}`}>
                  <info.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900">
                  {info.title}
                </h3>
                
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageSquare className="h-6 w-6 text-red-600" />
              <h3 className="text-lg font-bold text-red-800">Emergency Support</h3>
            </div>
            <p className="text-red-700 mb-4">
              For urgent assistance during rentals (accidents, breakdowns, emergencies)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+971501234567" 
                className="bg-red-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-red-700 transition-colors"
              >
                Call Emergency Line
              </a>
              <a 
                href="https://wa.me/971501234567" 
                className="border border-red-600 text-red-600 px-6 py-3 rounded-xl font-medium hover:bg-red-50 transition-colors"
              >
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
