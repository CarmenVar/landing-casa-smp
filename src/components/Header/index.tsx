'use client';

import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setLanguage } from '../../store/propertySlice';

export default function Header() {
  const dispatch = useAppDispatch();
  const { selectedLanguage } = useAppSelector((state) => state.property);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const translations = {
    es: {
      home: "Inicio",
      about: "Acerca de",
      contact: "Contacto",
      language: "Idioma",
      spanish: "Español",
      english: "Inglés"
    },
    en: {
      home: "Home",
      about: "About",
      contact: "Contact",
      language: "Language",
      spanish: "Spanish",
      english: "English"
    }
  };

  const t = translations[selectedLanguage];

  const handleLanguageChange = (lang: 'es' | 'en') => {
    dispatch(setLanguage(lang));
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg"
      role="banner"
      aria-label="Navegación principal"
    >
      <nav className="container mx-auto px-4 py-4" role="navigation" aria-label="Menú principal">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('hero'))}
              className="text-2xl font-bold text-primary hover:text-primary-focus transition-colors"
              role="button"
              tabIndex={0}
              aria-label="Ir al inicio"
            >
              🏠 CasaSMP
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('hero'))}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
              role="button"
              tabIndex={0}
            >
              {t.home}
            </button>
            
            <button
              onClick={() => scrollToSection('features')}
              onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('features'))}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
              role="button"
              tabIndex={0}
            >
              {t.about}
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('contact'))}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
              role="button"
              tabIndex={0}
            >
              {t.contact}
            </button>

            {/* Language Selector */}
            <div className="relative" role="group" aria-label="Selector de idioma">
              <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-2">
                <span className="text-sm text-gray-600">{t.language}:</span>
                <button
                  onClick={() => handleLanguageChange('es')}
                  onKeyDown={(e) => handleKeyDown(e, () => handleLanguageChange('es'))}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    selectedLanguage === 'es' 
                      ? 'bg-primary text-white' 
                      : 'bg-transparent text-gray-700 hover:bg-gray-200'
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-label="Cambiar a español"
                  aria-pressed={selectedLanguage === 'es'}
                >
                  ES
                </button>
                <button
                  onClick={() => handleLanguageChange('en')}
                  onKeyDown={(e) => handleKeyDown(e, () => handleLanguageChange('en'))}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    selectedLanguage === 'en' 
                      ? 'bg-primary text-white' 
                      : 'bg-transparent text-gray-700 hover:bg-gray-200'
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-label="Change to English"
                  aria-pressed={selectedLanguage === 'en'}
                >
                  EN
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={handleMenuToggle}
              onKeyDown={(e) => handleKeyDown(e, handleMenuToggle)}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              role="button"
              tabIndex={0}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4"
            role="menu"
            aria-label="Menú móvil"
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('hero'))}
                className="text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
                role="menuitem"
                tabIndex={0}
              >
                {t.home}
              </button>
              
              <button
                onClick={() => scrollToSection('features')}
                onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('features'))}
                className="text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
                role="menuitem"
                tabIndex={0}
              >
                {t.about}
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('contact'))}
                className="text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
                role="menuitem"
                tabIndex={0}
              >
                {t.contact}
              </button>

              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-600 mb-2 block">{t.language}:</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleLanguageChange('es')}
                    onKeyDown={(e) => handleKeyDown(e, () => handleLanguageChange('es'))}
                    className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                      selectedLanguage === 'es' 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    role="menuitem"
                    tabIndex={0}
                    aria-pressed={selectedLanguage === 'es'}
                  >
                    {t.spanish}
                  </button>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    onKeyDown={(e) => handleKeyDown(e, () => handleLanguageChange('en'))}
                    className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                      selectedLanguage === 'en' 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    role="menuitem"
                    tabIndex={0}
                    aria-pressed={selectedLanguage === 'en'}
                  >
                    {t.english}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 