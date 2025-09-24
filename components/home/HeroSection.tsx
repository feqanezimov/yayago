// components/home/HeroSection.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SearchForm } from '@/components/booking/SearchForm';
import {
  Star,
  Users,
  Car,
  Clock,
  ChevronDown,
  ArrowRight
} from 'lucide-react';

export function HeroSection() {
  const [showSearch, setShowSearch] = useState(false);

  const stats = [
    { icon: Car, value: '500+', label: 'Premium Cars' },
    { icon: Users, value: '10K+', label: 'Happy Customers' },
    { icon: Clock, value: '24/7', label: 'Support' },
    { icon: Star, value: '4.9', label: 'Rating' }
  ];

  return (
    <section className="bg-gray-900 py-8"> {/* Outer section for overall background and vertical spacing */}
      <div className="hero-bg relative overflow-hidden rounded-3xl shadow-2xl max-w-7xl mx-auto min-h-[80vh] flex items-center"> {/* New container for image, rounded corners, shadow */}
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-dots opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full"> {/* Content container */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8 animate-fade-in">
              <div className="space-y-4">
                {/* Red accent line and "CAR RENTAL" text */}
                <div className="flex items-center gap-2">
                  <div className="bg-destructive h-1 w-16 rounded-full" />
                  <span className="text-destructive text-sm font-semibold uppercase tracking-wider">Car Rental</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Connect. Share.
                  <span className="block text-gradient">Drive Forward</span>
                </h1>
                <p className="text-xl text-white/80 max-w-lg leading-relaxed">
                  Dubai's complete automotive ecosystem. Car rentals + garage services with 0% commission. Connect with car owners, renters, and trusted auto professionals.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="gradient-primary text-white hover:shadow-2xl transition-all px-8 py-6 text-lg hover-scale"
                  onClick={() => setShowSearch(true)}
                >
                  Rent Cars & Services
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg hover-scale"
                >
                  Find Auto Services
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 border border-white/20 rounded-2xl p-4 text-center hover-scale">
                    <stat.icon className="h-8 w-8 text-destructive mx-auto mb-2" />
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Zero Commission Badge */}
              <div className="pt-6">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-semibold">0% Commission - Keep 100% of Your Earnings</span>
                </div>
              </div>
            </div>

            {/* Right Content - Featured Car */}
            <div className="relative animate-slide-up">
              <div className="bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover-scale">
                <img
                  src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Featured luxury car"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute top-12 right-12 bg-white/10 border border-white/20 rounded-xl p-3">
                  <div className="text-white text-center">
                    <div className="text-sm text-white/70">Starting from</div>
                    <div className="text-2xl font-bold text-destructive">AED 89</div>
                    <div className="text-sm text-white/70">per day</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Form Overlay */}
        {showSearch && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="glass rounded-3xl p-8 max-w-4xl w-full animate-slide-up">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Find Your Perfect Ride</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSearch(false)}
                  className="text-white hover:bg-white/10"
                >
                  ✕
                </Button>
              </div>
              <SearchForm onClose={() => setShowSearch(false)} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
