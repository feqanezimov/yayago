'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Star,
  Heart,
  Users,
  Fuel,
  Settings,
  Calendar,
  MapPin,
  Phone,
  MessageSquare,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Shield,
  Check,
  Car,
  Clock,
  ArrowRight
} from 'lucide-react';
import { carData } from '@/lib/car-data';

interface CarDetailsProps {
  carId: string;
}

const reviews = [
  {
    id: 1,
    user: 'Sarah Mitchell',
    rating: 5,
    date: '2024-01-20',
    comment: 'Absolutely perfect car for my business trip. Mohammed was very professional and the car was spotless.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: 2,
    user: 'James Thompson',
    rating: 5,
    date: '2024-01-15',
    comment: 'Smooth rental process and an amazing driving experience. Highly recommend this car and owner!',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: 3,
    user: 'Elena Volkova',
    rating: 4,
    date: '2024-01-10',
    comment: 'Great car, very comfortable for long drives. The owner was responsive and helpful.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  }
];

export function CarDetails({ carId }: CarDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [formData, setFormData] = useState({
    pickupDate: '',
    dropoffDate: '',
    pickupTime: '10:00',
    dropoffTime: '10:00',
    pickupLocation: '',
    dropoffLocation: ''
  });
  
  const car = carData[carId as keyof typeof carData];
  
  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Car className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Car Not Found</h2>
          <p className="text-gray-600 mb-6">The car you're looking for doesn't exist.</p>
          <Link href="/cars">
            <Button className="gradient-primary text-white">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Cars
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
  };

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const calculatePrice = useCallback(() => {
    if (!formData.pickupDate || !formData.dropoffDate) return 0;
    
    const pickup = new Date(formData.pickupDate);
    const dropoff = new Date(formData.dropoffDate);
    const timeDiff = dropoff.getTime() - pickup.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    return Math.max(1, daysDiff) * car.price;
  }, [formData.pickupDate, formData.dropoffDate, car.price]);

  const totalPrice = calculatePrice();
  const serviceFee = 0; // 0% commission
  const finalTotal = totalPrice + serviceFee;

  const getBookingUrl = useCallback(() => {
    const params = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    return `/booking/${car.id}?${params.toString()}`;
  }, [formData, car.id]);

  return (
    <section className="py-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/cars" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Cars
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Image Gallery */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-white shadow-2xl">
              <img
                src={car.images[currentImageIndex]}
                alt={car.name}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
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

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {car.images.length}
              </div>

              {/* Favorite Button */}
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-4 right-4 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-700'}`} />
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {car.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-16 rounded-xl overflow-hidden border-2 transition-colors ${
                    index === currentImageIndex ? 'border-primary' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt={`${car.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Integrated Booking Form - Sticky Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-lg sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Book This Car</h3>
              
              {/* Car Summary */}
              <div className="flex gap-4 mb-6 pb-6 border-b">
                <img
                  src={car.images[0]}
                  alt={car.name}
                  className="w-20 h-16 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-sm">{car.name}</h4>
                  <p className="text-xs text-gray-600">{car.category}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-xs font-medium">{car.rating}</span>
                    <span className="text-xs text-gray-500">({car.reviews})</span>
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label htmlFor="pickupDate" className="text-xs font-medium">Pickup Date</Label>
                    <Input
                      id="pickupDate"
                      type="date"
                      value={formData.pickupDate}
                      onChange={(e) => handleInputChange('pickupDate', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="pickupTime" className="text-xs font-medium">Time</Label>
                    <Input
                      id="pickupTime"
                      type="time"
                      value={formData.pickupTime}
                      onChange={(e) => handleInputChange('pickupTime', e.target.value)}
                      className="text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label htmlFor="dropoffDate" className="text-xs font-medium">Drop-off Date</Label>
                    <Input
                      id="dropoffDate"
                      type="date"
                      value={formData.dropoffDate}
                      onChange={(e) => handleInputChange('dropoffDate', e.target.value)}
                      min={formData.pickupDate || new Date().toISOString().split('T')[0]}
                      className="text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="dropoffTime" className="text-xs font-medium">Time</Label>
                    <Input
                      id="dropoffTime"
                      type="time"
                      value={formData.dropoffTime}
                      onChange={(e) => handleInputChange('dropoffTime', e.target.value)}
                      className="text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1">
                    <Label className="text-xs font-medium">Pickup Location</Label>
                    <Select value={formData.pickupLocation} onValueChange={(value) => handleInputChange('pickupLocation', value)}>
                      <SelectTrigger className="text-xs">
                        <SelectValue placeholder="Select pickup location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dubai-mall">Dubai Mall</SelectItem>
                        <SelectItem value="dubai-marina">Dubai Marina</SelectItem>
                        <SelectItem value="jbr">JBR Beach</SelectItem>
                        <SelectItem value="business-bay">Business Bay</SelectItem>
                        <SelectItem value="dubai-airport">Dubai Airport</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-1">
                    <Label className="text-xs font-medium">Drop-off Location</Label>
                    <Select value={formData.dropoffLocation} onValueChange={(value) => handleInputChange('dropoffLocation', value)}>
                      <SelectTrigger className="text-xs">
                        <SelectValue placeholder="Same as pickup" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="same">Same as pickup</SelectItem>
                        <SelectItem value="dubai-mall">Dubai Mall</SelectItem>
                        <SelectItem value="dubai-marina">Dubai Marina</SelectItem>
                        <SelectItem value="jbr">JBR Beach</SelectItem>
                        <SelectItem value="business-bay">Business Bay</SelectItem>
                        <SelectItem value="dubai-airport">Dubai Airport</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Price Summary */}
              {totalPrice > 0 && (
                <div className="space-y-3 pt-4 mt-6 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      Rental ({Math.ceil((new Date(formData.dropoffDate).getTime() - new Date(formData.pickupDate).getTime()) / (1000 * 3600 * 24))} days)
                    </span>
                    <span>AED {totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Service Fee</span>
                    <span className="text-green-600">AED 0 (0%)</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-3 border-t">
                    <span>Total</span>
                    <span>AED {finalTotal}</span>
                  </div>
                </div>
              )}

              {/* Book Now Button */}
              <div className="mt-6">
                <Link href={getBookingUrl()}>
                  <Button 
                    size="lg" 
                    className="w-full gradient-primary text-white hover:shadow-xl transition-all py-6"
                    disabled={!formData.pickupDate || !formData.dropoffDate || !formData.pickupLocation}
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Continue Booking
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="mt-4 bg-green-50 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span className="font-medium text-green-800 text-sm">0% Commission</span>
                </div>
                <p className="text-xs text-green-700">
                  No hidden fees. Free cancellation up to 24 hours before pickup.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Car Information */}
        <div className="mt-12 space-y-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {car.badges.map((badge) => (
                  <Badge key={badge} className="gradient-primary text-white border-0">
                    {badge}
                  </Badge>
                ))}
                {car.discount > 0 && (
                  <Badge className="bg-red-100 text-red-800 border-0">
                    -{car.discount}% OFF
                  </Badge>
                )}
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{car.name}</h1>
              <p className="text-xl text-orange-500 font-medium mb-4">{car.category}</p>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-bold text-lg">{car.rating}</span>
                </div>
                <span className="text-gray-500">({car.reviews} reviews)</span>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">{car.location}</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  {car.originalPrice > car.price && (
                    <span className="text-2xl text-gray-500 line-through">
                      AED {car.originalPrice}
                    </span>
                  )}
                  <span className="text-4xl font-bold text-gray-900">
                    AED {car.price}
                  </span>
                  <span className="text-gray-600 text-lg">per day</span>
                </div>
                <p className="text-sm text-gray-500">
                  Weekly: AED {car.price * 6} • Monthly: AED {car.price * 25}
                </p>
              </div>
            </div>
          </div>

            {/* Owner Information */}
          <div className="bg-white rounded-3xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Car Owner</h3>
              <div className="flex items-center gap-4">
                <img
                  src={car.owner.avatar}
                  alt={car.owner.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-gray-900">{car.owner.name}</h4>
                    {car.owner.verified && (
                      <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                        <Shield className="h-3 w-3" />
                        Verified
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1">{car.owner.rating}</span>
                      <span className="ml-1">({car.owner.reviews} reviews)</span>
                    </div>
                    <span>•</span>
                    <span>Joined {car.owner.joinDate}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Clock className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600">
                      Responds within {car.owner.responseTime}
                    </span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    {car.owner.languages.map((lang) => (
                      <span key={lang} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </Button>
                </div>
              </div>
            </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          {/* Features & Specifications */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Car</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {car.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Vehicle Specifications</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Make & Model</span>
                      <span className="font-medium">{car.specifications.make} {car.specifications.model}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Year</span>
                      <span className="font-medium">{car.specifications.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Color</span>
                      <span className="font-medium">{car.specifications.color}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Engine</span>
                      <span className="font-medium">{car.specifications.engine}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mileage</span>
                      <span className="font-medium">{car.specifications.mileage}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Features & Amenities</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">{car.features.seats}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Settings className="h-4 w-4 text-primary" />
                      <span className="text-sm">{car.features.transmission}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Fuel className="h-4 w-4 text-primary" />
                      <span className="text-sm">{car.features.fuel}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="h-4 w-4 text-primary" />
                      <span className="text-sm">{car.features.doors}</span>
                    </div>
                    {car.features.ac && (
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Air Conditioning</span>
                      </div>
                    )}
                    {car.features.gps && (
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">GPS Navigation</span>
                      </div>
                    )}
                    {car.features.bluetooth && (
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Bluetooth</span>
                      </div>
                    )}
                    {car.features.sunroof && (
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Sunroof</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Reviews ({reviews.length})</h2>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-bold text-lg">{car.rating}</span>
                  <span className="text-gray-500">({car.reviews} total)</span>
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
                          <h4 className="font-medium text-gray-900">{review.user}</h4>
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

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Availability Calendar Placeholder */}
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Availability</h3>
              <div className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Calendar View</p>
                  <p className="text-sm text-gray-400">Coming Soon</p>
                </div>
              </div>
            </div>

            {/* Safety & Insurance */}
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Safety & Insurance</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Comprehensive Insurance</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-sm">24/7 Roadside Assistance</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Verified Owner</span>
                </div>
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-primary/10 rounded-3xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Our support team is available 24/7 to assist you
              </p>
              <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary/5">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}