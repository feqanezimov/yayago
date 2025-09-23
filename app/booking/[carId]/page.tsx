import { Suspense } from 'react';
import { BookingForm } from '@/components/booking/BookingForm';
import { Footer } from '@/components/layout/Footer';

export async function generateStaticParams() {
  // Return an array of car IDs that should be pre-generated
  // You can fetch this from your data source or hardcode them
  const carIds = ['car-1', 'car-2', 'car-3']; // Replace with your actual car IDs
  
  return carIds.map((carId) => ({
    carId: carId,
  }));
}

function BookingPageContent({ carId, searchParams }: { carId: string; searchParams: any }) {
  const initialFormData = {
    pickupDate: searchParams.pickupDate || '',
    dropoffDate: searchParams.dropoffDate || '',
    pickupTime: searchParams.pickupTime || '10:00',
    dropoffTime: searchParams.dropoffTime || '10:00',
    pickupLocation: searchParams.pickupLocation || '',
    dropoffLocation: searchParams.dropoffLocation || ''
  };

  return <BookingForm carId={carId} initialFormData={initialFormData} />;
}

export default function BookingPage({ 
  params, 
  searchParams 
}: { 
  params: { carId: string }; 
  searchParams: { [key: string]: string | string[] | undefined } 
}) {
  return (
    <div className="min-h-screen pt-16">
      <Suspense fallback={<div>Loading...</div>}>
        <BookingPageContent carId={params.carId} searchParams={searchParams} />
      </Suspense>
      <Footer />
    </div>
  );
}