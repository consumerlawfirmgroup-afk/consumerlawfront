import { Button } from "@heroui/button";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();
  
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 100; 
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="relative w-full h-screen">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        onError={(e) => console.error("Video error:", e)}
      >
        <source src="/videos/layers.mp4" type="video/mp4" />
        Your browser does not support video playback.
      </video>
      <div className="absolute w-full h-full bg-[#0a1a3a]/80 z-10"></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full px-6 md:px-0 max-w-4xl mx-auto text-center transform -translate-y-8 md:-translate-y-20">
        <h2 className="text-white text-xl md:text-3xl font-medium mb-4">
          {t("hero_subtitle")}
        </h2>
        <h1 className="text-white text-4xl md:text-7xl font-extrabold mb-6 leading-tight">
          {t("hero_title")}
        </h1>
        <p className="text-white text-lg md:text-2xl mb-10 max-w-3xl">
          {t("hero_desc")}
        </p>
        <Button 
          onPress={scrollToServices}
          className="bg-white text-[#0a1a3a] font-bold px-10 py-5 rounded-full text-lg md:text-xl shadow-lg hover:bg-gray-100 transition cursor-pointer"
        >
          {t("hero_button")}
        </Button>
      </div>
    </div>
  );
}