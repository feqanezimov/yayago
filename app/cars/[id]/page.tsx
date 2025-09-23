import { CarDetails } from '@/components/cars/CarDetails';
import { Footer } from '@/components/layout/Footer';
import { carData } from '@/lib/car-data';

export async function generateStaticParams() {
  return Object.keys(carData).map((id) => ({
    id: id,
  }));
}

export default function CarDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen pt-16">
      <CarDetails carId={params.id} />
      <Footer />
    </div>
  );
}