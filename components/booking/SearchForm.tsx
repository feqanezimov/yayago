'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  MapPin,
  Calendar,
  Clock,
  Search,
  Car
} from 'lucide-react';

interface SearchFormProps {
  onClose?: () => void;
}

export function SearchForm({ onClose }: SearchFormProps) {
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    pickupDate: '',
    dropoffDate: '',
    pickupTime: '10:00',
    dropoffTime: '10:00'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search form submitted:', formData);
    onClose?.();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Location Fields */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="pickup" className="text-white flex items-center gap-2">
            <MapPin className="h-4 w-4 text-destructive" />
            Pickup Location
          </Label>
          <Input
            id="pickup"
            type="text"
            placeholder="Dubai Airport, Dubai Mall..."
            value={formData.pickup}
            onChange={(e) => setFormData({...formData, pickup: e.target.value})}
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dropoff" className="text-white flex items-center gap-2">
            <MapPin className="h-4 w-4 text-destructive" />
            Drop-off Location
          </Label>
          <Input
            id="dropoff"
            type="text"
            placeholder="Same as pickup"
            value={formData.dropoff}
            onChange={(e) => setFormData({...formData, dropoff: e.target.value})}
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Date and Time Fields */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-2">
            <Label htmlFor="pickupDate" className="text-white flex items-center gap-2">
              <Calendar className="h-4 w-4 text-destructive" />
              Pickup Date
            </Label>
            <Input
              id="pickupDate"
              type="date"
              value={formData.pickupDate}
              onChange={(e) => setFormData({...formData, pickupDate: e.target.value})}
              className="bg-white/10 border-white/20 text-white"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pickupTime" className="text-white flex items-center gap-2">
              <Clock className="h-4 w-4 text-destructive" />
              Time
            </Label>
            <Input
              id="pickupTime"
              type="time"
              value={formData.pickupTime}
              onChange={(e) => setFormData({...formData, pickupTime: e.target.value})}
              className="bg-white/10 border-white/20 text-white"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-2">
            <Label htmlFor="dropoffDate" className="text-white flex items-center gap-2">
              <Calendar className="h-4 w-4 text-destructive" />
              Drop-off Date
            </Label>
            <Input
              id="dropoffDate"
              type="date"
              value={formData.dropoffDate}
              onChange={(e) => setFormData({...formData, dropoffDate: e.target.value})}
              className="bg-white/10 border-white/20 text-white"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dropoffTime" className="text-white flex items-center gap-2">
              <Clock className="h-4 w-4 text-destructive" />
              Time
            </Label>
            <Input
              id="dropoffTime"
              type="time"
              value={formData.dropoffTime}
              onChange={(e) => setFormData({...formData, dropoffTime: e.target.value})}
              className="bg-white/10 border-white/20 text-white"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full gradient-primary text-white hover:shadow-xl transition-all py-6 text-lg"
      >
        <Search className="h-5 w-5 mr-2" />
        Search Available Cars
      </Button>

      {/* Quick Options */}
      <div className="flex flex-wrap gap-2 justify-center">
        {['Dubai Airport', 'Dubai Mall', 'JBR Beach', 'Business Bay'].map((location) => (
          <Button
            key={location}
            type="button"
            variant="outline"
            size="sm"
            className="border-white/30 text-white hover:bg-white/10"
            onClick={() => setFormData({...formData, pickup: location})}
          >
            {location}
          </Button>
        ))}
      </div>
    </form>
  );
}
