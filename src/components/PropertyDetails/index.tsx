'use client';

import { useAppSelector } from '../../store/hooks';

export default function PropertyDetails() {
  const { selectedLanguage } = useAppSelector((state) => state.property);

  const translations = {
    es: {
      title: "Características Principales",
      bedrooms: "3 Dormitorios",
      bathrooms: "2 Baños",
      area: "120 m²",
      parking: "1 Estacionamiento",
      garden: "Jardín Privado",
      security: "Seguridad 24/7"
    },
    en: {
      title: "Main Features",
      bedrooms: "3 Bedrooms",
      bathrooms: "2 Bathrooms",
      area: "120 m²",
      parking: "1 Parking Space",
      garden: "Private Garden",
      security: "24/7 Security"
    }
  };

  const t = translations[selectedLanguage];

  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 10V6a2 2 0 012-2h12a2 2 0 012 2v4M4 10v10a2 2 0 002 2h12a2 2 0 002-2V10M4 10h16" /></svg>
      ),
      label: t.bedrooms,
      key: 'bedrooms',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m-7 4h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      ),
      label: t.bathrooms,
      key: 'bathrooms',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l4 4 4-4m0-5a4 4 0 10-8 0v5a4 4 0 008 0v-5z" /></svg>
      ),
      label: t.area,
      key: 'area',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13a4 4 0 014-4h10a4 4 0 014 4v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5z" /></svg>
      ),
      label: t.parking,
      key: 'parking',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22c4.418 0 8-4.03 8-9 0-3.866-3.134-7-7-7S4 9.134 4 13c0 4.97 3.582 9 8 9z" /></svg>
      ),
      label: t.garden,
      key: 'garden',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm0 0V7m0 4v4m0 0a4 4 0 100-8 4 4 0 000 8z" /></svg>
      ),
      label: t.security,
      key: 'security',
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-base-100"
      role="region"
      aria-label={t.title}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.key}
              className="flex flex-col items-center bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105 focus-within:scale-105 outline-none"
              tabIndex={0}
              role="listitem"
              aria-label={feature.label}
            >
              {feature.icon}
              <span className="mt-4 text-lg font-semibold text-gray-700 text-center">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 