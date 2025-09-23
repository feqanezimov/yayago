import { GarageDetails } from '@/components/garages/GarageDetails';
import { Footer } from '@/components/layout/Footer';
import { garageData } from '@/lib/garage-data';

export async function generateStaticParams() {
  return Object.keys(garageData).map((id) => ({
    id: id,
  }));
}

export default function GarageDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen pt-16">
      <GarageDetails garageId={params.id} />
      <Footer />
    </div>
  );
}