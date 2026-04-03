import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import MobileNavbar from "./mobileNavbar";
import { TbWorld } from "react-icons/tb";

function Navbar() {
  const { t: T, i18n } = useTranslation("global");
  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.setAttribute("lang", lng === "kh" ? "km" : "eng");
    localStorage.setItem("lang", lng);
  };
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <nav className="fixed top-0 left-0 w-full flex items-center justify-between z-50 bg-[#0c162d] text-white h-16 px-6">
          {/* Logo */}
          <h1 className="font-bold text-2xl text-secondary font-display whitespace-nowrap">
            {T("nav.title")}
          </h1>

          {/* Hamburger (mobile only) */}
          <div className="relative md:hidden w-6 h-6 mt-2">
            <button
              onClick={() => setOpen(true)}
              className={`absolute inset-0 flex flex-col transition-all duration-300 ease-out
            ${open ? "opacity-0 pointer-events-none" : "opacity-100"}`}
            >
              <span className="w-6 h-0.5 bg-white block mb-1" />
              <span className="w-6 h-0.5 bg-white block mb-1" />
              <span className="w-6 h-0.5 bg-white block" />
            </button>
            <button
              onClick={() => setOpen(false)}
              className={`absolute inset-0 flex items-center justify-center text-2xl transition-all duration-300 ease-out -mt-2.5
            ${open ? "opacity-100" : "opacity-0 pointer-events-none"} hover:text-amber-300`}
            >
              ✕
            </button>
          </div>

          {/* Desktop nav links (center) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 whitespace-nowrap">
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" }); }}
              className="hover:underline hover:decoration-4 hover:underline-offset-4 hover:decoration-amber-300 cursor-pointer"
            >
              {T("nav.home")}
            </a>
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); }}
              className="hover:underline hover:decoration-4 hover:underline-offset-4 hover:decoration-amber-300 cursor-pointer"
            >
              {T("nav.about")}
            </a>
            <a
              href="#feature"
              onClick={(e) => { e.preventDefault(); document.getElementById("feature")?.scrollIntoView({ behavior: "smooth" }); }}
              className="hover:underline hover:decoration-4 hover:underline-offset-4 hover:decoration-amber-300 cursor-pointer"
            >
              {T("nav.feature")}
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="hover:underline hover:decoration-4 hover:underline-offset-4 hover:decoration-amber-300 cursor-pointer"
            >
              {T("nav.contact")}
            </a>
          </div>

          {/* Language switcher (right) */}
          <div className="hidden md:flex items-center gap-1 rounded-md bg-white/20 px-3 py-0 h-7">
            <TbWorld className="text-secondary text-xl" />
            <button
              onClick={() => handleChangeLanguage("eng")}
              className={`ml-2 transition-opacity ${
                i18n.language === "eng"
                  ? "text-secondary font-extrabold opacity-100"
                  : "text-secondary opacity-40"
              }`}
            >
              ENG
            </button>
            <p className="text-secondary ml-2">|</p>
            <button
              onClick={() => handleChangeLanguage("kh")}
              className={`ml-2 text-sm leading-none transition-opacity ${
                i18n.language === "kh"
                  ? "text-secondary font-extrabold opacity-100"
                  : "text-secondary opacity-40"
              }`}
            >
              ខ្មែរ
            </button>
          </div>
        </nav>
        {open && <MobileNavbar onClose={() => setOpen(false)} />}
      </div>
    </>
  );
}

export default Navbar;
