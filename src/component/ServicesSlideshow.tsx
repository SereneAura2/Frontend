import { useState, useEffect } from 'react';

interface Service {
  id: number;
  name: string;
  description: string;
  popularity: number;
}

export default function ServicesSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    // Get services from environment variables
    const servicesData = import.meta.env.VITE_SERVICES ? JSON.parse(import.meta.env.VITE_SERVICES) : [
      {
        id: 1,
        name: "Residential Moving",
        description: "Full-service moving for homes and apartments",
        popularity: 5
      },
      {
        id: 2,
        name: "Office Relocation",
        description: "Professional business and office moving services",
        popularity: 4
      },
      {
        id: 3,
        name: "Long Distance Moving",
        description: "Cross-country and interstate moving solutions",
        popularity: 3
      }
    ];

    // Sort services by popularity
    const sortedServices = servicesData.sort((a: Service, b: Service) => b.popularity - a.popularity);
    setServices(sortedServices);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [services.length]);

  return (
    <div className="relative w-full h-64 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {services.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
} 