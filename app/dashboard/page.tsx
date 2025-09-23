'use client';

import { Button } from '@/components/ui/button';
import { 
  Car,
  Calendar,
  DollarSign,
  Users,
  TrendingUp,
  Clock,
  Star,
  ArrowRight
} from 'lucide-react';

export default function DashboardPage() {
  // Mock data - in real app this would come from API
  const userStats = {
    totalRentals: 12,
    activeRentals: 2,
    totalEarnings: 4800,
    totalCars: 3,
    pendingRequests: 5,
    rating: 4.9
  };

  const recentActivity = [
    {
      id: 1,
      type: 'rental',
      title: 'BMW 7 Series rental completed',
      date: '2 hours ago',
      amount: 'AED 299'
    },
    {
      id: 2,
      type: 'booking',
      title: 'New booking request received',
      date: '4 hours ago',
      car: 'Mercedes S-Class'
    },
    {
      id: 3,
      type: 'payment',
      title: 'Payment received',
      date: '1 day ago',
      amount: 'AED 450'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, Ahmed! 👋
            </h1>
            <p className="text-gray-600">
              Here's what's happening with your Yayago account
            </p>
          </div>
          <div className="flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-medium">0% Commission Active</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-xl">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-sm text-gray-500">This Month</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {userStats.totalRentals}
          </div>
          <div className="text-gray-600">Total Rentals</div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-xl">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-sm text-gray-500">This Month</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            AED {userStats.totalEarnings.toLocaleString()}
          </div>
          <div className="text-gray-600">Total Earnings</div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-xl">
              <Car className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-sm text-gray-500">Active</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {userStats.totalCars}
          </div>
          <div className="text-gray-600">Listed Cars</div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-100 rounded-xl">
              <Users className="h-6 w-6 text-orange-600" />
            </div>
            <span className="text-sm text-gray-500">Pending</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {userStats.pendingRequests}
          </div>
          <div className="text-gray-600">Booking Requests</div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-100 rounded-xl">
              <Star className="h-6 w-6 text-yellow-600" />
            </div>
            <span className="text-sm text-gray-500">Average</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {userStats.rating}
          </div>
          <div className="text-gray-600">Rating</div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-primary/20 rounded-xl">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm text-gray-500">Active</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {userStats.activeRentals}
          </div>
          <div className="text-gray-600">Active Rentals</div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    activity.type === 'rental' ? 'bg-blue-100 text-blue-600' :
                    activity.type === 'booking' ? 'bg-green-100 text-green-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    {activity.type === 'rental' ? <Car className="h-5 w-5" /> :
                     activity.type === 'booking' ? <Calendar className="h-5 w-5" /> :
                     <DollarSign className="h-5 w-5" />}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{activity.title}</div>
                    <div className="text-sm text-gray-500">{activity.date}</div>
                  </div>
                </div>
                {activity.amount && (
                  <span className="font-semibold text-green-600">{activity.amount}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          
          <div className="space-y-4">
            <Button className="w-full gradient-primary text-white hover:shadow-lg transition-shadow p-4 h-auto">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <Car className="h-5 w-5" />
                  <span>List New Car</span>
                </div>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Button>
            
            <Button variant="outline" className="w-full p-4 h-auto">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5" />
                  <span>Browse Available Cars</span>
                </div>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Button>
            
            <Button variant="outline" className="w-full p-4 h-auto">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5" />
                  <span>View Earnings Report</span>
                </div>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Button>
            
            <Button variant="outline" className="w-full p-4 h-auto">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5" />
                  <span>Manage Booking Requests</span>
                </div>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}