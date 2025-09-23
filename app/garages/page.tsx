'use client';

import { useState } from 'react';
import { GarageGrid } from '@/components/garages/GarageGrid';
import { FilterSidebar } from '@/components/garages/FilterSidebar';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal, Wrench, Car } from 'lucide-react';

export default function GaragesPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    serviceType: '',
    type: '',
    location: '',
    rating: '',
    availability: ''
  });

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Find <span className="text-gradient">Auto Services</span>
              </h1>
              <p className="text-gray-600 mt-2">
                Connect with verified garages and mobile auto masters in Dubai
              </p>
              
              {/* Service Types */}
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-2 bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm">
                  <Wrench className="h-4 w-4" />
                  Service Centers
                </div>
                <div className="flex items-center gap-2 bg-green-50 text-green-800 px-3 py-1 rounded-full text-sm">
                  <Car className="h-4 w-4" />
                  Mobile Masters
                </div>
              </div>
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

          {/* Garages Grid */}
          <div className="flex-1">
            <GarageGrid filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
}