import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function ServiceLayout({ title, heroImg, children }) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="relative w-full h-64 md:h-80 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center overflow-hidden">
        {/* Fondo con imagen oscurecida */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {heroImg && (
          <div className="absolute inset-0">
            <img 
              src={heroImg} 
              alt={title} 
              className="w-full h-full object-cover opacity-30"
            />
          </div>
        )}
        
        {/* Contenido del héroe */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {title}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-blue-400 mx-auto"
          ></motion.div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32V120H1392C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0V64Z" fill="#f8f6f3"/>
          </svg>
        </div>
      </header>

      <main className="flex-1 bg-[#f8f6f3]">
        <div className="py-12">
          {children}
        </div>
      </main>
    </div>
  );
}