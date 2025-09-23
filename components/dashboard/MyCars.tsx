'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Car,
  Plus,
  Edit,
  Eye,
  Calendar,
  DollarSign,
  Users,
  Star,
  Settings,
  TrendingUp,
  Clock
} from 'lucide-react';

export function MyCars() {
  const [statusFilter, setStatusFilter] = useState('all');

  const cars = [
    {
      id: 1,
      name: 'BMW 7 Series',
      category: 'Luxury',
      image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      status: 'active',
      pricing: {
        daily: 299,
        monthly: 6800
      },
      stats: {
        bookings: 8,
        rating: 4.9,
        reviews: 15,
        earnings: 2392
      },
      availability: 'Available',
      nextBooking: '2024-02-10'
    },
    {
      id: 2,
      name: 'Mercedes S-Class',
      category: 'Executive',
      image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      status: 'rented',
      pricing: {
        daily: 399,
        monthly: 8500
      },
      stats: {
        bookings: 12,
        rating: 4.8,
        reviews: 22,
        earnings: 4788
      },
      availability: 'Rented until Feb 8',
      nextBooking: '2024-02-12'
    },
    {
      id: 3,
      name: 'Range Rover Sport',
      category: 'SUV',
      image: 'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      status: 'maintenance',
      pricing: {
        daily: 449,
        monthly: 9200
      },
      stats: {
        bookings: 5,
        rating: 4.7,
        reviews: 8,
        earnings: 2245
      },
      availability: 'In Maintenance',
      nextBooking: null
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'rented':
        return <Badge className="bg-blue-100 text-blue-800">Currently Rented</Badge>;
      case 'maintenance':
        return <Badge className="bg-orange-100 text-orange-800">Maintenance</Badge>;
      case 'paused':
        return <Badge className="bg-gray-100 text-gray-800">Paused</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const filteredCars = statusFilter === 'all' 
    ? cars 
    : cars.filter(car => car.status === statusFilter);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Cars</h1>
            <p className="text-gray-600">Manage your car listings and track performance</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cars</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="rented">Currently Rented</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
                <SelectItem value="paused">Paused</SelectItem>
              </SelectContent>
            </Select>
            
            <Button className="gradient-primary text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add New Car
            </Button>
          </div>
        </div>
      </div>

      {/* Cars Grid */}
      <div className="space-y-6">
        {filteredCars.map((car) => (
          <div key={car.id} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Car Image */}
              <div className="w-full lg:w-80 h-48 rounded-2xl overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Car Details */}
              <div className="flex-1 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{car.name}</h3>
                      {getStatusBadge(car.status)}
                    </div>
                    <p className="text-gray-600">{car.category}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 font-medium">{car.stats.rating}</span>
                      </div>
                      <span className="text-gray-500">({car.stats.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-900">AED {car.pricing.daily}</div>
                    <div className="text-gray-500">per day</div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-gray-900">{car.stats.bookings}</div>
                    <div className="text-sm text-gray-600">Bookings</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-green-600">AED {car.stats.earnings}</div>
                    <div className="text-sm text-gray-600">Earned</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-blue-600">{car.stats.rating}</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-purple-600">{car.stats.reviews}</div>
                    <div className="text-sm text-gray-600">Reviews</div>
                  </div>
                </div>

                {/* Availability and Next Booking */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-medium">{car.availability}</span>
                  </div>
                  {car.nextBooking && (
                    <div className="text-sm text-gray-600">
                      Next booking: {car.nextBooking}
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4 border-t">
                  <Button className="gradient-primary text-white">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  
                  <Button variant="outline">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Listing
                  </Button>
                  
                  <Button variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    Manage Calendar
                  </Button>
                  
                  <Button variant="outline">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View Analytics
                  </Button>
                  
                  <Button variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredCars.length === 0 && (
        <div className="bg-white rounded-3xl p-12 shadow-lg text-center">
          <Car className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">No cars found</h3>
          <p className="text-gray-600 mb-6">
            {statusFilter === 'all' 
              ? "You haven't listed any cars yet. Start earning by listing your first car!"
              : `No ${statusFilter} cars found. Try changing the filter.`
            }
          </p>
          <Button className="gradient-primary text-white">
            <Plus className="h-4 w-4 mr-2" />
            List Your First Car
          </Button>
        </div>
      )}

      {/* Performance Summary */}
      {cars.length > 0 && (
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Performance Summary</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {cars.reduce((sum, car) => sum + car.stats.bookings, 0)}
              </div>
              <div className="text-gray-600">Total Bookings</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                AED {cars.reduce((sum, car) => sum + car.stats.earnings, 0).toLocaleString()}
              </div>
              <div className="text-gray-600">Total Earnings</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {(cars.reduce((sum, car) => sum + car.stats.rating, 0) / cars.length).toFixed(1)}
              </div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {cars.filter(car => car.status === 'active').length}
              </div>
              <div className="text-gray-600">Active Cars</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}