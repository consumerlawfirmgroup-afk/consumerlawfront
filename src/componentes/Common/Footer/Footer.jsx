import { facebook, instagram, tiktok, LogoSaul } from "../../../assets/index";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

return (
  <footer className="w-full bg-[#0a1a3a] border-t border-gray-200/20">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Logo y nombre - primera columna */}
        <div className="flex flex-col items-center lg:items-start">
          <img src={LogoSaul} alt="Consumer Law Firm Logo" className="h-40 md:h-52 mb-5" />
          <h3 className="text-2xl font-bold text-white mb-2">
            {t("footer_lawfirm")}
          </h3>
          <p className="text-gray-300 text-sm whitespace-pre-line text-center lg:text-left">
            {t("footer_specialists")}
          </p>
        </div>

        {/* Contacto - columna central */}
        <div className="flex flex-col items-center self-center">
          <h4 className="text-lg font-semibold text-white mb-4">
            {t("footer_contact")}
          </h4>
          <p className="text-gray-300 mb-1">{t("footer_tel")}</p>
          <p className="text-gray-300 mb-1">{t("footer_email")}</p>
          <p className="text-gray-300 mb-3">{t("footer_address")}</p>
          <div className="flex gap-5 mt-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src={facebook} alt="Facebook" className="w-7 h-7 opacity-80 hover:opacity-100 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={instagram} alt="Instagram" className="w-7 h-7 opacity-80 hover:opacity-100 transition" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="Tiktok">
              <img src={tiktok} alt="Tiktok" className="w-7 h-7 opacity-80 hover:opacity-100 transition" />
            </a>
          </div>
        </div>

        {/* Aviso legal - tercera columna */}
        <div className="flex flex-col items-center lg:items-end self-center">
          <h4 className="text-lg font-semibold text-white mb-3">
            {t("footer_legal")}
          </h4>
          <p className="text-gray-400 text-sm mb-2 text-center lg:text-right max-w-xs">
            {t("footer_disclaimer")}
          </p>
          <p className="text-gray-400 text-xs mt-2">
            © {currentYear} {t("footer_lawfirm")}. {t("footer_rights")}
          </p>
        </div>
      </div>
    </div>
  </footer>
);
}