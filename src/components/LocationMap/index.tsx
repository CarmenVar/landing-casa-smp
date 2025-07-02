'use client';

import { useAppSelector } from '../../store/hooks';

export default function LocationMap() {
  const { selectedLanguage } = useAppSelector((state) => state.property);

  const translations = {
    es: {
      title: "Ubicación Privilegiada",
      subtitle: "Ubicada en una de las zonas más seguras y accesibles de San Martín de Porres",
      description: "Esta hermosa propiedad se encuentra en una ubicación estratégica, cerca de colegios, hospitales, centros comerciales y transporte público.",
      nearby: "Cerca de:",
      schools: "Colegios",
      hospitals: "Hospitales",
      shopping: "Centros Comerciales",
      transport: "Transporte Público",
      viewMap: "Ver en Google Maps"
    },
    en: {
      title: "Prime Location",
      subtitle: "Located in one of the safest and most accessible areas of San Martín de Porres",
      description: "This beautiful property is strategically located, close to schools, hospitals, shopping centers and public transportation.",
      nearby: "Nearby:",
      schools: "Schools",
      hospitals: "Hospitals",
      shopping: "Shopping Centers",
      transport: "Public Transport",
      viewMap: "View on Google Maps"
    }
  };

  const t = translations[selectedLanguage];

  // Coordenadas de San Martín de Porres (puedes ajustar a la ubicación exacta)
  const latitude = -12.0464;
  const longitude = -77.0428;
  const zoom = 15;

  const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${latitude},${longitude}&zoom=${zoom}`;
  
  // URL alternativa sin API key (menos funcional pero funciona)
  const fallbackUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.371234567890!2d-77.0428!3d-12.0464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAyJzQ2LjQiUyA3N8KwMDInMzQuMSJX!5e0!3m2!1ses!2spe!4v1234567890`;

  const handleMapClick = () => {
    window.open(`https://www.google.com/maps?q=${latitude},${longitude}`, '_blank');
  };

  return (
    <section className="py-20 bg-base-200 relative" role="region" aria-label={t.title}>
      {/* Background image de la ciudad */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: "url('/images/city-background.jpg')" }}
        ></div>
      </div>
              <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            {t.subtitle}
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Información de ubicación */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                {t.nearby}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">{t.schools}</span>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">{t.hospitals}</span>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">{t.shopping}</span>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 6v6m-4-6h8m-8 6h8" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">{t.transport}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold mb-3 text-gray-800">
                San Martín de Porres, Lima
              </h4>
              <p className="text-gray-600 mb-4">
                Una de las zonas más desarrolladas y seguras de Lima Norte, con excelente conectividad y servicios.
              </p>
              <button
                onClick={handleMapClick}
                className="btn btn-primary"
                aria-label={t.viewMap}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {t.viewMap}
              </button>
            </div>
          </div>

          {/* Mapa */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video relative">
                <iframe
                  src={fallbackUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de la propiedad en Google Maps"
                  aria-label="Mapa mostrando la ubicación de la propiedad en San Martín de Porres"
                ></iframe>
              </div>
            </div>
            
            {/* Overlay informativo */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">
                  Ubicación de la propiedad
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 