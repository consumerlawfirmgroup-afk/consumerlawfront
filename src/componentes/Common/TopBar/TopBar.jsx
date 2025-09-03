import { useTranslation } from "react-i18next";

export default function TopBar() {
  const { i18n } = useTranslation();

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 h-10 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-center md:justify-end text-sm text-gray-700">
        <div className="flex items-center gap-6">
          <button
            className="px-2 py-1 rounded hover:bg-gray-100"
            onClick={() => i18n.changeLanguage("es")}
          >
            Español
          </button>
          <button
            className="px-2 py-1 rounded hover:bg-gray-100"
            onClick={() => i18n.changeLanguage("en")}
          >
            English
          </button>
        </div>
      </div>
    </div>
  );
}