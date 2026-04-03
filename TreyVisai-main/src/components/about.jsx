import React from "react";
import { useTranslation } from "react-i18next";
import { PiTargetBold } from "react-icons/pi";

function About() {
  const { t: T } = useTranslation("global");
  return (
    <section id="about" className="bg-primary w-full scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 bg-white/5 rounded-xl mt-20">
        {/* About */}
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex flex-col p-6">
            <h3 className="font-display tracking-widest text-secondary mt-20 text-xl">
              {T("about.title")}
            </h3>
            <h1 className="whitespace-break-spaces text-4xl text-white font-extrabold leading-11 mt-6">
              {T("about.aboutUs")}
            </h1>
            <p className="text-amber-100 leading-6 text-lg mt-6 whitespace-pre-line">
              {T("about.description")}
            </p>
          </div>
          {/* Mission */}
          <div className="shadow-xl border-gray-300 bg-white/10 rounded-2xl h-auto md:mr-6 mt-20 p-6 md:h-96 lg:h-80 md:w-96 flex lg:justify-center pt-10">
            <div className="flex flex-col gap-4 p-6">
              <div className="flex items-center gap-4">
                <PiTargetBold className="text-secondary text-4xl" />
                <h1 className="text-white text-2xl font-bold">
                  {T("about.mission")}
                </h1>
              </div>
              <h3 className="text-amber-100 text-lg leading-6">
                {T("about.missionDescription")}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
