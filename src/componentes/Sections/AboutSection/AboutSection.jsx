import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { greencard } from "../../../assets";

export default function AboutSection() {
  const { t } = useTranslation();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="w-full py-20 bg-[#f9f8f6]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src={greencard}
              alt="Green Card"
              className="rounded-xl shadow-lg w-full max-w-md object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Textos */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center md:text-left">
              {t("about_title")}
            </h2>
            <p className="text-lg text-blue-900 mb-2 font-medium text-center md:text-left">
              {t("about_subtitle")}
            </p>
            <div className="w-20 h-1 bg-blue-600 mb-6 md:mb-8 mx-auto md:mx-0"></div>
            <div className="space-y-6 text-gray-800 text-base md:text-lg leading-relaxed">
              <p>{t("about_p1")}</p>
              <p>{t("about_p2")}</p>
              <p>{t("about_p3")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}