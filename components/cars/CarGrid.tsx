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
  Heart,
  Users,
  Fuel,
  Settings,
  ArrowRight,
  Grid3X3,
  List
} from 'lucide-react';

const cars = [
  {
    id: 1,
    name: 'BMW 7 Series',
    category: 'Luxury',
    price: 299,
    originalPrice: 349,
    rating: 4.9,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1627936354732-ffbe552799d8?q=80&w=1524&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: { seats: '5 Seats', transmission: 'Automatic', fuel: 'Petrol' },
    badges: ['Most Popular', 'Premium'],
    discount: 15
  },
  {
    id: 2,
    name: 'Mercedes S-Class',
    category: 'Executive',
    price: 399,
    originalPrice: 449,
    rating: 4.8,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1610099610040-ab19f3a5ec35?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: { seats: '5 Seats', transmission: 'Automatic', fuel: 'Petrol' },
    badges: ['Luxury'],
    discount: 11
  },
  {
    id: 3,
    name: 'Toyota Camry',
    category: 'Economy',
    price: 89,
    originalPrice: 99,
    rating: 4.7,
    reviews: 412,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: { seats: '5 Seats', transmission: 'Automatic', fuel: 'Petrol' },
    badges: ['Best Value'],
    discount: 10
  },
  {
    id: 4,
    name: 'Range Rover Sport',
    category: 'SUV',
    price: 449,
    originalPrice: 499,
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1604054094723-3a949e4a8993?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: { seats: '7 Seats', transmission: 'Automatic', fuel: 'Petrol' },
    badges: ['Adventure Ready'],
    discount: 10
  },
  {
    id: 5,
    name: 'Audi A8',
    category: 'Luxury',
    price: 329,
    originalPrice: 379,
    rating: 4.8,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1555652736-e92021d28a10?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: { seats: '5 Seats', transmission: 'Automatic', fuel: 'Petrol' },
    badges: ['Premium'],
    discount: 13
  },
  {
    id: 6,
    name: 'Porsche 911',
    category: 'Sports',
    price: 799,
    originalPrice: 899,
    rating: 4.9,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: { seats: '2 Seats', transmission: 'Automatic', fuel: 'Petrol' },
    badges: ['Sports Car'],
    discount: 11
  }
];

interface CarGridProps {
  filters: any;
}

export function CarGrid({ filters }: CarGridProps) {
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredCars = cars.filter(car => {
    if (filters.category && car.category !== filters.category) return false;
    if (car.price < filters.priceRange[0] || car.price > filters.priceRange[1]) return false;
    if (filters.transmission && car.features.transmission !== filters.transmission) return false;
    if (filters.fuelType && car.features.fuel !== filters.fuelType) return false;
    if (filters.seats && car.features.seats !== filters.seats) return false;
    return true;
  });

  const sortedCars = [...filteredCars].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return b.reviews - a.reviews; // popular
    }
  });

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm">
        <div>
          <h3 className="font-semibold">
            {filteredCars.length} cars available
          </h3>
          <p className="text-sm text-gray-600">
            Showing results for your search
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
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Cars Grid/List */}
      <div className={
        viewMode === 'grid' 
          ? 'grid md:grid-cols-2 xl:grid-cols-3 gap-6'
          : 'space-y-4'
      }>
        {sortedCars.map((car, index) => (
          <div
            key={car.id}
            className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group hover-scale ${
              viewMode === 'list' ? 'flex gap-6 p-6' : 'p-6'
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Car Image */}
            <div className={`relative overflow-hidden rounded-2xl ${
              viewMode === 'list' ? 'w-64 h-48' : 'h-48 mb-6'
            }`}>
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Discount Badge */}
              {car.discount && (
                <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  -{car.discount}%
                </div>
              )}
              
              {/* Wishlist Button */}
              <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors">
                <Heart className="h-4 w-4 text-red-500 hover:text-red-600 transition-colors" />
              </button>
            </div>

            {/* Car Details */}
            <div className={`space-y-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
              {/* Badges */}
              {car.badges.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {car.badges.map((badge) => (
                    <Badge
                      key={badge}
                      className="gradient-primary text-white border-0 text-xs"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Car Name and Category */}
              <div>
                <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
                <p className="text-orange-500 font-medium">{car.category}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 font-medium">{car.rating}</span>
                </div>
                <span className="text-gray-500 text-sm">({car.reviews} reviews)</span>
              </div>

              {/* Features */}
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{car.features.seats}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Settings className="h-4 w-4" />
                  <span>{car.features.transmission}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Fuel className="h-4 w-4" />
                  <span>{car.features.fuel}</span>
                </div>
              </div>

              {/* Price and Book Button */}
              <div className={`flex items-center justify-between pt-4 border-t ${
                viewMode === 'list' ? 'mt-auto' : ''
              }`}>
                <div>
                  {car.originalPrice > car.price && (
                    <span className="text-sm text-gray-500 line-through mr-2">
                      AED {car.originalPrice}
                    </span>
                  )}
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-gray-900">
                      AED {car.price}
                    </span>
                    <span className="text-gray-500 text-sm ml-1">/day</span>
                  </div>
                </div>
                <Link href={`/cars/${car.id}`}>
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
      {sortedCars.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">No cars found matching your criteria</div>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Clear Filters
          </Button>
        </div>
      ) : (
        <div className="text-center pt-8">
          <Button size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-primary/5">
            Load More Cars
          </Button>
        </div>
      )}
    </div>
  );
}