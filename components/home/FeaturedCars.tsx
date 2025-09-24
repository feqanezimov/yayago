'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Star,
  Users,
  Fuel,
  Settings,
  Heart,
  ArrowRight
} from 'lucide-react';

const featuredCars = [
  {
    id: 1,
    name: 'BMW 7 Series',
    category: 'Luxury',
    price: 299,
    rating: 4.9,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1627936354732-ffbe552799d8?q=80&w=1524&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: ['5 Seats', 'Automatic', 'Premium'],
    badge: 'Most Popular'
  },
  {
    id: 2,
    name: 'Mercedes S-Class',
    category: 'Executive',
    price: 399,
    rating: 4.8,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1610099610040-ab19f3a5ec35?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: ['5 Seats', 'Automatic', 'Luxury'],
    badge: 'Premium'
  },
  {
    id: 3,
    name: 'Toyota Camry',
    category: 'Economy',
    price: 89,
    rating: 4.7,
    reviews: 412,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: ['5 Seats', 'Automatic', 'Fuel Efficient'],
    badge: 'Best Value'
  },
  {
    id: 4,
    name: 'Range Rover Sport',
    category: 'SUV',
    price: 449,
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1604054094723-3a949e4a8993?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: ['7 Seats', 'AWD', 'Premium'],
    badge: 'Adventure Ready'
  }
];

export function FeaturedCars() {
  return (
    <section className="py-20 bg-white"> {/* bg-gray-50 dəyişdirildi */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-gradient">Available Cars</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse cars shared by trusted owners in Dubai. All vehicles are verified and maintained to high standards
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCars.map((car, index) => (
            <div
              key={car.id}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group hover-scale animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badge */}
              {car.badge && (
                <Badge className="mb-4 bg-destructive text-white border-0"> {/* gradient-primary dəyişdirildi */}
                  {car.badge}
                </Badge>
              )}

              {/* Car Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors">
                  <Heart className="h-4 w-4 text-red-500 hover:text-red-600 transition-colors" />
                </button>
              </div>

              {/* Car Details */}
              <div className="space-y-4">
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
                  <span className="text-gray-500">({car.reviews} reviews)</span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {car.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Price and Book Button */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">
                      AED {car.price}
                    </span>
                    <span className="text-gray-500 text-sm">/day</span>
                  </div>
                  <Link href={`/cars/${car.id}`}>
                    <Button
                      size="sm"
                      className="bg-destructive text-white hover:bg-red-600 transition-shadow" // gradient-primary dəyişdirildi
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

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-destructive text-destructive hover:bg-destructive/5 px-8 py-6 text-lg" // border-primary/20 text-primary hover:bg-primary/5 dəyişdirildi
          >
            View All Cars
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Star,
  Users,
  Fuel,
  Settings,
  Heart,
  ArrowRight
} from 'lucide-react';

const featuredCars = [
  {
    id: 1,
    name: 'BMW 7 Series',
    category: 'Luxury',
    price: 299,
    rating: 4.9,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1627936354732-ffbe552799d8?q=80&w=1524&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: ['5 Seats', 'Automatic', 'Premium'],
    badge: 'Most Popular'
  },
  {
    id: 2,
    name: 'Mercedes S-Class',
    category: 'Executive',
    price: 399,
    rating: 4.8,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1610099610040-ab19f3a5ec35?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: ['5 Seats', 'Automatic', 'Luxury'],
    badge: 'Premium'
  },
  {
    id: 3,
    name: 'Toyota Camry',
    category: 'Economy',
    price: 89,
    rating: 4.7,
    reviews: 412,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: ['5 Seats', 'Automatic', 'Fuel Efficient'],
    badge: 'Best Value'
  },
  {
    id: 4,
    name: 'Range Rover Sport',
    category: 'SUV',
    price: 449,
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1604054094723-3a949e4a8993?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: ['7 Seats', 'AWD', 'Premium'],
    badge: 'Adventure Ready'
  }
];

export function FeaturedCars() {
  return (
    <section className="py-20 bg-white"> {/* bg-gray-50 dəyişdirildi */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-gradient">Available Cars</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse cars shared by trusted owners in Dubai. All vehicles are verified and maintained to high standards
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCars.map((car, index) => (
            <div
              key={car.id}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group hover-scale animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badge */}
              {car.badge && (
                <Badge className="mb-4 bg-destructive text-white border-0"> {/* gradient-primary dəyişdirildi */}
                  {car.badge}
                </Badge>
              )}

              {/* Car Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors">
                  <Heart className="h-4 w-4 text-red-500 hover:text-red-600 transition-colors" />
                </button>
              </div>

              {/* Car Details */}
              <div className="space-y-4">
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
                  <span className="text-gray-500">({car.reviews} reviews)</span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {car.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Price and Book Button */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">
                      AED {car.price}
                    </span>
                    <span className="text-gray-500 text-sm">/day</span>
                  </div>
                  <Link href={`/cars/${car.id}`}>
                    <Button
                      size="sm"
                      className="bg-destructive text-white hover:bg-red-600 transition-shadow" // gradient-primary dəyişdirildi
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

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-destructive text-destructive hover:bg-destructive/5 px-8 py-6 text-lg" // border-primary/20 text-primary hover:bg-primary/5 dəyişdirildi
          >
            View All Cars
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
