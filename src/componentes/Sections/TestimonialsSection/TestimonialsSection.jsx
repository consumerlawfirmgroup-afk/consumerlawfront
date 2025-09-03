import { useTranslation } from "react-i18next";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import { testimonials } from "../../../locales";

export default function TestimonialsSection() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <section className="w-full py-20 bg-[#f8f6f3]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("navbar_testimonials", "Testimonios de Clientes")}
          </h2>
          <p className="text-lg text-gray-700 mb-2 font-medium max-w-2xl mx-auto">
            {t("testimonials_subtitle", "Lo que nuestros clientes dicen sobre su experiencia con nuestro equipo legal.")}
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <Splide
          aria-label={t("navbar_testimonials", "Testimonios de Clientes")}
          options={{
            type: 'loop',
            perPage: 3,
            gap: '2rem',
            pagination: false,
            arrows: false,
            drag: 'free',
            breakpoints: {
              1024: { perPage: 2 },
              640: { perPage: 1 },
            },
            autoScroll: {
              speed: 0.2,
              pauseOnHover: true,
              pauseOnFocus: true,
            },
          }}
          extensions={{ AutoScroll }}
          className="testimonials-splide"
        >
          {testimonials.map((testimonial) => (
            <SplideSlide key={testimonial.id}>
              <div className="flex flex-col bg-white border border-blue-100 rounded-xl shadow-md hover:shadow-lg transition-all p-6 w-full max-w-xs mx-auto h-full">
                <div className="flex flex-col items-center mb-4">
                  <img
                    src={testimonial.imgUrl}
                    alt={`Testimonio de ${testimonial.name}`}
                    className="w-24 h-24 object-cover rounded-full border-4 border-blue-200 shadow"
                  />
                  <div className="mt-3 text-center">
                    <p className="text-lg font-semibold text-blue-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-800 italic flex-1 mb-4 text-center">
                  "{currentLang === 'en' ? testimonial.testimonial_en : testimonial.testimonial}"
                </p>
                <div className="flex justify-center">
                  <span className="text-amber-500 text-xl">
                    {"★".repeat(testimonial.rating)}
                  </span>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}