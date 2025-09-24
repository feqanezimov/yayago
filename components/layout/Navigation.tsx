// components/layout/Navigation.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Menu,
  X,
  User // User ikonunu Dashboard ve Sign In linkleri için kullanıyoruz
} from 'lucide-react';
import { HeaderSearchBar } from './HeaderSearchBar'; // Yeni komponenti import edin

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-16 flex items-center justify-between">
          {/* Left side: Hamburger menu and Logo */}
          <div className="flex items-center space-x-4"> {/* Hamburger və loqo üçün sol tərəf */}
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setIsOpen(true)}
              className="text-gray-900" // lg:hidden sinifi silindi ki, həmişə görünsün
            >
              <Menu className="h-8 w-8" />
            </Button>

            {/* Logo - hamburger menyusunun yanında */}
            <Link href="/" className="flex items-center space-x-2 group">
              <img
                src="/upscalemedia-transformed (1)(1).png"
                alt="Yayago Logo"
                className="h-10 w-auto group-hover:scale-200 transition-transform"
              />
              {/* <span className="text-2xl font-bold text-gradient">Yayago</span> -- Bu hissə silindi */}
            </Link>
          </div>

          {/* Right side: Header Search Bar (desktop only) */}
          <div className="flex items-center space-x-4">
            <HeaderSearchBar /> {/* Böyük ekranlarda görünür, kiçik ekranlarda gizli */}
            {/* "Sign In" və "Dashboard" düymələri buradan silindi */}
          </div>
        </div>
      </nav>

      {/* Kenar Çubuğu Menüsü */}
      <div
        className={`fixed top-0 left-0 h-screen w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-200">
          {/* Kapatma butonu */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="text-gray-900"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="px-4 py-6 space-y-4">
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
          <div className="pt-4 space-y-3">
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

      {/* Arka Plan Karartma Katmanı */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
