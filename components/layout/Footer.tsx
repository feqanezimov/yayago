'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Car,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

const footerSections = [
  {
    title: 'For Renters',
    links: [
      { name: 'Find Cars', href: '/cars' },
      { name: 'Auto Services', href: '/garages' },
      { name: 'How to Rent', href: '/how-it-works#renting' },
      { name: 'Insurance & Safety', href: '/insurance' },
      { name: 'Pricing Guide', href: '/pricing' }
    ]
  },
  {
    title: 'For Owners',
    links: [
      { name: 'List Your Car', href: '/list-car' },
      { name: 'List Your Garage', href: '/list-garage' },
      { name: 'Earnings Calculator', href: '/earnings' },
      { name: 'Owner Guide', href: '/how-it-works#listing' },
      { name: '0% Commission', href: '/why-yayago' }
    ]
  },
  {
    title: 'Support',
    links: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' }
    ]
  }
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with <span className="text-gradient">Yayago</span>
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Get the latest deals, service offers, new arrivals, and exclusive discounts delivered to your inbox
            </p>
            <div className="flex max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button className="gradient-primary text-white ml-2">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="gradient-primary p-3 rounded-xl">
                <Car className="h-8 w-8 text-white" />
              </div>
              <span className="text-3xl font-bold text-gradient">Yayago</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Dubai's complete automotive ecosystem with 0% commission. Connect car owners with renters and find trusted garage services - all in one platform.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span>+971 4 YAY-AGO1</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span>info@yayago.ae</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span>Dubai, UAE</span>
              </div>
              <div className="flex items-center space-x-3 pt-2">
                <div className="flex space-x-2">
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">English</span>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">العربية</span>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Русский</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-lg mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Yayago. All rights reserved. | Registered in UAE | 0% Commission Guaranteed
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}