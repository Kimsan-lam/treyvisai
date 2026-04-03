import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t: T } = useTranslation("global");
  return (
    <footer className="bg-[#111827] w-full px-10 py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left */}
        <div>
          <p className="text-secondary font-display text-xl font-bold tracking-widest uppercase">
            {T("footer.title")}
          </p>
          <p className="text-white/60 text-sm mt-1">
            {T("footer.copy")} {T("footer.allRightsReserved")}
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6 text-sm text-white/70">
          <a
            href="#"
            className="hover:text-secondary transition-colors duration-200"
          >
            {T("footer.privacyPolicy")}
          </a>
          <a
            href="#"
            className="hover:text-secondary transition-colors duration-200"
          >
            {T("footer.termsOfService")}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
