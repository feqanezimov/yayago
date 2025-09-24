'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Star,
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Clock,
  Shield,
  Check,
  MessageSquare,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Award,
  User
} from 'lucide-react';
import { garageData } from '@/lib/garage-data';

interface GarageDetailsProps {
  garageId: string;
}

const reviews = [
  {
    id: 1,
    user: 'Ahmed Al-Rashid',
    rating: 5,
    date: '2024-01-20',
    comment: 'Excellent service! Fixed my BMW engine issue professionally and at a fair price.',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    service: 'Engine Diagnostics'
  },
  {
    id: 2,
    user: 'Sarah Mitchell',
    rating: 5,
    date: '2024-01-15',
    comment: 'Amazing ceramic coating service! My car looks brand new. Highly recommended.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    service: 'Ceramic Coating'
  }
];

export function GarageDetails({ garageId }: GarageDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedService, setSelectedService] = useState('');
  
  const garage = garageData[garageId as keyof typeof garageData];
  
  if (!garage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 mb-2">Service Provider Not Found</div>
          <p className="text-gray-600 mb-6">The service provider you're looking for doesn't exist.</p>
          <Link href="/garages">
            <Button className="gradient-primary text-white">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % garage.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + garage.images.length) % garage.images.length);
  };

  return (
    <section className="py-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/garages" className="inline-flex items-center text-destructive hover:text-destructive/80 transition-colors mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Services
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Image Gallery */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-white shadow-2xl">
              <img
                src={garage.images[currentImageIndex]}
                alt={garage.name}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {garage.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-700" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-700" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              {garage.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {garage.images.length}
                </div>
              )}
            </div>

            {/* Thumbnail Strip */}
            {garage.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {garage.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-16 rounded-xl overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? 'border-destructive' : 'border-gray-200'
                    }`}
                  >
                    <img src={image} alt={`${garage.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Booking Form Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-lg sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Book Service</h3>
              
              {/* Quick Contact */}
              <div className="space-y-3 mb-6">
                <Button variant="outline" className="w-full" size="lg">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
                <Link href={`/garages/${garage.id}/book`}>
                  <Button className="w-full gradient-primary text-white" size="lg">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Appointment
                  </Button>
                </Link>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-destructive" />
                  <span className="text-sm font-medium">{garage.availability.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-destructive" />
                  <span className="text-sm">{garage.location}</span>
                </div>
                {garage.verified && (
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600">Verified Partner</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Service Information */}
        <div className="mt-12 space-y-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {garage.badges.map((badge) => (
                  <Badge key={badge} className="gradient-primary text-white border-0">
                    {badge}
                  </Badge>
                ))}
                <Badge className={`border-0 ${
                  garage.type === 'garage' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                }`}>
                  {garage.type === 'garage' ? 'Service Center' : 'Mobile Master'}
                </Badge>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{garage.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-bold text-lg">{garage.rating}</span>
                </div>
                <span className="text-gray-500">({garage.reviews} reviews)</span>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">{garage.location}</span>
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">{garage.description}</p>
            </div>

            {/* Services */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {garage.services.map((service) => (
                  <div key={service.id} className="border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-destructive text-lg">AED {service.price}</div>
                        <div className="text-sm text-gray-500">{service.duration}</div>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => setSelectedService(service.id)}
                      >
                        Select
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialties */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Specialties</h2>
              <div className="flex flex-wrap gap-3">
                {garage.specialties.map((specialty) => (
                  <Badge key={specialty} variant="secondary" className="px-4 py-2">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Owner Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Owner</h2>
              <div className="flex items-center gap-6">
                <img
                  src={garage.owner.avatar}
                  alt={garage.owner.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{garage.owner.name}</h3>
                  <p className="text-gray-600 mb-2">{garage.owner.experience} of experience</p>
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="h-4 w-4 text-orange-500" />
                    <span className="text-sm">Established {garage.establishedYear}</span>
                  </div>
                  
                  {/* Certifications */}
                  <div className="space-y-2">
                    <div className="font-medium text-sm text-gray-900">Certifications:</div>
                    <div className="flex flex-wrap gap-2">
                      {garage.owner.certifications.map((cert) => (
                        <Badge key={cert} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Languages */}
                  <div className="mt-3">
                    <div className="font-medium text-sm text-gray-900 mb-1">Languages:</div>
                    <div className="flex gap-2">
                      {garage.owner.languages.map((lang) => (
                        <span key={lang} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-bold text-lg">{garage.rating}</span>
                <span className="text-gray-500">({garage.reviews} reviews)</span>
              </div>
            </div>

            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                  <div className="flex items-start gap-4">
                    <img
                      src={review.avatar}
                      alt={review.user}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-medium text-gray-900">{review.user}</h4>
                          <p className="text-sm text-gray-500">Service: {review.service}</p>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
