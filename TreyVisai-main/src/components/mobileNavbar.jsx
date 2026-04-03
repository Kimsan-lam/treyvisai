import React from "react";
import { useTranslation } from "react-i18next";
import { TbWorld } from "react-icons/tb";

function MobileNavbar({ onClose }) {
  const { t: T, i18n } = useTranslation("global");
  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.setAttribute("lang", lng === "kh" ? "km" : "eng");
    localStorage.setItem("lang", lng);
  };

  return (
    <div
      className="fixed top-16 w-full bg-primary text-white z-40"
      onClick={(event) => event.stopPropagation()}
    >
      <div className=" flex flex-col gap-4 p-8">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            onClose();
            document
              .getElementById("hero")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="hover:underline hover:decoration-4 hover:underline-offset-4 hover:decoration-amber-300 cursor-pointer"
        >
          {T("nav.home")}
        </a>
        <a
          href="#about"
          onClick={(e) => {
            onClose();
            e.preventDefault();
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="hover:underline hover:decoration-4 hover:underline-offset-4 hover:decoration-amber-300 cursor-pointer"
        >
          {T("nav.about")}
        </a>
        <a
          href="#feature"
          onClick={(e) => {
            e.preventDefault();
            onClose();
            document
              .getElementById("feature")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="hover:underline hover:decoration-4 hover:underline-offset-4 hover:decoration-amber-300 cursor-pointer"
        >
          {T("nav.feature")}
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            onClose();
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="hover:underline hover:decoration-4 hover:underline-offset-4 hover:decoration-amber-300 cursor-pointer"
        >
          {T("nav.contact")}
        </a>
        {/* Language switch button */}
        <div className="flex items-center gap-1">
          <TbWorld className="text-secondary text-xl" />
          <button
            onClick={() => handleChangeLanguage("eng")}
            className={`text-secondary ${
              i18n.language === "eng"
                ? "text-secondary font-extrabold opacity-100"
                : "text-secondary opacity-40"
            }`}
          >
            ENG
          </button>
          <p className="text-secondary">|</p>
          <button
            onClick={() => handleChangeLanguage("kh")}
            className={`text-secondary ${
              i18n.language === "kh"
                ? "text-secondary font-extrabold opacity-100"
                : "text-secondary opacity-40"
            }`}
          >
            ខ្មែរ
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileNavbar;
