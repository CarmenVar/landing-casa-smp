import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PropertyDetails from '../components/PropertyDetails';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

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
      
      {/* Formulario de contacto */}
      <ContactForm />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
