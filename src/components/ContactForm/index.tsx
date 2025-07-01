'use client';

import { useState } from 'react';
import { useAppSelector } from '../../store/hooks';

export default function ContactForm() {
  const { selectedLanguage } = useAppSelector((state) => state.property);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const translations = {
    es: {
      title: "¿Interesado?",
      subtitle: "Contáctanos para más información",
      name: "Nombre",
      email: "Email",
      phone: "Teléfono",
      message: "Mensaje",
      send: "Enviar Mensaje",
      success: "¡Gracias por tu mensaje! Nos pondremos en contacto pronto.",
      required: "Este campo es obligatorio",
      invalidEmail: "Email inválido",
      invalidPhone: "Teléfono inválido",
      placeholder: {
        name: "Tu nombre completo",
        email: "tu@email.com",
        phone: "+51 999 999 999",
        message: "Cuéntanos sobre tu interés en la propiedad..."
      }
    },
    en: {
      title: "Interested?",
      subtitle: "Contact us for more information",
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      send: "Send Message",
      success: "Thank you for your message! We will contact you soon.",
      required: "This field is required",
      invalidEmail: "Invalid email",
      invalidPhone: "Invalid phone",
      placeholder: {
        name: "Your full name",
        email: "your@email.com",
        phone: "+51 999 999 999",
        message: "Tell us about your interest in the property..."
      }
    }
  };

  const t = translations[selectedLanguage];

  const validate = () => {
    const newErrors: any = {};
    if (!form.name) newErrors.name = t.required;
    if (!form.email) newErrors.email = t.required;
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = t.invalidEmail;
    if (!form.phone) newErrors.phone = t.required;
    else if (!/^\+?\d{7,15}$/.test(form.phone.replace(/\s/g, ''))) newErrors.phone = t.invalidPhone;
    if (!form.message) newErrors.message = t.required;
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-base-200" role="region" aria-label={t.title}>
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">{t.title}</h2>
        <p className="text-center text-gray-600 mb-10">{t.subtitle}</p>
        <form
          className="bg-white rounded-lg shadow-lg p-8 space-y-6"
          onSubmit={handleSubmit}
          noValidate
          aria-label={t.title}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              {t.name}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={`input input-bordered w-full ${errors.name ? 'input-error' : ''}`}
              placeholder={t.placeholder.name}
              value={form.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              required
            />
            {errors.name && <span id="name-error" className="text-error text-xs">{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              {t.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={`input input-bordered w-full ${errors.email ? 'input-error' : ''}`}
              placeholder={t.placeholder.email}
              value={form.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              required
            />
            {errors.email && <span id="email-error" className="text-error text-xs">{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              {t.phone}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className={`input input-bordered w-full ${errors.phone ? 'input-error' : ''}`}
              placeholder={t.placeholder.phone}
              value={form.phone}
              onChange={handleChange}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              required
            />
            {errors.phone && <span id="phone-error" className="text-error text-xs">{errors.phone}</span>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              {t.message}
            </label>
            <textarea
              id="message"
              name="message"
              className={`textarea textarea-bordered w-full ${errors.message ? 'textarea-error' : ''}`}
              placeholder={t.placeholder.message}
              value={form.message}
              onChange={handleChange}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              required
              rows={4}
            />
            {errors.message && <span id="message-error" className="text-error text-xs">{errors.message}</span>}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn btn-primary btn-lg px-8"
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                t.send
              )}
            </button>
          </div>
          {submitted && (
            <div className="alert alert-success shadow-lg mt-4" role="alert">
              <span>{t.success}</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
} 