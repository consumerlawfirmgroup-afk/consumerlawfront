import { motion } from "framer-motion";

export default function PageHeader({ title, subtitle, titleSize }) {
  // Clase de tamaño de título predeterminada con ajustes para dispositivos móviles y lg
  const titleSizeClass = titleSize || "text-4xl sm:text-4xl md:text-5xl lg:text-7xl";

  return (
    <div className="relative w-full h-80 md:h-96 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 text-center text-white px-4 mt-[-20px] lg:mt-[-40px]">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${titleSizeClass} font-bold`}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-light mt-2 md:mt-4 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32V120H1392C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0V64Z" fill="#f8f6f3"/>
        </svg>
      </div>
    </div>
  );
}