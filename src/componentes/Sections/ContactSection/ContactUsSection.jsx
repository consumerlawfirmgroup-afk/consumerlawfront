import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContactUsSection() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    alert(t("contact_send") + ". ¡Gracias!");
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="w-full py-20 bg-[#fcfbfa]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {/* Formulario de contacto */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {t("contact_title")}
            </h2>
            <p className="text-gray-700 mb-6">
              {t("contact_subtitle")}
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder={t("contact_first_name")}
                  className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder={t("contact_last_name")}
                  className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder={t("contact_email")}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder={t("contact_phone")}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                value={form.phone}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder={t("contact_message")}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-2 rounded font-bold hover:bg-blue-800 transition"
              >
                {t("contact_send")}
              </button>
            </form>
          </div>


          <div className="bg-[#e9ecf3] p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              {t("whychooseus_title")}
            </h3>
            <p className="text-gray-700 mb-6">
              {t("whychooseus_subtitle")}
            </p>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <span className="text-blue-700 text-xl">★</span>
                <div>
                  <p className="font-semibold text-gray-900">{t("whychooseus_reputation")}</p>
                  <p className="text-gray-600 text-sm">{t("whychooseus_reputation_desc")}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-700 text-xl">💬</span>
                <div>
                  <p className="font-semibold text-gray-900">{t("whychooseus_convenience")}</p>
                  <p className="text-gray-600 text-sm">{t("whychooseus_convenience_desc")}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-700 text-xl">🤝</span>
                <div>
                  <p className="font-semibold text-gray-900">{t("whychooseus_compassion")}</p>
                  <p className="text-gray-600 text-sm">{t("whychooseus_compassion_desc")}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-700 text-xl">🏆</span>
                <div>
                  <p className="font-semibold text-gray-900">{t("whychooseus_experience")}</p>
                  <p className="text-gray-600 text-sm">{t("whychooseus_experience_desc")}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}   