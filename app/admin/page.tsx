'use client';

import { Button } from '@/components/ui/button';
import { 
  Users,
  Car,
  Calendar,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Star,
  ArrowRight,
  Plus
} from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Total Users',
      value: '1,234',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      href: '/admin/users'
    },
    {
      title: 'Listed Cars',
      value: '567',
      change: '+8%',
      changeType: 'positive',
      icon: Car,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      href: '/admin/cars'
    },
    {
      title: 'Active Bookings',
      value: '89',
      change: '+15%',
      changeType: 'positive',
      icon: Calendar,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      href: '/admin/bookings'
    },
    {
      title: 'Monthly Revenue',
      value: 'AED 125K',
      change: '+23%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      href: '/admin/finance'
    }
  ];

  const pendingActions = [
    {
      id: 1,
      type: 'car_approval',
      title: 'New Car Listing Pending',
      description: 'BMW X5 2023 by Mohammed Al Rashid',
      time: '2 hours ago',
      priority: 'high',
      action: 'Review'
    },
    {
      id: 2,
      type: 'user_verification',
      title: 'User Document Verification',
      description: 'Sarah Mitchell - License verification needed',
      time: '4 hours ago',
      priority: 'medium',
      action: 'Verify'
    },
    {
      id: 3,
      type: 'dispute',
      title: 'Booking Dispute',
      description: 'Damage claim for Toyota Camry rental',
      time: '1 day ago',
      priority: 'high',
      action: 'Resolve'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      user: 'Ahmed Hassan',
      action: 'Listed a new car',
      car: 'Mercedes E-Class',
      time: '30 minutes ago',
      type: 'car_listed'
    },
    {
      id: 2,
      user: 'Elena Volkova',
      action: 'Completed booking',
      car: 'BMW 7 Series',
      time: '1 hour ago',
      type: 'booking_completed'
    },
    {
      id: 3,
      user: 'James Mitchell',
      action: 'Payment received',
      car: 'Range Rover Sport',
      time: '2 hours ago',
      type: 'payment'
    }
  ];

  const quickActions = [
    { label: 'Add New User', icon: Plus, href: '/admin/users/new', color: 'bg-blue-600' },
    { label: 'Approve Cars', icon: CheckCircle, href: '/admin/cars?status=pending', color: 'bg-green-600' },
    { label: 'View Reports', icon: TrendingUp, href: '/admin/reports', color: 'bg-purple-600' },
    { label: 'System Settings', icon: AlertTriangle, href: '/admin/settings', color: 'bg-orange-600' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-600">
              Welcome back! Here's what's happening on your platform today.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-medium">System Healthy</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 ${stat.bgColor} rounded-xl`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {stat.value}
            </div>
            <div className="text-gray-600 text-sm">{stat.title}</div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Pending Actions */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Pending Actions</h2>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
            
            <div className="space-y-4">
              {pendingActions.map((action) => (
                <div key={action.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${
                      action.priority === 'high' ? 'bg-red-500' : 'bg-orange-500'
                    }`}></div>
                    <div>
                      <h4 className="font-medium text-gray-900">{action.title}</h4>
                      <p className="text-sm text-gray-600">{action.description}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="h-3 w-3 text-gray-400" />
                        <span className="text-xs text-gray-500">{action.time}</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" className="gradient-primary text-white">
                    {action.action}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-3xl p-8 shadow-lg mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
            
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    activity.type === 'car_listed' ? 'bg-blue-100 text-blue-600' :
                    activity.type === 'booking_completed' ? 'bg-green-100 text-green-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    {activity.type === 'car_listed' ? <Car className="h-5 w-5" /> :
                     activity.type === 'booking_completed' ? <CheckCircle className="h-5 w-5" /> :
                     <DollarSign className="h-5 w-5" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900">
                      <span className="font-medium">{activity.user}</span> {activity.action}
                    </p>
                    <p className="text-sm text-gray-600">{activity.car}</p>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Quick Actions */}
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h3>
            
            <div className="space-y-3">
              {quickActions.map((action) => (
                <Button key={action.label} className={`w-full justify-start ${action.color} text-white hover:opacity-90 transition-opacity`}>
                  <action.icon className="h-4 w-4 mr-3" />
                  {action.label}
                  <ArrowRight className="h-4 w-4 ml-auto" />
                </Button>
              ))}
            </div>
          </div>

          {/* Platform Health */}
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Platform Health</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Server Status</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-600">Online</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Database</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-600">Healthy</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Payment System</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-600">Active</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Last Backup</span>
                <span className="text-sm text-gray-900">2 hours ago</span>
              </div>
            </div>
          </div>

          {/* Top Performers */}
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Top Performers</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-gold-600">1</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Mohammed Al Rashid</p>
                  <p className="text-sm text-gray-600">AED 12,500 earned</p>
                </div>
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-600">2</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Sarah Mitchell</p>
                  <p className="text-sm text-gray-600">AED 9,800 earned</p>
                </div>
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brown-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-brown-600">3</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Ahmed Hassan</p>
                  <p className="text-sm text-gray-600">AED 8,200 earned</p>
                </div>
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}