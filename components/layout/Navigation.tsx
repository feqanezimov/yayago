// components/layout/Navigation.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Menu,
  X,
  User
} from 'lucide-react';
import { HeaderSearchBar } from './HeaderSearchBar';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-16 flex items-center justify-between">
          {/* Left side: Hamburger menu and Logo */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setIsOpen(!isOpen)} // Toggle isOpen
              className="text-gray-900"
            >
              <Menu className="h-6 w-6" />
            </Button>

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <img
                src="/upscalemedia-transformed (1)(1).png"
                alt="Yayago Logo"
                className="h-10 w-auto group-hover:scale-110 transition-transform"
              />
            </Link>
          </div>

          {/* Right side: Header Search Bar (desktop only) */}
          <div className="flex items-center space-x-4">
            <HeaderSearchBar />
          </div>
        </div>
      </nav>

      {/* Dropdown Menu - Hamburger menyusunun altından açılır */}
      <div
        className={`fixed top-16 left-4 mt-2 w-64 glass rounded-lg shadow-lg z-[60] transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'
        }`}
      >
        <div className="p-4 space-y-2">
          {/* Navigasyon Linkleri */}
          <Link
            href="/cars"
            className="block text-gray-900 hover:text-primary transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            Find Cars
          </Link>
          <Link
            href="/garages"
            className="block text-gray-900 hover:text-primary transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            Auto Services
          </Link>
          <Link
            href="/list-car"
            className="block text-gray-900 hover:text-primary transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            List Your Car
          </Link>
          <Link
            href="/how-it-works"
            className="block text-gray-900 hover:text-primary transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href="/about"
            className="block text-gray-900 hover:text-primary transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="block text-gray-900 hover:text-primary transition-colors font-medium"
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

      {/* Arxa Plan Karartma Katmanı */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
