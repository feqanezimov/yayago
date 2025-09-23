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
  Wrench,
  Calendar,
  MapPin,
  Clock,
  Star,
  MessageSquare,
  FileText,
  Filter,
  User,
  Phone
} from 'lucide-react';

export function MyServices() {
  const [statusFilter, setStatusFilter] = useState('all');

  const services = [
    {
      id: 1,
      garage: {
        name: 'Al Madina Auto Center',
        image: 'https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        owner: 'Ahmed Al Madani',
        phone: '+971 4 347 8900'
      },
      service: {
        name: 'Complete Engine Diagnostics',
        category: 'Mechanical',
        price: 150,
        duration: '2 hours'
      },
      appointment: {
        date: '2024-02-15',
        time: '10:00 AM',
        location: 'Al Quoz, Dubai'
      },
      status: 'confirmed',
      bookingId: 'SB-2024-001'
    },
    {
      id: 2,
      garage: {
        name: 'CarCare Pro Detailing',
        image: 'https://images.pexels.com/photos/6870310/pexels-photo-6870310.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        owner: 'Michael Roberts',
        phone: '+971 4 398 7654'
      },
      service: {
        name: 'Ceramic Coating Application',
        category: 'Detailing',
        price: 800,
        duration: '6-8 hours'
      },
      appointment: {
        date: '2024-02-20',
        time: '9:00 AM',
        location: 'Dubai Marina, Dubai'
      },
      status: 'pending',
      bookingId: 'SB-2024-002'
    },
    {
      id: 3,
      garage: {
        name: 'Dmitri Auto Master',
        image: 'https://images.pexels.com/photos/4070850/pexels-photo-4070850.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        owner: 'Dmitri Volkov',
        phone: '+971 50 456 7890'
      },
      service: {
        name: 'Mobile Engine Repair',
        category: 'Mechanical',
        price: 250,
        duration: '3 hours'
      },
      appointment: {
        date: '2024-01-28',
        time: '2:00 PM',
        location: 'Business Bay, Dubai'
      },
      status: 'completed',
      bookingId: 'SB-2024-003'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case 'confirmed':
        return <Badge className="bg-blue-100 text-blue-800">Confirmed</Badge>;
      case 'pending':
        return <Badge className="bg-orange-100 text-orange-800">Pending</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-800">Cancelled</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const filteredServices = statusFilter === 'all' 
    ? services 
    : services.filter(service => service.status === statusFilter);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Services</h1>
            <p className="text-gray-600">Track all your garage service appointments</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Services</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="space-y-6">
        {filteredServices.map((service) => (
          <div key={service.id} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Garage Image */}
              <div className="w-full lg:w-80 h-48 rounded-2xl overflow-hidden">
                <img
                  src={service.garage.image}
                  alt={service.garage.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Service Details */}
              <div className="flex-1 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{service.service.name}</h3>
                      {getStatusBadge(service.status)}
                    </div>
                    <p className="text-gray-600">Garage: {service.garage.name}</p>
                    <p className="text-sm text-gray-500">Booking: {service.bookingId}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-900">AED {service.service.price}</div>
                    <div className="text-gray-500">{service.service.duration}</div>
                  </div>
                </div>

                {/* Appointment and Service Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="font-medium text-gray-900">Appointment</span>
                    </div>
                    <div className="ml-7">
                      <div className="text-gray-900">{service.appointment.date} at {service.appointment.time}</div>
                      <div className="text-sm text-gray-500">{service.service.category} Service</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="font-medium text-gray-900">Location</span>
                    </div>
                    <div className="ml-7">
                      <div className="text-gray-900">{service.appointment.location}</div>
                    </div>
                  </div>
                </div>

                {/* Service Provider */}
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                  <User className="h-12 w-12 text-gray-400 bg-white rounded-full p-2" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{service.garage.owner}</div>
                    <div className="text-sm text-gray-500">Service Provider</div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </Button>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4 border-t">
                  {service.status === 'confirmed' && (
                    <>
                      <Button className="gradient-primary text-white">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Contact Provider
                      </Button>
                      <Button variant="outline">
                        <MapPin className="h-4 w-4 mr-2" />
                        Get Directions
                      </Button>
                      <Button variant="outline">
                        <Calendar className="h-4 w-4 mr-2" />
                        Reschedule
                      </Button>
                    </>
                  )}
                  
                  {service.status === 'pending' && (
                    <>
                      <Button variant="outline">
                        <Clock className="h-4 w-4 mr-2" />
                        Waiting for Confirmation
                      </Button>
                      <Button variant="outline">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Contact Provider
                      </Button>
                    </>
                  )}
                  
                  {service.status === 'completed' && (
                    <>
                      <Button variant="outline">
                        <Star className="h-4 w-4 mr-2" />
                        Rate Service
                      </Button>
                      <Button variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        Download Invoice
                      </Button>
                      <Button variant="outline">
                        <Wrench className="h-4 w-4 mr-2" />
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
      {filteredServices.length === 0 && (
        <div className="bg-white rounded-3xl p-12 shadow-lg text-center">
          <Wrench className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">No service appointments found</h3>
          <p className="text-gray-600 mb-6">
            {statusFilter === 'all' 
              ? "You haven't booked any garage services yet. Find trusted service providers!"
              : `No ${statusFilter} appointments found. Try changing the filter.`
            }
          </p>
          <Button className="gradient-primary text-white">
            <Wrench className="h-4 w-4 mr-2" />
            Find Services
          </Button>
        </div>
      )}
    </div>
  );
}