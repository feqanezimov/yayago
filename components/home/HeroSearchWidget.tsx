'use client'; // Bu komponentin client tərəfində işlədiyini göstərir

import { useState, useCallback } from 'react'; // React hooklarını import edirik
import { useRouter } from 'next/navigation'; // Next.js router hookunu import edirik
import { Button } from '@/components/ui/button'; // UI düymə komponentini import edirik
import { Input } from '@/components/ui/input'; // UI giriş komponentini import edirik
import { Label } from '@/components/ui/label'; // UI etiket komponentini import edirik
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'; // Radix UI Tabs komponentlərini import edirik
import {
  MapPin, // Xəritə nişanı ikonu
  Calendar, // Təqvim ikonu
  Clock, // Saat ikonu
  Search, // Axtarış ikonu
} from 'lucide-react'; // Lucide ikonlarını import edirik

export function HeroSearchWidget() {
  const router = useRouter(); // Router obyektini əldə edirik
  const [vehicleType, setVehicleType] = useState('all'); // Seçilmiş avtomobil növü üçün state
  const [pickupLocation, setPickupLocation] = useState(''); // Götürmə yeri üçün state
  const [dropoffLocation, setDropoffLocation] = useState(''); // Təhvil vermə yeri üçün state
  const [pickupDate, setPickupDate] = useState(''); // Götürmə tarixi üçün state
  const [pickupTime, setPickupTime] = useState('10:00'); // Götürmə vaxtı üçün state
  const [returnDate, setReturnDate] = useState(''); // Qaytarma tarixi üçün state
  const [returnTime, setReturnTime] = useState('10:00'); // Qaytarma vaxtı üçün state

  // Axtarış düyməsinə basıldıqda işə düşən funksiya
  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault(); // Səhifənin yenilənməsinin qarşısını alırıq

    const params = new URLSearchParams(); // URL sorğu parametrləri üçün yeni obyekt yaradırıq
    params.set('vehicleType', vehicleType); // Avtomobil növünü əlavə edirik
    if (pickupLocation) params.set('pickupLocation', pickupLocation); // Götürmə yerini əlavə edirik (əgər varsa)
    if (dropoffLocation) params.set('dropoffLocation', dropoffLocation); // Təhvil vermə yerini əlavə edirik (əgər varsa)
    if (pickupDate) params.set('pickupDate', pickupDate); // Götürmə tarixini əlavə edirik (əgər varsa)
    if (pickupTime) params.set('pickupTime', pickupTime); // Götürmə vaxtını əlavə edirik (əgər varsa)
    if (returnDate) params.set('returnDate', returnDate); // Qaytarma tarixini əlavə edirik (əgər varsa)
    if (returnTime) params.set('returnTime', returnTime); // Qaytarma vaxtını əlavə edirik (əgər varsa)

    router.push(`/cars?${params.toString()}`); // '/cars' səhifəsinə sorğu parametrləri ilə yönləndiririk
  }, [vehicleType, pickupLocation, dropoffLocation, pickupDate, pickupTime, returnDate, returnTime, router]);

  const today = new Date().toISOString().split('T')[0]; // Bu günün tarixini YYYY-MM-DD formatında əldə edirik

  return (
    <div className="relative z-10 bg-white rounded-3xl p-8 shadow-xl mx-auto mt-12 lg:mt-16 max-w-4xl w-full">
      {/* Avtomobil növü seçimi üçün tablar */}
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

      {/* Axtarış forması */}
      <form onSubmit={handleSearch} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Götürmə yeri sahəsi */}
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
              className="focus-visible:ring-destructive" // Fokus zamanı qırmızı halqa
              required
            />
          </div>
          {/* Təhvil vermə yeri sahəsi */}
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
          {/* Götürmə tarixi və vaxtı sahələri */}
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
                min={today} // Keçmiş tarixləri qadağan edir
                className="focus-visible:ring-destructive"
                required
              />
              <Input
                id="pickupTime"
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="focus-visible:ring-destructive"
              />
            </div>
          </div>
          {/* Qaytarma tarixi və vaxtı sahələri */}
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
                min={pickupDate || today} // Götürmə tarixindən əvvəlki tarixləri qadağan edir
                className="focus-visible:ring-destructive"
                required
              />
              <Input
                id="returnTime"
                type="time"
                value={returnTime}
                onChange={(e) => setReturnTime(e.target.value)}
                className="focus-visible:ring-destructive"
              />
            </div>
          </div>
        </div>

        {/* Axtarış düyməsi */}
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
