import { useState } from "react";
import { useTranslation } from "react-i18next";
import { services } from "../../../utils/servicesData";

export default function ContactUsSection() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    servicio: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Obtener el nombre del servicio traducido
    const selectedService = form.servicio 
      ? t(services.find(s => s.slug === form.servicio)?.titleKey || form.servicio)
      : "";
    
    // Preparar los datos para el backend con el formato correcto
    const contactData = {
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
      phone: form.phone,
      service: selectedService,
      message: form.message
    };
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('https://consumerlaw.zeabur.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData)
      });
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log('Respuesta del servidor:', data);
      
      // Mostrar mensaje de éxito
      setSubmitStatus('success');
      
      // Resetear el formulario
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        servicio: "",
      });
      
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-20 bg-[#fcfbfa]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {/* Formulario de contacto */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {t("contact_title")}
            </h2>
            <p className="text-gray-700 mb-6">
              {t("contact_subtitle")}
            </p>
            
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6" role="alert">
                <strong className="font-bold">{t("message_sent", "¡Mensaje enviado!")}</strong>
                <p className="block sm:inline"> {t("contact_success", "Nos pondremos en contacto contigo pronto.")}</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6" role="alert">
                <strong className="font-bold">{t("error", "Error:")}</strong>
                <span className="block sm:inline"> {t("contact_error", "No se pudo enviar tu mensaje. Por favor intenta nuevamente.")}</span>
              </div>
            )}
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder={t("contact_first_name")}
                  className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder={t("contact_last_name")}
                  className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder={t("contact_email")}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                value={form.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <input
                type="tel"
                name="phone"
                placeholder={t("contact_phone")}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                value={form.phone}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <select
                name="servicio"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                value={form.servicio}
                onChange={handleChange}
                disabled={isSubmitting}
              >
                <option value="">{t("select_service", "Selecciona un servicio")}</option>
                {services.map((service) => (
                  <option key={service.slug} value={service.slug}>
                    {t(service.titleKey)}
                  </option>
                ))}
              </select>
              <textarea
                name="message"
                placeholder={t("contact_message")}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-2 rounded font-bold hover:bg-blue-800 transition disabled:bg-blue-400"
                disabled={isSubmitting}
              >
                {isSubmitting ? t("sending", "Enviando...") : t("contact_send")}
              </button>
            </form>
          </div>
          
          {/* ...existing code... */}
          <div className="bg-[#e9ecf3] p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              {t("whychooseus_title")}
            </h3>
            <p className="text-gray-700 mb-6">
              {t("whychooseus_subtitle")}
            </p>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <span className="text-blue-700 text-xl">★</span>
                <div>
                  <p className="font-semibold text-gray-900">{t("whychooseus_reputation")}</p>
                  <p className="text-gray-600 text-sm">{t("whychooseus_reputation_desc")}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-700 text-xl">💬</span>
                <div>
                  <p className="font-semibold text-gray-900">{t("whychooseus_convenience")}</p>
                  <p className="text-gray-600 text-sm">{t("whychooseus_convenience_desc")}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-700 text-xl">🤝</span>
                <div>
                  <p className="font-semibold text-gray-900">{t("whychooseus_compassion")}</p>
                  <p className="text-gray-600 text-sm">{t("whychooseus_compassion_desc")}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-700 text-xl">🏆</span>
                <div>
                  <p className="font-semibold text-gray-900">{t("whychooseus_experience")}</p>
                  <p className="text-gray-600 text-sm">{t("whychooseus_experience_desc")}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}