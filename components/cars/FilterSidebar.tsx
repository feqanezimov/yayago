'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { X } from 'lucide-react';

interface FilterSidebarProps {
  filters: any;
  onChange: (filters: any) => void;
  onClose?: () => void;
}

const categories = ['Economy', 'Luxury', 'Sports', 'SUV', 'Executive'];
const transmissions = ['Automatic', 'Manual'];
const fuelTypes = ['Petrol', 'Diesel', 'Electric', 'Hybrid'];
const seatOptions = ['2 Seats', '4 Seats', '5 Seats', '7+ Seats'];

export function FilterSidebar({ filters, onChange, onClose }: FilterSidebarProps) {
  const updateFilter = (key: string, value: any) => {
    onChange({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    onChange({
      category: '',
      priceRange: [0, 1000],
      transmission: '',
      fuelType: '',
      seats: ''
    });
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Filters</h3>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear All
          </Button>
          {onClose && (
            <Button variant="ghost" size="sm" onClick={onClose} className="lg:hidden">
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      <div className="space-y-8">
        {/* Price Range */}
        <div>
          <Label className="text-sm font-medium mb-4 block">
            Price Range (AED per day)
          </Label>
          <div className="px-2">
            <Slider
              value={filters.priceRange}
              onValueChange={(value) => updateFilter('priceRange', value)}
              max={1000}
              step={10}
              className="mb-4"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>AED {filters.priceRange[0]}</span>
              <span>AED {filters.priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Category */}
        <div>
          <Label className="text-sm font-medium mb-4 block">Category</Label>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={category}
                  checked={filters.category === category}
                  onCheckedChange={(checked) =>
                    updateFilter('category', checked ? category : '')
                  }
                />
                <Label
                  htmlFor={category}
                  className="text-sm font-normal cursor-pointer"
                >
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Transmission */}
        <div>
          <Label className="text-sm font-medium mb-4 block">Transmission</Label>
          <div className="space-y-3">
            {transmissions.map((transmission) => (
              <div key={transmission} className="flex items-center space-x-2">
                <Checkbox
                  id={transmission}
                  checked={filters.transmission === transmission}
                  onCheckedChange={(checked) =>
                    updateFilter('transmission', checked ? transmission : '')
                  }
                />
                <Label
                  htmlFor={transmission}
                  className="text-sm font-normal cursor-pointer"
                >
                  {transmission}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Fuel Type */}
        <div>
          <Label className="text-sm font-medium mb-4 block">Fuel Type</Label>
          <div className="space-y-3">
            {fuelTypes.map((fuelType) => (
              <div key={fuelType} className="flex items-center space-x-2">
                <Checkbox
                  id={fuelType}
                  checked={filters.fuelType === fuelType}
                  onCheckedChange={(checked) =>
                    updateFilter('fuelType', checked ? fuelType : '')
                  }
                />
                <Label
                  htmlFor={fuelType}
                  className="text-sm font-normal cursor-pointer"
                >
                  {fuelType}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Seats */}
        <div>
          <Label className="text-sm font-medium mb-4 block">Seating</Label>
          <div className="space-y-3">
            {seatOptions.map((seats) => (
              <div key={seats} className="flex items-center space-x-2">
                <Checkbox
                  id={seats}
                  checked={filters.seats === seats}
                  onCheckedChange={(checked) =>
                    updateFilter('seats', checked ? seats : '')
                  }
                />
                <Label
                  htmlFor={seats}
                  className="text-sm font-normal cursor-pointer"
                >
                  {seats}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}