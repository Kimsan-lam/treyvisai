import React from "react";
import { useTranslation } from "react-i18next";
import { Mail, Phone, Globe } from "lucide-react";

function Contact() {
  const [T] = useTranslation("global");
  return (
    <section id="contact" className="bg-primary w-full py-20 px-6">
      <div className="w-full bg-[#111827] rounded-2xl px-10 py-12 text-center shadow-lg max-w-7xl mx-auto">
        <h2 className="text-white text-6xl font-bold mb-10 ">
          {T("contact.getInTouch")}
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-16">
          {/* Email */}
          <a
            href={`mailto:${T("contact.email")}`}
            className="group flex flex-col items-center gap-2"
          >
            <Mail className="text-secondary w-6 h-6 transition-colors duration-200" />
            <span className="text-white group-hover:text-secondary text-xl transition-colors duration-200">
              {T("contact.email")}
            </span>
          </a>
          {/* Phone */}
          <a
            href={`tel:${T("contact.mobile").replace(/\s/g, "")}`}
            className="group flex flex-col items-center gap-2"
          >
            <Phone className="text-secondary w-6 h-6 transition-colors duration-200" />
            <span className="text-white group-hover:text-secondary text-xl transition-colors duration-200">
              {T("contact.mobile")}
            </span>
          </a>
          {/* Website */}
          <a
            href={`https://${T("contact.link")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
          >
            <Globe className="text-secondary w-6 h-6 transition-colors duration-200" />
            <span className="text-white group-hover:text-secondary text-xl transition-colors duration-200">
              {T("contact.link")}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
