// components/home/HeroSection.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link'; // Link importu əlavə edildi
import { Button } from '@/components/ui/button';
import { SearchForm } from '@/components/booking/SearchForm';
import { HeaderSearchBar } from '../layout/HeaderSearchBar'; // HeaderSearchBar importu əlavə edildi
import {
  Star,
  Users,
  Car,
  Clock,
  ChevronDown,
  ArrowRight,
  Menu, // Menu iconu əlavə edildi
  X, // X iconu əlavə edildi
  User // User iconu əlavə edildi
} from 'lucide-react';

export function HeroSection() {
  const [showSearch, setShowSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // isOpen state-i əlavə edildi

  const stats = [
    { icon: Car, value: '500+', label: 'Premium Cars' },
    { icon: Users, value: '10K+', label: 'Happy Customers' },
    { icon: Clock, value: '24/7', label: 'Support' },
    { icon: Star, value: '4.9', label: 'Rating' }
  ];

  return (
    <section className="bg-black py-8"> {/* Outer section for overall background and vertical spacing */}
      <div className="hero-bg relative overflow-hidden rounded-3xl shadow-2xl w-full mx-auto min-h-[80vh] flex items-center"> {/* New container for image, rounded corners, shadow */}
        {/* Integrated Navigation Bar */}
        <nav className="absolute top-0 left-0 right-0 z-50"> {/* bg-gray-800 və border-b border-white/10 sinifləri silindi */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-16 flex items-center justify-between">
            {/* Left: Hamburger menu and its dropdown */}
            <div className="relative flex items-center">
              <Button
                variant="ghost"
                size="lg"
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-white hover:bg-white/10" // hover:bg-transparent dəyişdirildi
              >
                <Menu className="h-6 w-6" />
              </Button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-lg shadow-lg z-[60] transition-all duration-300 ease-in-out origin-top text-white ${ // bg-gray-800 əlavə edildi
                  isOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'
                }`}
              >
                <div className="p-4 space-y-2">
                  {/* Navigasyon Linkleri */}
                  <Link
                    href="/cars"
                    className="block hover:text-primary transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Find Cars
                  </Link>
                  <Link
                    href="/garages"
                    className="block hover:text-primary transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Auto Services
                  </Link>
                  <Link
                    href="/list-car"
                    className="block hover:text-primary transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    List Your Car
                  </Link>
                  <Link
                    href="/how-it-works"
                    className="block hover:text-primary transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    How It Works
                  </Link>
                  <Link
                    href="/about"
                    className="block hover:text-primary transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    className="block hover:text-primary transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                  <div className="pt-4 space-y-3 border-t border-gray-200">
                    {/* Sign In and Dashboard moved here */}
                    <Link href="/signin" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="w-full bg-transparent text-gray-900 hover:bg-gray-100 justify-start">
                        <User className="h-4 w-4 mr-2" />
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/signup" onClick={() => setIsOpen(false)}>
                      <Button className="w-full gradient-primary text-white justify-start">
                        Get Started
                      </Button>
                    </Link>
                    <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="w-full bg-transparent text-gray-900 hover:bg-gray-100 justify-start">
                        <User className="h-4 w-4 mr-2" />
                        Dashboard
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Center: Logo */}
            <div className="flex-1 flex justify-center">
              <Link href="/" className="flex items-center space-x-2 group">
                <img
                  src="/upscalemedia-transformed (1)(1).png"
                  alt="Yayago Logo"
                  className="h-10 w-auto group-hover:scale-110 transition-transform"
                />
              </Link>
            </div>

            {/* Right: Search Bar */}
            <div className="flex items-center">
              <HeaderSearchBar />
            </div>
          </div>
        </nav>

        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-dots opacity-30" />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-30 pt-16 pb-20 w-full"> {/* lg:px-8 dəyişdirildi */}
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
                  className="bg-gray-800 text-white border border-white hover:bg-gray-700 px-8 py-6 text-lg hover-scale"
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

      {/* Arxa Plan Karartma Katmanı */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </section>
  );
}
