import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { WhatsAppButton } from "../../componentes/Common/WhatsappButton/whatsApp-button";
import { teamMembersCard } from "../../utils/TeamMembersData";
import PageHeader from "../../componentes/Common/PageHeader/PageHeader";




export default function TeamPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const handleViewProfile = (slug) => {
    navigate(`/team/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PageHeader 
        title={t("team_title", "Nuestro Equipo")}
        subtitle={t("team_subtitle", "Abogados experimentados comprometidos con tu éxito")}
      />

      {/* Introduction Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 py-16"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            {t("team_intro_title", "Expertos en Inmigración a Tu Servicio")}
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t("team_intro_desc", "Nuestro equipo multidisciplinario combina décadas de experiencia en derecho migratorio con un profundo compromiso hacia cada cliente. Hablamos tu idioma, entendemos tu cultura y luchamos por tus derechos.")}
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { number: "200+", label: t("years_combined", "Años Combinados") },
            { number: "12", label: t("languages_spoken", "Idiomas") },
            { number: "50+", label: t("countries_served", "Países Atendidos") },
            { number: "95%", label: t("success_rateT", "Casos Exitosos") }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Team Members Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {teamMembersCard.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
                <div className="absolute inset-0 bg-blue-900 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                {/* Placeholder for image - replace with actual images */}
                <div className="h-full w-full flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-blue-200 flex items-center justify-center">
                    <span className="text-4xl font-bold text-blue-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {t(member.position)}
                </p>
                
                {/* Location */}
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {member.location}
                </div>

                {/* Experience */}
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  {member.experience}
                </div>

                {/* Contact Buttons */}
                <div className="flex gap-2">
                  <a 
                    href={`mailto:${member.email}`}
                    className="flex-1 text-center py-2 px-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
                  >
                    {t("contact_email", "Email")}
                  </a>
              <WhatsAppButton
                    phone={member.whatsapp || member.phone}
                    text={t("contact_whatsapp", "WhatsApp")}
                    className="flex-1"
                    variant="inline"
                  />
                </div>
                <button 
                  onClick={() => handleViewProfile(member.slug)}
                  className="w-full mt-4 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors flex items-center justify-center group cursor-pointer"
                >
                  {t("view_profile", "Ver perfil completo")}
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-600 to-blue-700 py-16"
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t("team_cta_title", "¿Listo para trabajar con los mejores?")}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t("team_cta_desc", "Nuestro equipo está listo para ayudarte a alcanzar tus metas migratorias")}
          </p>
          <WhatsAppButton
            variant="inline"
            showText={true}
            text={t("team_cta_button", "Agenda una Consulta Gratuita")}
            className="mx-auto"
            defaultMessage={t("whatsapp_team_message", "Hola, me gustaría agendar una consulta con su equipo legal")}
          />
        </div>
      </motion.section>
    </div>
  );
}