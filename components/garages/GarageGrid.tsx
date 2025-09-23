'use client';

import { useState } from 'react';
import Link from 'next/link';
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
  Star,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  Grid3X3,
  List,
  Shield,
  Wrench,
  Car
} from 'lucide-react';

const garages = [
  {
    id: 1,
    name: 'Al Madina Auto Center',
    type: 'garage',
    rating: 4.8,
    reviews: 156,
    location: 'Al Quoz, Dubai',
    specialties: ['BMW Service', 'Mercedes Service', 'Engine Diagnostics'],
    image: 'https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    badges: ['Verified Partner', 'Luxury Specialist'],
    priceRange: 'AED 120 - 300',
    availability: '8 AM - 8 PM'
  },
  {
    id: 2,
    name: 'CarCare Pro Detailing',
    type: 'garage',
    rating: 4.9,
    reviews: 234,
    location: 'Dubai Marina, Dubai',
    specialties: ['Ceramic Coating', 'Paint Correction', 'Interior Detailing'],
    image: 'https://images.pexels.com/photos/6870310/pexels-photo-6870310.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    badges: ['Premium Partner', 'Detailing Expert'],
    priceRange: 'AED 180 - 800',
    availability: '9 AM - 6 PM'
  },
  {
    id: 3,
    name: 'Dmitri Auto Master',
    type: 'freelancer',
    rating: 4.7,
    reviews: 89,
    location: 'Business Bay, Dubai',
    specialties: ['Mobile Repair', 'Electrical Systems', 'Engine Repair'],
    image: 'https://images.pexels.com/photos/4070850/pexels-photo-4070850.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    badges: ['Mobile Expert', '24/7 Available'],
    priceRange: 'AED 180 - 250',
    availability: '24/7 Emergency'
  },
  {
    id: 4,
    name: 'Dubai Wrap Studio',
    type: 'garage',
    rating: 4.8,
    reviews: 167,
    location: 'Al Quoz Industrial, Dubai',
    specialties: ['Vehicle Wrapping', 'Paint Protection Film', 'Window Tinting'],
    image: 'https://images.pexels.com/photos/3752204/pexels-photo-3752204.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    badges: ['Wrap Expert', '3M Certified'],
    priceRange: 'AED 400 - 2500',
    availability: '9 AM - 7 PM'
  },
  {
    id: 5,
    name: 'Premium Body Shop',
    type: 'garage',
    rating: 4.6,
    reviews: 123,
    location: 'Sharjah Industrial, UAE',
    specialties: ['Body Repair', 'Paint Jobs', 'Collision Repair'],
    image: 'https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    badges: ['Insurance Approved', 'Body Expert'],
    priceRange: 'AED 300 - 1500',
    availability: '8 AM - 6 PM'
  },
  {
    id: 6,
    name: 'Elena Mobile Detailing',
    type: 'freelancer',
    rating: 4.9,
    reviews: 78,
    location: 'Dubai Marina, Dubai',
    specialties: ['Mobile Detailing', 'Interior Cleaning', 'Ceramic Coating'],
    image: 'https://images.pexels.com/photos/6870309/pexels-photo-6870309.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    badges: ['Mobile Service', 'Female Owned'],
    priceRange: 'AED 150 - 500',
    availability: 'Mon-Fri 9-6'
  }
];

interface GarageGridProps {
  filters: any;
}

export function GarageGrid({ filters }: GarageGridProps) {
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredGarages = garages.filter(garage => {
    if (filters.serviceType && !garage.specialties.some(s => 
      s.toLowerCase().includes(filters.serviceType.toLowerCase())
    )) return false;
    if (filters.type && garage.type !== filters.type) return false;
    if (filters.location && !garage.location.includes(filters.location)) return false;
    return true;
  });

  const sortedGarages = [...filteredGarages].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'reviews':
        return b.reviews - a.reviews;
      default:
        return b.reviews - a.reviews; // popular
    }
  });

  const getTypeIcon = (type: string) => {
    return type === 'garage' ? <Wrench className="h-4 w-4" /> : <Car className="h-4 w-4" />;
  };

  const getTypeBadge = (type: string) => {
    return type === 'garage' ? 
      <Badge variant="outline" className="border-blue-500 text-blue-600">Service Center</Badge> :
      <Badge variant="outline" className="border-green-500 text-green-600">Mobile Master</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm">
        <div>
          <h3 className="font-semibold">
            {filteredGarages.length} service providers available
          </h3>
          <p className="text-sm text-gray-600">
            Verified garages and auto masters in Dubai
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* View Mode Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className={viewMode === 'grid' ? 'gradient-primary text-white' : ''}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
              className={viewMode === 'list' ? 'gradient-primary text-white' : ''}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>

          {/* Sort Dropdown */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="reviews">Most Reviews</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Garages Grid/List */}
      <div className={
        viewMode === 'grid' 
          ? 'grid md:grid-cols-2 xl:grid-cols-3 gap-6'
          : 'space-y-4'
      }>
        {sortedGarages.map((garage, index) => (
          <div
            key={garage.id}
            className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group hover-scale ${
              viewMode === 'list' ? 'flex gap-6 p-6' : 'p-6'
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Garage Image */}
            <div className={`relative overflow-hidden rounded-2xl ${
              viewMode === 'list' ? 'w-64 h-48' : 'h-48 mb-6'
            }`}>
              <img
                src={garage.image}
                alt={garage.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Type Badge */}
              <div className="absolute top-4 left-4">
                {getTypeBadge(garage.type)}
              </div>
              
              {/* Verified Badge */}
              <div className="absolute top-4 right-4 p-2 bg-white/90 rounded-full shadow-lg">
                <Shield className="h-4 w-4 text-green-500" />
              </div>
            </div>

            {/* Garage Details */}
            <div className={`space-y-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
              {/* Badges */}
              {garage.badges.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {garage.badges.slice(0, 2).map((badge) => (
                    <Badge
                      key={badge}
                      className="gradient-primary text-white border-0 text-xs"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Name and Location */}
              <div>
                <h3 className="text-xl font-bold text-gray-900">{garage.name}</h3>
                <div className="flex items-center gap-2 text-gray-600 mt-1">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{garage.location}</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 font-medium">{garage.rating}</span>
                </div>
                <span className="text-gray-500 text-sm">({garage.reviews} reviews)</span>
              </div>

              {/* Specialties */}
              <div>
                <div className="text-sm font-medium text-gray-900 mb-2">Specialties:</div>
                <div className="flex flex-wrap gap-1">
                  {garage.specialties.slice(0, 3).map((specialty, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Availability and Price */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>{garage.availability}</span>
                </div>
                <div className="text-primary font-semibold">{garage.priceRange}</div>
              </div>

              {/* Action Buttons */}
              <div className={`flex items-center justify-between pt-4 border-t ${
                viewMode === 'list' ? 'mt-auto' : ''
              }`}>
                <Button variant="outline" size="sm">
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
                <Link href={`/garages/${garage.id}`}>
                  <Button
                    size="sm"
                    className="gradient-primary text-white hover:shadow-lg transition-shadow"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {sortedGarages.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">No service providers found matching your criteria</div>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Clear Filters
          </Button>
        </div>
      ) : (
        <div className="text-center pt-8">
          <Button size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-primary/5">
            Load More Service Providers
          </Button>
        </div>
      )}
    </div>
  );
}