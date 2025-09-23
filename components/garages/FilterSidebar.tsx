'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { X } from 'lucide-react';

interface FilterSidebarProps {
  filters: any;
  onChange: (filters: any) => void;
  onClose?: () => void;
}

const serviceTypes = [
  'Mechanical',
  'Electrical', 
  'Detailing',
  'Body Work',
  'Maintenance',
  'Wrapping',
  'Polishing',
  'AC Service',
  'Engine Diagnostics',
  'Brake Service'
];

const providerTypes = ['garage', 'freelancer'];
const locations = ['Al Quoz', 'Dubai Marina', 'Business Bay', 'JBR', 'Downtown Dubai', 'Sharjah'];
const ratings = ['4.5+', '4.0+', '3.5+'];
const availability = ['24/7', 'Emergency Service', 'Mobile Service', 'Weekend Available'];

export function FilterSidebar({ filters, onChange, onClose }: FilterSidebarProps) {
  const updateFilter = (key: string, value: any) => {
    onChange({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    onChange({
      serviceType: '',
      type: '',
      location: '',
      rating: '',
      availability: ''
    });
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Service Filters</h3>
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
        {/* Service Type */}
        <div>
          <Label className="text-sm font-medium mb-4 block">Service Type</Label>
          <div className="space-y-3 max-h-48 overflow-y-auto">
            {serviceTypes.map((service) => (
              <div key={service} className="flex items-center space-x-2">
                <Checkbox
                  id={service}
                  checked={filters.serviceType === service}
                  onCheckedChange={(checked) =>
                    updateFilter('serviceType', checked ? service : '')
                  }
                />
                <Label
                  htmlFor={service}
                  className="text-sm font-normal cursor-pointer"
                >
                  {service}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Provider Type */}
        <div>
          <Label className="text-sm font-medium mb-4 block">Provider Type</Label>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="garage"
                checked={filters.type === 'garage'}
                onCheckedChange={(checked) =>
                  updateFilter('type', checked ? 'garage' : '')
                }
              />
              <Label htmlFor="garage" className="text-sm font-normal cursor-pointer">
                Service Centers
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="freelancer"
                checked={filters.type === 'freelancer'}
                onCheckedChange={(checked) =>
                  updateFilter('type', checked ? 'freelancer' : '')
                }
              />
              <Label htmlFor="freelancer" className="text-sm font-normal cursor-pointer">
                Mobile Masters
              </Label>
            </div>
          </div>
        </div>

        {/* Location */}
        <div>
          <Label className="text-sm font-medium mb-4 block">Location</Label>
          <div className="space-y-3">
            {locations.map((location) => (
              <div key={location} className="flex items-center space-x-2">
                <Checkbox
                  id={location}
                  checked={filters.location === location}
                  onCheckedChange={(checked) =>
                    updateFilter('location', checked ? location : '')
                  }
                />
                <Label
                  htmlFor={location}
                  className="text-sm font-normal cursor-pointer"
                >
                  {location}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div>
          <Label className="text-sm font-medium mb-4 block">Minimum Rating</Label>
          <div className="space-y-3">
            {ratings.map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <Checkbox
                  id={rating}
                  checked={filters.rating === rating}
                  onCheckedChange={(checked) =>
                    updateFilter('rating', checked ? rating : '')
                  }
                />
                <Label
                  htmlFor={rating}
                  className="text-sm font-normal cursor-pointer flex items-center"
                >
                  ⭐ {rating}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div>
          <Label className="text-sm font-medium mb-4 block">Availability</Label>
          <div className="space-y-3">
            {availability.map((avail) => (
              <div key={avail} className="flex items-center space-x-2">
                <Checkbox
                  id={avail}
                  checked={filters.availability === avail}
                  onCheckedChange={(checked) =>
                    updateFilter('availability', checked ? avail : '')
                  }
                />
                <Label
                  htmlFor={avail}
                  className="text-sm font-normal cursor-pointer"
                >
                  {avail}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}