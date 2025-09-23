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
  Calendar,
  MapPin,
  Clock,
  User,
  Star,
  MessageSquare,
  Check,
  X,
  Filter,
  Car
} from 'lucide-react';

export function BookingRequests() {
  const [statusFilter, setStatusFilter] = useState('all');

  const bookingRequests = [
    {
      id: 1,
      car: {
        name: 'BMW 7 Series',
        image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop'
      },
      renter: {
        name: 'Elena Volkova',
        rating: 4.8,
        reviews: 23,
        joinDate: 'Member since 2023',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
      },
      booking: {
        dates: {
          start: '2024-02-15',
          end: '2024-02-18',
          duration: '3 days'
        },
        location: {
          pickup: 'Dubai Mall',
          dropoff: 'Dubai Airport'
        },
        price: 897,
        requestDate: '2 hours ago'
      },
      status: 'pending',
      message: 'Hi! I need a luxury car for my business trip to Dubai. The pickup and drop-off locations work perfectly for my schedule.'
    },
    {
      id: 2,
      car: {
        name: 'Mercedes S-Class',
        image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop'
      },
      renter: {
        name: 'James Mitchell',
        rating: 4.9,
        reviews: 45,
        joinDate: 'Member since 2022',
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
      },
      booking: {
        dates: {
          start: '2024-02-20',
          end: '2024-02-22',
          duration: '2 days'
        },
        location: {
          pickup: 'JBR',
          dropoff: 'JBR'
        },
        price: 798,
        requestDate: '5 hours ago'
      },
      status: 'pending',
      message: 'Looking forward to trying out your Mercedes for a weekend getaway with my family.'
    },
    {
      id: 3,
      car: {
        name: 'Range Rover Sport',
        image: 'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop'
      },
      renter: {
        name: 'Ahmed Hassan',
        rating: 4.7,
        reviews: 18,
        joinDate: 'Member since 2023',
        avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
      },
      booking: {
        dates: {
          start: '2024-02-25',
          end: '2024-02-28',
          duration: '3 days'
        },
        location: {
          pickup: 'Business Bay',
          dropoff: 'Al Ain'
        },
        price: 1347,
        requestDate: '1 day ago'
      },
      status: 'approved',
      message: 'Need an SUV for a desert camping trip. Will take good care of your vehicle!'
    },
    {
      id: 4,
      car: {
        name: 'BMW 7 Series',
        image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop'
      },
      renter: {
        name: 'Sarah Johnson',
        rating: 3.2,
        reviews: 8,
        joinDate: 'Member since 2024',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
      },
      booking: {
        dates: {
          start: '2024-02-12',
          end: '2024-02-14',
          duration: '2 days'
        },
        location: {
          pickup: 'Dubai Marina',
          dropoff: 'Sharjah'
        },
        price: 598,
        requestDate: '2 days ago'
      },
      status: 'declined',
      message: 'Hi, I need a car for my wedding anniversary celebration.'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge className="bg-orange-100 text-orange-800">Pending Review</Badge>;
      case 'approved':
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>;
      case 'declined':
        return <Badge className="bg-red-100 text-red-800">Declined</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const filteredRequests = statusFilter === 'all' 
    ? bookingRequests 
    : bookingRequests.filter(request => request.status === statusFilter);

  const handleApprove = (requestId: number) => {
    console.log('Approve request:', requestId);
    // Handle approval logic
  };

  const handleDecline = (requestId: number) => {
    console.log('Decline request:', requestId);
    // Handle decline logic
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Requests</h1>
            <p className="text-gray-600">Manage rental requests for your cars</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Requests</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="declined">Declined</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Requests List */}
      <div className="space-y-6">
        {filteredRequests.map((request) => (
          <div key={request.id} className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Car Image */}
              <div className="w-full lg:w-48 h-32 rounded-2xl overflow-hidden">
                <img
                  src={request.car.image}
                  alt={request.car.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Request Details */}
              <div className="flex-1 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{request.car.name}</h3>
                      {getStatusBadge(request.status)}
                    </div>
                    <p className="text-gray-500 text-sm">{request.booking.requestDate}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">AED {request.booking.price}</div>
                    <div className="text-gray-500">Total</div>
                  </div>
                </div>

                {/* Renter Information */}
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                  <img
                    src={request.renter.avatar}
                    alt={request.renter.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900">{request.renter.name}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-medium">{request.renter.rating}</span>
                        <span className="text-gray-500 text-sm ml-1">({request.renter.reviews} reviews)</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">{request.renter.joinDate}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    View Profile
                  </Button>
                </div>

                {/* Booking Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="font-medium text-gray-900">Rental Period</span>
                    </div>
                    <div className="ml-7">
                      <div className="text-gray-900">{request.booking.dates.start} to {request.booking.dates.end}</div>
                      <div className="text-sm text-gray-500">{request.booking.dates.duration}</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="font-medium text-gray-900">Locations</span>
                    </div>
                    <div className="ml-7">
                      <div className="text-gray-900">Pickup: {request.booking.location.pickup}</div>
                      <div className="text-sm text-gray-500">Drop-off: {request.booking.location.dropoff}</div>
                    </div>
                  </div>
                </div>

                {/* Renter Message */}
                {request.message && (
                  <div className="bg-blue-50 rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="h-4 w-4 text-blue-600" />
                      <span className="font-medium text-blue-900">Message from renter:</span>
                    </div>
                    <p className="text-blue-800 text-sm">{request.message}</p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4 border-t">
                  {request.status === 'pending' && (
                    <>
                      <Button 
                        className="gradient-primary text-white"
                        onClick={() => handleApprove(request.id)}
                      >
                        <Check className="h-4 w-4 mr-2" />
                        Approve Request
                      </Button>
                      <Button 
                        variant="outline"
                        className="border-red-200 text-red-600 hover:bg-red-50"
                        onClick={() => handleDecline(request.id)}
                      >
                        <X className="h-4 w-4 mr-2" />
                        Decline
                      </Button>
                    </>
                  )}
                  
                  <Button variant="outline">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message Renter
                  </Button>

                  {request.status === 'approved' && (
                    <Button variant="outline">
                      <Calendar className="h-4 w-4 mr-2" />
                      View Booking Details
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredRequests.length === 0 && (
        <div className="bg-white rounded-3xl p-12 shadow-lg text-center">
          <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">No booking requests found</h3>
          <p className="text-gray-600 mb-6">
            {statusFilter === 'all' 
              ? "You don't have any booking requests yet. Make sure your cars are listed and available!"
              : `No ${statusFilter} requests found. Try changing the filter.`
            }
          </p>
          <Button className="gradient-primary text-white">
            <Car className="h-4 w-4 mr-2" />
            Manage My Cars
          </Button>
        </div>
      )}

      {/* Quick Stats */}
      {bookingRequests.length > 0 && (
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Request Summary</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {bookingRequests.filter(r => r.status === 'pending').length}
              </div>
              <div className="text-gray-600">Pending Review</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {bookingRequests.filter(r => r.status === 'approved').length}
              </div>
              <div className="text-gray-600">Approved</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                AED {bookingRequests.filter(r => r.status === 'approved').reduce((sum, r) => sum + r.booking.price, 0).toLocaleString()}
              </div>
              <div className="text-gray-600">Potential Earnings</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {Math.round(bookingRequests.filter(r => r.status === 'approved').length / bookingRequests.length * 100) || 0}%
              </div>
              <div className="text-gray-600">Approval Rate</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}