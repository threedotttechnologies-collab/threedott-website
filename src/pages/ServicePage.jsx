import { useParams, Navigate } from 'react-router-dom';
import ServicePageTemplate from '../components/ServicePageTemplate';
import { servicesData } from '../constants/servicesData';

export default function ServicePage() {
  const { slug } = useParams();
  
  const data = servicesData[slug];

  if (!data) {
    return <Navigate to="/" replace />;
  }

  return <ServicePageTemplate data={data} />;
}
