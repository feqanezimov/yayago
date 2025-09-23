'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { 
  Home,
  Car,
  Calendar,
  DollarSign,
  Users,
  Settings,
  User,
  LogOut,
  ChevronDown,
  Heart,
  MessageSquare
} from 'lucide-react';

export function DashboardNav() {
  const pathname = usePathname();
  const [userType] = useState('both'); // This would come from user data

  const navItems = [
    { href: '/dashboard', icon: Home, label: 'Dashboard', show: true },
    { href: '/dashboard/my-rentals', icon: Calendar, label: 'My Rentals', show: userType === 'rent' || userType === 'both' },
    { href: '/dashboard/my-services', icon: Settings, label: 'My Services', show: true },
    { href: '/dashboard/my-cars', icon: Car, label: 'My Cars', show: userType === 'list' || userType === 'both' },
    { href: '/dashboard/my-garage-profile', icon: Settings, label: 'My Garage Profile', show: userType === 'garage' || userType === 'both' },
    { href: '/dashboard/booking-requests', icon: Users, label: 'Booking Requests', show: userType === 'list' || userType === 'both' },
    { href: '/dashboard/earnings', icon: DollarSign, label: 'Earnings', show: userType === 'list' || userType === 'both' },
    { href: '/dashboard/profile', icon: User, label: 'Profile', show: true },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 sticky top-24">
      {/* User Info */}
      <div className="mb-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
          <User className="h-8 w-8 text-white" />
        </div>
        <h3 className="font-bold text-gray-900">Ahmed Al-Rashid</h3>
        <p className="text-sm text-gray-500">Car Owner & Renter</p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-3 h-3 text-yellow-400 fill-current">
                ⭐
              </div>
            ))}
          </div>
          <span className="text-sm font-medium">4.9</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-2">
        {navItems.filter(item => item.show).map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? 'gradient-primary text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* 0% Commission Badge */}
      <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-4">
        <div className="text-center">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
            <DollarSign className="h-4 w-4 text-white" />
          </div>
          <div className="font-bold text-green-800 text-sm">0% Commission</div>
          <div className="text-xs text-green-600">Keep 100% of earnings</div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">This Month</span>
          <span className="font-semibold text-gray-900">AED 4,800</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Active Cars</span>
          <span className="font-semibold text-gray-900">3</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Pending</span>
          <span className="font-semibold text-orange-600">5 requests</span>
        </div>
      </div>

      {/* Support & Logout */}
      <div className="mt-8 pt-6 border-t space-y-2">
        <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-primary">
          <MessageSquare className="h-4 w-4 mr-3" />
          Support
        </Button>
        <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-red-600">
          <LogOut className="h-4 w-4 mr-3" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}