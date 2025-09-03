import HeroSection from "../../componentes/Sections/HeroSection/HeroSection";
import AboutSection from "../../componentes/Sections/AboutSection/AboutSection";
import ServicesSection from "../../componentes/Sections/ServicesSection/ServicesSection";
import TestimonialsSection from "../../componentes/Sections/TestimonialsSection/TestimonialsSection";
import ContactUsSection from "../../componentes/Sections/ContactSection/ContactUsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactUsSection />
    </>
  );
}