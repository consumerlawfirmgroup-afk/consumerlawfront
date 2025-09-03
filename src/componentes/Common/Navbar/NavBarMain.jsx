import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogoSaul } from "../../../assets";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { services } from "../../../utils/servicesData";
import ModalContact from "../../modal/ModalContact";
import { useDisclosure } from "@heroui/react";

const menuVariants = {
  open: {
    opacity: 1,
    y: 0,
    height: "auto",
    transition: { duration: 0.25, ease: "easeOut" },
  },
  closed: {
    opacity: 0,
    y: -30,
    height: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

export default function NavBarMain() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const { t } = useTranslation();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
     <>
    <nav className="w-full bg-white shadow-sm sticky top-10 z-50">
      <div className="w-full flex items-center justify-between h-20 px-4 md:px-8">
      <div className="flex items-center">
  <Link to="/">
    <img
      src={LogoSaul}
      alt="Logo"
      className="h-24 md:h-28 w-auto cursor-pointer -my-2" 
    />
  </Link>
</div>
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-800 mb-1 transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-800 mb-1 transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-all ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-800 font-semibold hover:text-blue-700"
          >
            {t("navbar_home")}
          </Link>
          <Link
            to="/about"
            className="text-gray-800 font-semibold hover:text-blue-700"
          >
            {t("navbar_about")}
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="text-gray-800 font-semibold hover:text-blue-700 flex items-center gap-1"
              type="button"
            >
              {t("navbar_services")}
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div
                className="absolute left-0 top-full w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-2"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                    onClick={() => setServicesOpen(false)}
                  >
                    {t(service.titleKey)}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/team"
            className="text-gray-800 font-semibold hover:text-blue-700"
          >
            {t("navbar_team")}
          </Link>
          <Link
            to="/testimonials"
            className="text-gray-800 font-semibold hover:text-blue-700"
          >
            {t("navbar_testimonials")}
          </Link>

          <Link
            to="/contact"
            className="bg-blue-900 text-white px-4 py-2 rounded font-bold hover:bg-blue-800 transition"
            onClick={(e) => {
              e.preventDefault(); 
              onOpen();           
            }}
          >
            {t("navbar_contact")}
          </Link>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-white shadow-lg px-4 pb-4 pt-2 flex flex-col space-y-3 origin-top overflow-hidden"
            style={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
          >
            <Link
              to="/"
              className="text-gray-800 font-semibold hover:text-blue-700"
              onClick={() => setMenuOpen(false)}
            >
              {t("navbar_home")}
            </Link>
            <Link
              to="/about"
              className="text-gray-800 font-semibold hover:text-blue-700"
              onClick={() => setMenuOpen(false)}
            >
              {t("navbar_about")}
            </Link>
            <div className="flex flex-col">
              <span className="text-gray-800 font-semibold mb-1">
                {t("navbar_services")}
              </span>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(service.titleKey)}
                </Link>
              ))}
            </div>
            <Link
              to="/team"
              className="text-gray-800 font-semibold hover:text-blue-700"
              onClick={() => setMenuOpen(false)}
            >
              {t("navbar_team")}
            </Link>
            <Link
              to="/testimonials"
              className="text-gray-800 font-semibold hover:text-blue-700"
              onClick={() => setMenuOpen(false)}
            >
              {t("navbar_testimonials")}
            </Link>
            <Link
            to="/contact"
            className="bg-blue-900 text-white px-4 py-2 rounded font-bold hover:bg-blue-800 transition"
            onClick={(e) => {
              e.preventDefault(); // Evita navegación
              onOpen();           // Abre el modal
            }}
          >
            {t("navbar_contact")}
          </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
      <ModalContact isOpen={isOpen} onOpenChange={onOpenChange} />
        </>
  );
}
