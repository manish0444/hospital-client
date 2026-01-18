import { serviceData } from './serviceData';
import ServiceDetailClient from './ServiceDetailClient';

// Define all possible service IDs
const allServiceIds = [
  'physiotherapy',
  'conventional-physio',
  'advanced-physio',
  'electrotherapy',
  'orthopedic-rehab',
  'neurological-rehab',
];

export async function generateStaticParams() {
  return allServiceIds.map(id => ({
    id: id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { id } = await params;
  
  // Find the service or fallback to physiotherapy
  const service = serviceData[id as keyof typeof serviceData] || serviceData.physiotherapy;

  return <ServiceDetailClient service={service} serviceId={id} />;
}