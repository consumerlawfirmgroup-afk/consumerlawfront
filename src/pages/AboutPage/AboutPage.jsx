import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { WhatsAppButton } from "../../componentes/Common/WhatsappButton/whatsApp-button";
import PageHeader from "../../componentes/Common/PageHeader/PageHeader";



export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
<PageHeader 
  title={t("about_title", "Nuestra Historia")}
  subtitle={t("about_subtitle", "Más de 25 años forjando el sueño americano")}
  titleSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" 
/>

      <div className="bg-[#f8f6f3] py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Intro Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4 md:mb-6">
              {t("about_firm_title", "Better Call Saul Law Firm")}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-2">
              {t("about_firm_intro", "Fundada en 1998 por el renombrado abogado James McGill 'Saul Goodman', nuestra firma ha evolucionado desde un pequeño despacho en Albuquerque hasta convertirse en una de las firmas de inmigración más respetadas del sudoeste americano.")}
            </p>
          </motion.div>

          {/* Story Grid */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="px-2 md:px-0"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-3 md:mb-4">
                {t("about_origins_title", "Nuestros Orígenes")}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed">
                {t("about_origins_text", "Todo comenzó cuando James McGill, recién graduado de la Universidad de Samoa Americana, decidió especializarse en derecho de inmigración tras presenciar las injusticias que enfrentaban las familias inmigrantes en su comunidad natal.")}
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {t("about_origins_continuation", "Su primer caso exitoso, defendiendo a una familia salvadoreña de la deportación, marcó el inicio de una carrera dedicada a garantizar que cada persona tenga la oportunidad de alcanzar el sueño americano.")}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-6 md:p-8"
            >
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-blue-900 mb-1 md:mb-2">{t("about_years", "+25 Años")}</h4>
                <p className="text-sm sm:text-base text-gray-600">{t("about_experience", "de Experiencia Comprobada")}</p>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8 md:mb-16"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-center text-blue-900 mb-6 md:mb-8">
              {t("about_achievements", "Nuestros Logros")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 md:mb-2">15,000+</div>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">{t("cases_resolved", "Casos Resueltos")}</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 md:mb-2">95%</div>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">{t("success_rate", "Tasa de Éxito")}</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 md:mb-2">50+</div>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">{t("countries", "Países Representados")}</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 md:mb-2">12</div>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">{t("languages", "Idiomas")}</p>
              </div>
            </div>
          </motion.div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-16">
            {[
              {
                title: t("value_integrity", "Integridad"),
                desc: t("value_integrity_desc", "Actuamos con transparencia y honestidad en cada caso, manteniendo los más altos estándares éticos."),
                icon: "⚖️"
              },
              {
                title: t("value_excellence", "Excelencia"),
                desc: t("value_excellence_desc", "Nos comprometemos a brindar servicios legales de la más alta calidad, superando expectativas."),
                icon: "🏆"
              },
              {
                title: t("value_compassion", "Compasión"),
                desc: t("value_compassion_desc", "Entendemos que detrás de cada caso hay historias humanas que merecen respeto y dedicación."),
                icon: "❤️"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-5 md:p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">{value.icon}</div>
                <h4 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2 md:mb-3">{value.title}</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center bg-blue-50 rounded-xl p-6 md:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 md:mb-4">
              {t("about_cta_title", "¿Listo para escribir tu propia historia de éxito?")}
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4 md:mb-6 max-w-2xl mx-auto px-2">
              {t("about_cta_desc", "Únete a las miles de familias que han confiado en nosotros para hacer realidad sus sueños en Estados Unidos.")}
            </p>
      
              <WhatsAppButton
                variant="inline"
                showText={true}
                text={t("contact_send", "COMIENZA TU PROCESO")}
                className="mx-auto w-full max-w-md"
              />
       
 
          </motion.div>
        </div>
      </div>
    </div>
  );
}