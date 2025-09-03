import { useParams, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ServiceLayout from "../../componentes/layouts/ServiceLayout";
import { services } from "../../utils/servicesData";
import { WhatsAppButton } from "../../componentes/Common/WhatsappButton/whatsApp-button";

export default function ServicePage() {
  const { slug } = useParams();
  const { t } = useTranslation();

  const service = services.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/404" replace />;

  return (
    <ServiceLayout title={t(service.titleKey)} heroImg={service.imgUrl}>
      <div className="max-w-6xl mx-auto">
        {/* Sección principal sin imagen lateral */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            {t(service.titleKey)}
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-8">
            {t(service.descKey)}
          </p>
          <WhatsAppButton
            variant="inline"
            showText={true}
            text={t("service_free_consultation")}
            className="mx-auto"
            defaultMessage={t("whatsapp_service_message").replace(
              "{0}",
              t(service.titleKey)
            )}
          />
        </motion.div>

        {service.benefits && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-blue-50 p-8 rounded-xl mb-10"
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center">
              {t("service_benefits")}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700">{t(benefit)}</p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Proceso y Requisitos */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Elegibilidad */}
          {service.eligibility && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {t("service_eligibility")}
              </h3>
              <ul className="space-y-3">
                {service.eligibility.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-2 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{t(item)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Proceso */}
          {service.process && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clipRule="evenodd"
                  />
                </svg>
                {t("service_process", "Proceso")}
              </h3>
              <ol className="space-y-4">
                {service.process.map((step, index) => (
                  <li key={index} className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-semibold flex items-center justify-center text-sm">
                        {index + 1}
                      </div>
                    </div>
                    <p className="text-gray-700">{t(step)}</p>
                  </li>
                ))}
              </ol>

              {service.timeframe && (
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-medium text-gray-900">
                      {t("service_timeframe")}:
                    </span>
                  </div>
                  <p className="mt-1 text-gray-700 pl-7">
                    {t(service.timeframe)}
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </div>

        {/* Documentos Requeridos */}
        {service.documents && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gray-50 p-8 rounded-xl mb-10"
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center justify-center">
              <svg
                className="w-6 h-6 mr-2 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                  clipRule="evenodd"
                />
              </svg>
              {t("service_documents", "Documentos Requeridos")}
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {service.documents.map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white p-3 rounded-lg shadow-sm"
                >
                  <svg
                    className="w-5 h-5 text-blue-600 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{t(doc)}</span>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* FAQ */}
        {service.faq && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mb-10"
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center">
              {t("service_faq", "Preguntas Frecuentes")}
            </h3>
            <div className="space-y-4">
              {service.faq.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer bg-white p-4 hover:bg-gray-50 transition-colors">
                      <h4 className="text-lg font-medium text-gray-900">
                        {t(item.question)}
                      </h4>
                      <svg
                        className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4 pt-2 text-gray-700">
                      <p>{t(item.answer)}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center shadow-lg"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {t("service_cta_title", "¿Necesita ayuda con su caso?")}
          </h3>
          <p className="mb-6 text-blue-100 text-lg">
            {t(
              "service_cta_desc",
              "Nuestro equipo de abogados especializados está listo para ayudarle a navegar este proceso."
            )}
          </p>
          <WhatsAppButton
            variant="inline"
            showText={true}
            text={t("service_free_consultation")}
            className="mx-auto w-full max-w-md"
            defaultMessage={t("whatsapp_service_message").replace(
              "{0}",
              t(service.titleKey)
            )}
          />
        </motion.div>
      </div>
    </ServiceLayout>
  );
}