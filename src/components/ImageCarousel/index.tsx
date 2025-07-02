'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useAppSelector } from '../../store/hooks';

interface ImageData {
  id: number;
  src: string;
  alt: string;
  title: string;
}

export default function ImageCarousel() {
  const { selectedLanguage } = useAppSelector((state) => state.property);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const translations = {
    es: {
      title: "Galería de Fotos",
      subtitle: "Explora todos los detalles de esta hermosa propiedad",
      close: "Cerrar",
      previous: "Anterior",
      next: "Siguiente"
    },
    en: {
      title: "Photo Gallery",
      subtitle: "Explore all the details of this beautiful property",
      close: "Close",
      previous: "Previous",
      next: "Next"
    }
  };

  const t = translations[selectedLanguage];

  // Array de imágenes de ejemplo (puedes reemplazar con tus propias imágenes)
  const images: ImageData[] = [
    {
      id: 1,
      src: "/images/house-1.jpg",
      alt: "Fachada principal de la casa",
      title: "Fachada Principal"
    },
    {
      id: 2,
      src: "/images/house-2.jpg",
      alt: "Sala de estar",
      title: "Sala de Estar"
    },
    {
      id: 3,
      src: "/images/house-3.jpg",
      alt: "Cocina moderna",
      title: "Cocina Moderna"
    },
    {
      id: 4,
      src: "/images/house-4.jpg",
      alt: "Dormitorio principal",
      title: "Dormitorio Principal"
    },
    {
      id: 5,
      src: "/images/house-5.jpg",
      alt: "Jardín privado",
      title: "Jardín Privado"
    },
    {
      id: 6,
      src: "/images/house-6.jpg",
      alt: "Estacionamiento",
      title: "Estacionamiento"
    }
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = 'unset';
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeFullscreen();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    }
  };

  return (
    <section className="py-20 bg-base-100" role="region" aria-label={t.title}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          {t.title}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {t.subtitle}
        </p>

        {/* Carousel Principal */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Imagen Principal */}
            <div className="relative aspect-video">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-cover cursor-pointer transition-transform hover:scale-105"
                onClick={openFullscreen}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              
              {/* Overlay con título */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold">
                  {images[currentIndex].title}
                </h3>
              </div>

              {/* Botones de navegación */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors"
                aria-label={t.previous}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors"
                aria-label={t.next}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Indicador de imagen actual */}
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        </div>

        {/* Miniaturas */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setCurrentIndex(index)}
                className={`relative aspect-square rounded-lg overflow-hidden transition-all ${
                  index === currentIndex 
                    ? 'ring-4 ring-primary scale-105' 
                    : 'hover:scale-105'
                }`}
                aria-label={`Ver ${image.title}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Fullscreen */}
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Imagen Fullscreen */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
            
            {/* Título */}
            <div className="absolute top-8 left-8 right-8">
              <h3 className="text-white text-2xl font-bold bg-black/50 px-4 py-2 rounded-lg inline-block">
                {images[currentIndex].title}
              </h3>
            </div>

            {/* Botón Cerrar */}
            <button
              onClick={closeFullscreen}
              className="absolute top-8 right-8 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
              aria-label={t.close}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Botones de navegación */}
            <button
              onClick={prevImage}
              className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-colors"
              aria-label={t.previous}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-colors"
              aria-label={t.next}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicador */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 