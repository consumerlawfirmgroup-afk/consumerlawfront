import { motion } from "framer-motion";
import { Card } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { services } from "../../../utils/servicesData";

export default function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section id="services" className="w-full py-20 bg-[#f8f6f3]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("services_title")}
          </h2>
          <p className="text-lg text-gray-700 mb-2 font-medium max-w-2xl mx-auto">
            {t("services_intro")}
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-white border border-blue-100 shadow-md hover:shadow-lg transition-all h-full flex flex-col">
                <div className="relative w-full h-56 mb-4">
                  <img
                    src={service.imgUrl}
                    alt={t(service.titleKey)}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="flex-1 flex flex-col px-6 pb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-gray-700 mb-6">{t(service.descKey)}</p>

                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-auto inline-block bg-blue-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition text-center"
                  >
                    {t("service_learn_more")}
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
