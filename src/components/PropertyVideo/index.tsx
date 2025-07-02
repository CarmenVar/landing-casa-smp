'use client';

import { useState, useRef } from 'react';
import { useAppSelector } from '../../store/hooks';

export default function PropertyVideo() {
  const { selectedLanguage } = useAppSelector((state) => state.property);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const translations = {
    es: {
      title: "Recorrido Virtual",
      subtitle: "Descubre cada rincón de esta hermosa propiedad",
      play: "Reproducir",
      pause: "Pausar",
      fullscreen: "Pantalla completa",
      ariaLabel: "Video de recorrido de la casa"
    },
    en: {
      title: "Virtual Tour",
      subtitle: "Discover every corner of this beautiful property",
      play: "Play",
      pause: "Pause",
      fullscreen: "Fullscreen",
      ariaLabel: "House tour video"
    }
  };

  const t = translations[selectedLanguage];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  const handleMouseEnter = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    setShowControls(false);
  };

  return (
    <section className="py-20 bg-background-soft" role="region" aria-label={t.title}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            {t.title}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Video Container */}
            <div className="relative aspect-video bg-neutral-800">
              <video
                ref={videoRef}
                className="w-full h-full object-cover cursor-pointer"
                poster="/images/video-poster.jpg"
                onClick={handleVideoClick}
                aria-label={t.ariaLabel}
              >
                <source src="/videos/house-tour.mp4" type="video/mp4" />
                <source src="/videos/house-tour.webm" type="video/webm" />
                Tu navegador no soporta el elemento de video.
              </video>

              {/* Overlay de play cuando no está reproduciéndose */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <button
                    onClick={handleVideoClick}
                    className="bg-primary hover:bg-primary-focus text-white p-6 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label={t.play}
                  >
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
              )}

              {/* Controles personalizados */}
              {showControls && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={togglePlay}
                      className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
                      aria-label={isPlaying ? t.pause : t.play}
                    >
                      {isPlaying ? (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      )}
                    </button>

                    <button
                      onClick={toggleFullscreen}
                      className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
                      aria-label={t.fullscreen}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Información del video */}
            <div className="p-6 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-700 mb-2">
                    Recorrido Completo de la Casa
                  </h3>
                  <p className="text-neutral-600">
                    Duración: 3:45 min • HD 1080p
                  </p>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={togglePlay}
                    className="btn btn-primary rounded-full"
                    aria-label={isPlaying ? t.pause : t.play}
                  >
                    {isPlaying ? (
                      <>
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                        </svg>
                        {t.pause}
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                        {t.play}
                      </>
                    )}
                  </button>
                  
                  <button
                    onClick={toggleFullscreen}
                    className="btn btn-outline btn-secondary rounded-full"
                    aria-label={t.fullscreen}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    {t.fullscreen}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 