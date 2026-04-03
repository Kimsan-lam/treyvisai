import React from "react";
import { useTranslation } from "react-i18next";
import HeroPhoto from "../assets/hero.png";

function Hero() {
  const { t: T } = useTranslation("global");
  return (
    <section id="hero" className="w-full bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row h-full md:items-center">
          <div className="flex flex-col space-y-4 flex-1 lg:ml-20">
            <h1 className="font-bold text-6xl text-white mt-20">
              {T("hero.title")}
            </h1>
            <h1 className="font-bold text-secondary text-6xl">
              {T("hero.title2")}
            </h1>
            <h1 className="font-bold text-6xl text-white">
              {T("hero.title3")}
            </h1>
            <p className=" whitespace-pre-line text-amber-100 mt-10">
              {T("hero.subtitle")}
            </p>
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-secondary text-black px-4 py-2 rounded w-40 mt-10 hover:shadow-[0_0_20px_rgba(253,224,71,0.5)] transition-shadow duration-300"
            >
              {T("hero.button")}
            </button>
          </div>

          <div className="md:flex items-center justify-center flex-1 lg:mr-20 mr-6 mt-4 md:mt-16 border-white/20 border-2 rounded-3xl overflow-hidden">
            <img
              src={HeroPhoto}
              alt="Hero"
              className="h-[500px] w-full md:h-[500px] md:w-[380px] lg:w-full lg:h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
