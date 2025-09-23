'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard,
  Users,
  Car,
  Calendar,
  DollarSign,
  FileText,
  Settings,
  BarChart3,
  MessageSquare,
  Shield,
  Bell,
  ChevronDown,
  TrendingUp
} from 'lucide-react';

export function AdminNav() {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<string[]>(['management']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navSections = [
    {
      id: 'overview',
      title: 'Overview',
      items: [
        { href: '/admin', icon: LayoutDashboard, label: 'Dashboard', exact: true },
        { href: '/admin/analytics', icon: BarChart3, label: 'Analytics', exact: false },
      ]
    },
    {
      id: 'management',
      title: 'Management',
      items: [
        { href: '/admin/users', icon: Users, label: 'Users', badge: '1,234', exact: false },
        { href: '/admin/cars', icon: Car, label: 'Cars', badge: '567', exact: false },
        { href: '/admin/bookings', icon: Calendar, label: 'Bookings', badge: '89', exact: false },
        { href: '/admin/finance', icon: DollarSign, label: 'Finance', exact: false },
      ]
    },
    {
      id: 'content',
      title: 'Content & Support',
      items: [
        { href: '/admin/content', icon: FileText, label: 'Content Management', exact: false },
        { href: '/admin/support', icon: MessageSquare, label: 'Support Tickets', badge: '12', exact: false },
        { href: '/admin/reports', icon: TrendingUp, label: 'Reports', exact: false },
      ]
    },
    {
      id: 'system',
      title: 'System',
      items: [
        { href: '/admin/settings', icon: Settings, label: 'Settings', exact: false },
        { href: '/admin/security', icon: Shield, label: 'Security', exact: false },
        { href: '/admin/notifications', icon: Bell, label: 'Notifications', exact: false },
      ]
    }
  ];

  const isActiveLink = (href: string, exact?: boolean) => {
    if (exact) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 sticky top-24">
      {/* Admin Stats Overview */}
      <div className="mb-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h3 className="font-bold text-gray-900">Admin Dashboard</h3>
          <p className="text-sm text-gray-500">System Administrator</p>
        </div>
        
        {/* Quick Stats */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Active Users</span>
            <span className="font-semibold text-gray-900">1,234</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Listed Cars</span>
            <span className="font-semibold text-gray-900">567</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Pending Reviews</span>
            <span className="font-semibold text-orange-600">23</span>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-6">
        {navSections.map((section) => (
          <div key={section.id}>
            <button
              onClick={() => toggleSection(section.id)}
              className="flex items-center justify-between w-full text-left text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 hover:text-gray-700 transition-colors"
            >
              {section.title}
              <ChevronDown 
                className={`h-3 w-3 transition-transform ${
                  expandedSections.includes(section.id) ? 'transform rotate-180' : ''
                }`} 
              />
            </button>
            
            {expandedSections.includes(section.id) && (
              <div className="space-y-1">
                {section.items.map((item) => {
                  const isActive = isActiveLink(item.href, item.exact);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl transition-all group ${
                        isActive
                          ? 'gradient-primary text-white shadow-lg'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="h-4 w-4" />
                        <span className="font-medium text-sm">{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          isActive 
                            ? 'bg-white/20 text-white' 
                            : 'bg-gray-200 text-gray-600 group-hover:bg-primary/10 group-hover:text-primary'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* 0% Commission Reminder */}
      <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-4">
        <div className="text-center">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
            <DollarSign className="h-4 w-4 text-white" />
          </div>
          <div className="font-bold text-green-800 text-sm">0% Platform Fee</div>
          <div className="text-xs text-green-600">Maintaining zero commission</div>
        </div>
      </div>
    </div>
  );
}