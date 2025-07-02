import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PropertyDetails from '../components/PropertyDetails';
import ImageCarousel from '../components/ImageCarousel';
import PropertyVideo from '../components/PropertyVideo';
import LocationMap from '../components/LocationMap';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header con navegación y selector de idioma */}
      <Header />
      
      {/* Sección Hero principal */}
      <main id="hero">
        <HeroSection />
      </main>
      
      {/* Sección de características de la propiedad */}
      <PropertyDetails />
      
      {/* Galería de fotos con carrousel */}
      <ImageCarousel />
      
      {/* Video de recorrido virtual */}
      <PropertyVideo />
      
      {/* Ubicación y mapa */}
      <LocationMap />
      
      {/* Formulario de contacto */}
      <ContactForm />
      
      {/* Footer */}
      <Footer />
      
      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}
