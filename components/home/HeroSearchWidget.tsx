'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  MapPin,
  Calendar,
  Clock,
  Search,
} from 'lucide-react';

export function HeroSearchWidget() {
  const router = useRouter();
  const [vehicleType, setVehicleType] = useState('all');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('10:00');
  const [returnDate, setReturnDate] = useState('');
  const [returnTime, setReturnTime] = useState('10:00');

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    params.set('vehicleType', vehicleType);
    if (pickupLocation) params.set('pickupLocation', pickupLocation);
    if (dropoffLocation) params.set('dropoffLocation', dropoffLocation);
    if (pickupDate) params.set('pickupDate', pickupDate);
    if (pickupTime) params.set('pickupTime', pickupTime);
    if (returnDate) params.set('returnDate', returnDate);
    if (returnTime) params.set('returnTime', returnTime);

    router.push(`/cars?${params.toString()}`);
  }, [vehicleType, pickupLocation, dropoffLocation, pickupDate, pickupTime, returnDate, returnTime, router]);

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="relative z-10 bg-white rounded-3xl p-8 shadow-xl mx-auto mt-12 lg:mt-16 max-w-4xl w-full">
      <Tabs value={vehicleType} onValueChange={setVehicleType} className="mb-6">
        <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-gray-100 rounded-xl">
          <TabsTrigger
            value="all"
            className="data-[state=active]:bg-destructive data-[state=active]:text-white data-[state=active]:shadow-sm rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all"
          >
            All cars
          </TabsTrigger>
          <TabsTrigger
            value="new"
            className="data-[state=active]:bg-destructive data-[state=active]:text-white data-[state=active]:shadow-sm rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all"
          >
            New cars
          </TabsTrigger>
          <TabsTrigger
            value="used"
            className="data-[state=active]:bg-destructive data-[state=active]:text-white data-[state=active]:shadow-sm rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all"
          >
            Used cars
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <form onSubmit={handleSearch} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label htmlFor="pickupLocation" className="text-gray-700 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-destructive" />
              Pick Up Location
            </Label>
            <Input
              id="pickupLocation"
              type="text"
              placeholder="Dubai Mall, UAE"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="focus-visible:ring-destructive"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dropoffLocation" className="text-gray-700 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-destructive" />
              Drop Off Location
            </Label>
            <Input
              id="dropoffLocation"
              type="text"
              placeholder="Downtown, UAE"
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
              className="focus-visible:ring-destructive"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pickupDateTime" className="text-gray-700 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-destructive" />
              Pick Up Date & Time
            </Label>
            <div className="flex gap-2">
              <Input
                id="pickupDate"
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                min={today}
                className="w-full focus-visible:ring-destructive" // Dəyişiklik burada
                required
              />
              <Input
                id="pickupTime"
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full focus-visible:ring-destructive" // Dəyişiklik burada
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="returnDateTime" className="text-gray-700 flex items-center gap-2">
              <Clock className="h-4 w-4 text-destructive" />
              Return Date & Time
            </Label>
            <div className="flex gap-2">
              <Input
                id="returnDate"
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                min={pickupDate || today}
                className="w-full focus-visible:ring-destructive" // Dəyişiklik burada
                required
              />
              <Input
                id="returnTime"
                type="time"
                value={returnTime}
                onChange={(e) => setReturnTime(e.target.value)}
                className="w-full focus-visible:ring-destructive" // Dəyişiklik burada
              />
            </div>
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-destructive text-white hover:bg-red-600 transition-all py-6 text-lg focus-visible:ring-destructive"
        >
          <Search className="h-5 w-5 mr-2" />
          Find a Vehicle
        </Button>
      </form>
    </div>
  );
}
