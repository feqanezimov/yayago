'use client';

import { useState } from 'react';
import { CarGrid } from '@/components/cars/CarGrid';
import { FilterSidebar } from '@/components/cars/FilterSidebar';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal } from 'lucide-react';

export default function CarsPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 1000],
    transmission: '',
    fuelType: '',
    seats: ''
  });

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Browse <span className="text-gradient">Premium Cars</span>
              </h1>
              <p className="text-gray-600 mt-2">Choose from our extensive fleet of luxury vehicles</p>
            </div>
            <Button
              variant="outline"
              className="lg:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-80 shrink-0`}>
            <FilterSidebar
              filters={filters}
              onChange={setFilters}
              onClose={() => setShowFilters(false)}
            />
          </div>

          {/* Cars Grid */}
          <div className="flex-1">
            <CarGrid filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
}