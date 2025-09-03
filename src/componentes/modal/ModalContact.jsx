import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Select,
  SelectItem,
} from "@heroui/react";
import { WhatsAppButton } from "../Common/WhatsappButton/whatsApp-button";
import { useState } from "react";
import { services } from "../../utils/servicesData";
import { useTranslation } from "react-i18next";

export default function ModalContact({ isOpen, onOpenChange }) {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    phone: "",
    mensaje: "",
    servicio: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (keys) => {
    setForm({ ...form, servicio: Array.from(keys)[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Obtener el título traducido del servicio seleccionado
    const selectedService = form.servicio 
      ? t(services.find(s => s.slug === form.servicio)?.titleKey || form.servicio)
      : "";
    
    // Preparar los datos para el backend con el formato correcto
    const contactData = {
      name: form.nombre,
      email: form.email,
      phone: form.phone,
      service: selectedService,  // Campo separado para el servicio
      message: form.mensaje      // Solo el mensaje original
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
        nombre: "",
        email: "",
        phone: "",
        mensaje: "",
        servicio: "",
      });
      
      // Cerrar el modal después de 2 segundos
      setTimeout(() => {
        onOpenChange(false);
      }, 2000);
      
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      backdrop="blur"
      size="md"
      classNames={{
        backdrop:
          "bg-linear-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
      }}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {t("contact_us", "Contáctanos")}
            </ModalHeader>
            <ModalBody>
              {submitStatus === 'success' ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                  <strong className="font-bold">¡Mensaje enviado!</strong>
                  <p className="block sm:inline"> Nos pondremos en contacto contigo pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="nombre">
                      {t("name", "Nombre")}
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      id="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      required
                      className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="phone">
                      {t("phone", "Teléfono")}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="servicio">
                      {t("service_interest", "Servicio de interés")}
                    </label>
                    <Select
                      className="w-full"
                      label={t("select_service", "Selecciona un servicio")}
                      selectedKeys={form.servicio ? [form.servicio] : []}
                      onSelectionChange={handleServiceChange}
                      isDisabled={isSubmitting}
                    >
                      {services.map((service) => (
                        <SelectItem key={service.slug}>
                          {t(service.titleKey)}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="mensaje">
                      {t("message", "Mensaje")}
                    </label>
                    <textarea
                      name="mensaje"
                      id="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  {submitStatus === 'error' && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                      <strong className="font-bold">Error:</strong>
                      <span className="block sm:inline"> No se pudo enviar tu mensaje. Por favor intenta nuevamente.</span>
                    </div>
                  )}
                  
                  <div className="flex flex-col gap-2 mt-4">
                    <Button 
                      color="primary" 
                      type="submit" 
                      isLoading={isSubmitting}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? t("sending", "Enviando...") : t("send_message", "Enviar mensaje")}
                    </Button>
                    <WhatsAppButton
                      variant="inline"
                      showText={true}
                      text={t("contact_whatsapp", "Contactar por WhatsApp")}
                      className="w-full justify-center"
                    />
                  </div>
                </form>
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onPress={onClose} disabled={isSubmitting}>
                {t("close", "Cerrar")}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}