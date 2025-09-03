import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { getTeamMemberBySlug } from "../../utils/TeamMembersData";
import { WhatsAppButton } from "../../componentes/Common/WhatsappButton/whatsApp-button";

export default function TeamMemberProfile() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const member = getTeamMemberBySlug(slug);
  
  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t("member_not_found", "Miembro no encontrado")}</h1>
          <button 
            onClick={() => navigate("/team")}
            className="text-blue-600 hover:underline"
          >
            {t("back_to_team", "Volver al equipo")}
          </button>
        </div>
      </div>
    );
  }

  return (
<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section with Profile */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 pb-32">
        {/* Back Button */}
        <div className="absolute top-24 left-4 z-20">
          <button
            onClick={() => navigate("/team")}
            className="flex items-center text-white hover:text-blue-200 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t("back_to_team", "Volver al equipo")}
          </button>
        </div>

        {/* Profile Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-32 pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center lg:items-end gap-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-white p-2 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-200 to-blue-100 flex items-center justify-center">
                  <span className="text-5xl lg:text-6xl font-bold text-blue-600">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              {/* Status Badge */}
              <div className="absolute bottom-4 right-4 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
            </div>

            {/* Basic Info */}
            <div className="text-center lg:text-left text-white flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold mb-2">{member.name}</h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-4">
                {t(member.position)}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {member.location}
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {member.phone}
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  {member.email}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-3">
              <a
                href={`mailto:${member.email}`}
                className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                {t("send_email", "Enviar Email")}
              </a>
              {member.linkedIn && (
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content - Cards Layout */}
      <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-20">
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          
          {/* Quote Card */}
          {member.quoteKey && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3 bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600"
            >
              <svg className="w-8 h-8 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg text-gray-700 italic leading-relaxed">
                {t(member.quoteKey)}
              </p>
            </motion.div>
          )}

          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              {t("about_member", "Acerca de")} {member.name.split(' ')[0]}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t(member.bioKey)}
            </p>
          </motion.div>

          {/* Quick Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              {t("quick_facts", "Datos Rápidos")}
            </h3>
            <div className="space-y-4">
              <div className="pb-4 border-b border-gray-100">
                <p className="text-sm text-gray-500 mb-1">{t("years_experience", "Años de Experiencia")}</p>
                <p className="text-2xl font-bold text-blue-600">{member.experience}</p>
              </div>
              <div className="pb-4 border-b border-gray-100">
                <p className="text-sm text-gray-500 mb-2">{t("languagesTM", "Idiomas")}</p>
                <div className="flex flex-wrap gap-2">
                  {member.languages.map((lang, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">{t("specialties_count", "Especialidades")}</p>
                <p className="text-lg font-semibold text-gray-900">
                  {member.specialties.length} {t("areas_expertise", "áreas de especialización")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          
          {/* Specialties Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              {t("areas_practice", "Áreas de Práctica")}
            </h3>
            <div className="space-y-3">
              {member.specialties.map((specialty, idx) => (
                <div key={idx} className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{t(specialty)}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              {t("education", "Educación")}
            </h3>
            <div className="space-y-4">
              {member.education.map((edu, idx) => (
                <div key={idx} className="border-l-3 border-purple-200 pl-4">
                  <p className="font-semibold text-gray-900">{t(edu.degreeKey)}</p>
                  <p className="text-gray-600">{t(edu.schoolKey)}</p>
                  <p className="text-sm text-gray-500">{edu.year}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bar Admissions & Associations */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {/* Bar Admissions */}
          {member.barAdmissions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t("bar_admissions", "Admisiones al Colegio de Abogados")}
              </h3>
              <ul className="space-y-2">
                {member.barAdmissions.map((bar, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {t(bar)}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Professional Associations */}
          {member.associations.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t("professional_associations", "Asociaciones Profesionales")}
              </h3>
              <ul className="space-y-2">
                {member.associations.map((assoc, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t(assoc)}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-12 text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("schedule_consultation_member", "Agenda una consulta con")} {member.name.split(' ')[0]}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t("member_cta_desc", "Obtén asesoría legal especializada para tu caso migratorio")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <WhatsAppButton
  variant="inline"
  showText={true}
  text={t("schedule_consultation", "Agendar Consulta")}
  defaultMessage={t("whatsapp_member_message").replace("{0}", member.name)}
  phone={member.whatsapp || member.phone}
/>
          
          </div>
        </motion.div>
      </div>
    </div>
  );
}