'use client';

import Image from 'next/image';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { toggleContactForm } from '../../store/propertySlice';

export default function HeroSection() {
  const dispatch = useAppDispatch();
  const { price, selectedLanguage } = useAppSelector((state) => state.property);

  const translations = {
    es: {
      title: "Casa en Venta en San Martín de Porres",
      subtitle: "Hermosa casa familiar en una de las mejores zonas de Lima",
      description: "Oportunidad única para adquirir una propiedad moderna y bien ubicada",
      cta: "Ver Detalles",
      contact: "Contactar",
      price: `S/ ${price.toLocaleString('es-PE')}`,
      imageAlt: "Casa moderna en San Martín de Porres, Lima, Perú"
    },
    en: {
      title: "House for Sale in San Martín de Porres",
      subtitle: "Beautiful family home in one of Lima's best areas",
      description: "Unique opportunity to acquire a modern and well-located property",
      cta: "View Details",
      contact: "Contact",
      price: `$ ${(price / 3.7).toLocaleString('en-US')}`,
      imageAlt: "Modern house in San Martín de Porres, Lima, Peru"
    }
  };

  const t = translations[selectedLanguage];

  const handleContactClick = () => {
    dispatch(toggleContactForm());
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleContactClick();
    }
  };

  return (
    <section 
      role="region" 
      aria-label={t.imageAlt}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-house.jpg"
          alt={t.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Price Badge */}
          <div className="mb-6">
            <span className="inline-block bg-primary text-primary-content px-6 py-3 rounded-full text-xl font-bold shadow-lg">
              {t.price}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            {t.subtitle}
          </p>

          {/* Description */}
          <p className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto">
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="btn btn-primary btn-lg text-lg px-8 py-4"
              onClick={handleContactClick}
              onKeyDown={handleKeyDown}
              role="button"
              tabIndex={0}
              aria-label={t.contact}
            >
              {t.contact}
            </button>
            
            <button
              className="btn btn-outline btn-lg text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900"
              onClick={() => {
                const featuresSection = document.getElementById('features');
                featuresSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  const featuresSection = document.getElementById('features');
                  featuresSection?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={t.cta}
            >
              {t.cta}
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 