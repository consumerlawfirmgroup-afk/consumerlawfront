import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import { testimonials } from "../../locales";
import { WhatsAppButton } from "../../componentes/Common/WhatsappButton/whatsApp-button";
import PageHeader from "../../componentes/Common/PageHeader/PageHeader";


export default function TestimonialsPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;


  const featuredTestimonials = testimonials.slice(0, 3); 
  const regularTestimonials = testimonials.slice(3);

  return (
    <div className="min-h-screen">
   <PageHeader 
        title={t("navbar_testimonials", "Testimonios")}
        subtitle={t("testimonials_subtitle", "Historias reales de familias que lograron su sueño americano")}
      />

      {/* Main Content */}
      <section className="bg-[#f8f6f3] py-16">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <p className="text-sm text-gray-600">{t("satisfaction_rate", "Satisfacción")}</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">15K+</div>
                <p className="text-sm text-gray-600">{t("families_helped", "Familias Ayudadas")}</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">25+</div>
                <p className="text-sm text-gray-600">{t("years_experienceTestimonials", "Años de Experiencia")}</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <p className="text-sm text-gray-600">{t("countries_represented", "Países")}</p>
              </div>
            </div>
          </motion.div>

          {/* Featured Testimonials - Estilo Cards Premium */}
          <div className="mb-16">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                {t("featured_stories", "Historias Destacadas")}
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {featuredTestimonials.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* Card Header con gradiente */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.imgUrl}
                        alt={`Foto de ${item.name}`}
                        className="w-16 h-16 object-cover rounded-full border-3 border-white shadow-lg"
                      />
                      <div className="text-white">
                        <p className="font-semibold text-lg">{item.name}</p>
                        <p className="text-blue-100 text-sm">{item.location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < item.rating ? 'text-amber-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-700 italic leading-relaxed">
                      "{currentLang === "en" ? item.testimonial_en : item.testimonial}"
                    </blockquote>

                    {/* Tipo de caso - Badge */}
                    {item.caseType && (
                      <div className="mt-4">
                        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                          {item.caseType}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Carousel Section - Más testimonios */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">
              {t("more_testimonials", "Más Testimonios de Éxito")}
            </h3>
            
            <Splide
              aria-label={t("navbar_testimonials", "Testimonios")}
              options={{
                type: "loop",
                perPage: 4,
                gap: "1.5rem",
                pagination: true,
                arrows: true,
                autoplay: true,
                interval: 3000,
                pauseOnHover: true,
                breakpoints: {
                  1280: { perPage: 3 },
                  1024: { perPage: 2 },
                  640: { perPage: 1 },
                },
              }}
              className="splide__pagination-custom"
            >
              {regularTestimonials.map((item) => (
                <SplideSlide key={item.id}>
                  <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3 mb-4">
                      <img
                        src={item.imgUrl}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-full"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.location}</p>
                        <div className="flex mt-1">
                          {[...Array(item.rating)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm italic line-clamp-4">
                      "{currentLang === "en" ? item.testimonial_en : item.testimonial}"
                    </p>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-50 rounded-2xl p-8 mb-16"
          >
            <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">
              {t("why_trust_us", "¿Por qué confiar en nosotros?")}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-lg text-blue-900 mb-2">
                  {t("verified_reviews", "Reseñas Verificadas")}
                </h4>
                <p className="text-gray-600 text-sm">
                  {t("verified_reviews_desc", "Todos nuestros testimonios son de clientes reales verificados")}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-lg text-blue-900 mb-2">
                  {t("diverse_cases", "Casos Diversos")}
                </h4>
                <p className="text-gray-600 text-sm">
                  {t("diverse_cases_desc", "Experiencia en todo tipo de casos migratorios")}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-lg text-blue-900 mb-2">
                  {t("proven_results", "Resultados Comprobados")}
                </h4>
                <p className="text-gray-600 text-sm">
                  {t("proven_results_desc", "95% de casos exitosos en los últimos 5 años")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-10 text-white"
          >
            <h3 className="text-3xl font-bold mb-4">
              {t("testimonial_cta_title", "Tu historia de éxito comienza aquí")}
            </h3>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              {t("testimonial_cta_desc", "Únete a las miles de familias que han logrado su sueño americano con nuestra ayuda")}
            </p>
            <WhatsAppButton
              variant="inline"
              showText={true}
              text={t("start_consultation", "CONSULTA GRATUITA")}
              className="mx-auto  text-blue-600 hover:bg-blue-50"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}