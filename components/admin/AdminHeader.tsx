'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Car,
  Bell,
  Settings,
  User,
  LogOut,
  Shield
} from 'lucide-react';

export function AdminHeader() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Admin Badge */}
          <div className="flex items-center space-x-4">
            <Link href="/admin" className="flex items-center space-x-2">
              <div className="gradient-primary p-2 rounded-xl">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">Yayago</span>
            </Link>
            <div className="flex items-center gap-2 bg-red-100 text-red-800 px-3 py-1 rounded-full">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Admin Panel</span>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </Button>

            {/* Quick Actions */}
            <Link href="/admin/settings">
              <Button variant="ghost" size="sm">
                <Settings className="h-5 w-5" />
              </Button>
            </Link>

            {/* View Site */}
            <Link href="/">
              <Button variant="outline" size="sm">
                View Site
              </Button>
            </Link>

            {/* Admin Profile */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <div className="hidden md:block">
                <div className="text-sm font-medium text-gray-900">Admin User</div>
                <div className="text-xs text-gray-500">Super Admin</div>
              </div>
            </div>

            {/* Logout */}
            <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}