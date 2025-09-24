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
  Calendar,
  MapPin,
  Clock,
  Star,
  MessageSquare,
  FileText,
  Filter
} from 'lucide-react';

export function MyRentals() {
  const [statusFilter, setStatusFilter] = useState('all');

  const rentals = [
    {
      id: 1,
      car: {
        name: 'BMW 7 Series',
        image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        owner: 'Mohammed Al Rashid'
      },
      dates: {
        start: '2024-01-15',
        end: '2024-01-18',
        duration: '3 days'
      },
      location: {
        pickup: 'Dubai Mall',
        dropoff: 'Dubai Airport'
      },
      price: 897,
      status: 'completed',
      booking: 'YG-2024-001'
    },
    {
      id: 2,
      car: {
        name: 'Mercedes S-Class',
        image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        owner: 'Sarah Mitchell'
      },
      dates: {
        start: '2024-01-25',
        end: '2024-01-27',
        duration: '2 days'
      },
      location: {
        pickup: 'JBR',
        dropoff: 'JBR'
      },
      price: 798,
      status: 'active',
      booking: 'YG-2024-002'
    },
    {
      id: 3,
      car: {
        name: 'Toyota Camry',
        image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        owner: 'Ahmed Hassan'
      },
      dates: {
        start: '2024-02-05',
        end: '2024-02-08',
        duration: '3 days'
      },
      location: {
        pickup: 'Business Bay',
        dropoff: 'Business Bay'
      },
      price: 267,
      status: 'upcoming',
      booking: 'YG-2024-003'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case 'active':
        return <Badge className="bg-red-100 text-red-800">Active</Badge>;
      case 'upcoming':
        return <Badge className="bg-orange-100 text-orange-800">Upcoming</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const filteredRentals = statusFilter === 'all' 
    ? rentals 
    : rentals.filter(rental => rental.status === statusFilter);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Rentals</h1>
            <p className="text-gray-600">Track all your car rental bookings</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Rentals</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Rentals List */}
      <div className="space-y-6">
        {filteredRentals.map((rental) => (
          <div key={rental.id} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Car Image */}
              <div className="w-full lg:w-80 h-48 rounded-2xl overflow-hidden">
                <img
                  src={rental.car.image}
                  alt={rental.car.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Rental Details */}
              <div className="flex-1 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{rental.car.name}</h3>
                      {getStatusBadge(rental.status)}
                    </div>
                    <p className="text-gray-600">Owner: {rental.car.owner}</p>
                    <p className="text-sm text-gray-500">Booking: {rental.booking}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-900">AED {rental.price}</div>
                    <div className="text-gray-500">Total</div>
                  </div>
                </div>

                {/* Date and Location Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-destructive" />
                      <span className="font-medium text-gray-900">Rental Period</span>
                    </div>
                    <div className="ml-7">
                      <div className="text-gray-900">{rental.dates.start} to {rental.dates.end}</div>
                      <div className="text-sm text-gray-500">{rental.dates.duration}</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-destructive" />
                      <span className="font-medium text-gray-900">Locations</span>
                    </div>
                    <div className="ml-7">
                      <div className="text-gray-900">Pickup: {rental.location.pickup}</div>
                      <div className="text-sm text-gray-500">Drop-off: {rental.location.dropoff}</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4 border-t">
                  {rental.status === 'active' && (
                    <>
                      <Button className="gradient-primary text-white">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Contact Owner
                      </Button>
                      <Button variant="outline">
                        <MapPin className="h-4 w-4 mr-2" />
                        Get Directions
                      </Button>
                    </>
                  )}
                  
                  {rental.status === 'upcoming' && (
                    <>
                      <Button className="gradient-primary text-white">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Contact Owner
                      </Button>
                      <Button variant="outline">
                        <Calendar className="h-4 w-4 mr-2" />
                        Modify Booking
                      </Button>
                    </>
                  )}
                  
                  {rental.status === 'completed' && (
                    <>
                      <Button variant="outline">
                        <Star className="h-4 w-4 mr-2" />
                        Rate & Review
                      </Button>
                      <Button variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        Download Receipt
                      </Button>
                      <Button variant="outline">
                        <Car className="h-4 w-4 mr-2" />
                        Book Again
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredRentals.length === 0 && (
        <div className="bg-white rounded-3xl p-12 shadow-lg text-center">
          <Car className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">No rentals found</h3>
          <p className="text-gray-600 mb-6">
            {statusFilter === 'all' 
              ? "You haven't rented any cars yet. Start exploring our amazing car collection!"
              : `No ${statusFilter} rentals found. Try changing the filter.`
            }
          </p>
          <Button className="gradient-primary text-white">
            <Car className="h-4 w-4 mr-2" />
            Browse Cars
          </Button>
        </div>
      )}
    </div>
  );
}
