'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  DollarSign,
  TrendingUp,
  Calendar,
  Download,
  Car,
  Users,
  CreditCard,
  Clock
} from 'lucide-react';

export function Earnings() {
  const [timeFilter, setTimeFilter] = useState('month');

  const earningsData = {
    current: {
      total: 4800,
      thisMonth: 1950,
      pending: 350,
      available: 4450
    },
    growth: {
      monthlyGrowth: 15,
      yearlyGrowth: 142
    },
    breakdown: [
      { car: 'BMW 7 Series', bookings: 8, earnings: 2392, growth: 12 },
      { car: 'Mercedes S-Class', bookings: 12, earnings: 4788, growth: 25 },
      { car: 'Range Rover Sport', bookings: 5, earnings: 2245, growth: -5 }
    ],
    transactions: [
      {
        id: 1,
        type: 'rental',
        car: 'BMW 7 Series',
        amount: 897,
        date: '2024-01-28',
        status: 'completed',
        renter: 'Sarah M.'
      },
      {
        id: 2,
        type: 'rental',
        car: 'Mercedes S-Class',
        amount: 798,
        date: '2024-01-27',
        status: 'completed',
        renter: 'James K.'
      },
      {
        id: 3,
        type: 'rental',
        car: 'Range Rover Sport',
        amount: 1347,
        date: '2024-01-25',
        status: 'pending',
        renter: 'Ahmed H.'
      }
    ]
  };

  const monthlyData = [
    { month: 'Jan', earnings: 3200 },
    { month: 'Feb', earnings: 4100 },
    { month: 'Mar', earnings: 3800 },
    { month: 'Apr', earnings: 4500 },
    { month: 'May', earnings: 5200 },
    { month: 'Jun', earnings: 4800 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Earnings Dashboard</h1>
            <p className="text-gray-600">Track your rental income and performance</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Select value={timeFilter} onValueChange={setTimeFilter}>
              <SelectTrigger className="w-40">
                <Calendar className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </div>

      {/* Earnings Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-xl">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <div className="text-sm text-green-600 font-medium">+{earningsData.growth.monthlyGrowth}%</div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">
            AED {earningsData.current.total.toLocaleString()}
          </div>
          <div className="text-gray-600">Total Earnings</div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-xl">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-sm text-blue-600 font-medium">This Month</div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">
            AED {earningsData.current.thisMonth.toLocaleString()}
          </div>
          <div className="text-gray-600">Monthly Income</div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-100 rounded-xl">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
            <div className="text-sm text-orange-600 font-medium">Processing</div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">
            AED {earningsData.current.pending.toLocaleString()}
          </div>
          <div className="text-gray-600">Pending</div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-xl">
              <CreditCard className="h-6 w-6 text-purple-600" />
            </div>
            <div className="text-sm text-green-600 font-medium">Available</div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">
            AED {earningsData.current.available.toLocaleString()}
          </div>
          <div className="text-gray-600">Available for Withdrawal</div>
        </div>
      </div>

      {/* Earnings Chart */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-gray-900">Monthly Earnings Trend</h2>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            Earnings (AED)
          </div>
        </div>
        
        <div className="h-64 flex items-end justify-between gap-4">
          {monthlyData.map((data, index) => {
            const height = (data.earnings / Math.max(...monthlyData.map(d => d.earnings))) * 200;
            return (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="text-sm font-medium text-gray-900 mb-2">
                  AED {data.earnings.toLocaleString()}
                </div>
                <div
                  className="w-full bg-gradient-to-t from-primary to-purple-600 rounded-t-lg transition-all hover:opacity-80"
                  style={{ height: `${height}px` }}
                ></div>
                <div className="text-sm text-gray-500 mt-2">{data.month}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Car Performance */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Car Performance</h2>
        
        <div className="space-y-6">
          {earningsData.breakdown.map((car, index) => (
            <div key={index} className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{car.car}</div>
                  <div className="text-sm text-gray-500">{car.bookings} bookings this month</div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-xl font-bold text-gray-900">
                  AED {car.earnings.toLocaleString()}
                </div>
                <div className={`text-sm font-medium ${
                  car.growth > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {car.growth > 0 ? '+' : ''}{car.growth}% vs last month
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Recent Transactions</h2>
          <Button variant="outline" size="sm">View All</Button>
        </div>
        
        <div className="space-y-4">
          {earningsData.transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Car className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{transaction.car}</div>
                  <div className="text-sm text-gray-500">
                    Rented by {transaction.renter} • {transaction.date}
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-lg font-bold text-green-600">
                  +AED {transaction.amount}
                </div>
                <div className={`text-xs px-2 py-1 rounded-full ${
                  transaction.status === 'completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  {transaction.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Withdrawal Section */}
      <div className="bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-3xl p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Withdraw?</h3>
            <p className="text-gray-600">
              You have AED {earningsData.current.available.toLocaleString()} available for withdrawal
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline">
              <CreditCard className="h-4 w-4 mr-2" />
              Add Bank Account
            </Button>
            <Button className="gradient-primary text-white">
              <DollarSign className="h-4 w-4 mr-2" />
              Withdraw Funds
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}