import React from "react";
import { useTranslation } from "react-i18next";
import { BsShopWindow } from "react-icons/bs";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { GoCheckCircle } from "react-icons/go";

function Feature() {
  const { t: T } = useTranslation("global");
  return (
    <section
      id="feature"
      className="bg-primary w-full py-20 scroll-mt-16"
    >
      <div className="flex flex-col items-center px-6 max-w-7xl mx-auto">
        <h1 className="text-white text-4xl font-extrabold text-center">
          {T("feature.title")}
        </h1>
        <div className="flex flex-col md:flex-row mt-16 gap-6 w-full">
          {/* Merchants Card */}
          <div className="flex flex-col bg-white/10 rounded-2xl w-full p-8 space-y-5">
            <div className="flex items-center gap-4">
              <div className="bg-secondary/15 rounded-lg w-14 h-14 flex items-center justify-center shrink-0">
                <BsShopWindow className="text-secondary text-3xl" />
              </div>
              <h2 className="text-white text-2xl font-bold">
                {T("feature.merchant.title")}
              </h2>
            </div>
            <div className="flex flex-col space-y-4 mt-2">
              <div className="flex items-start gap-3">
                <GoCheckCircle className="text-secondary text-xl mt-0.5 shrink-0" />
                <p className="text-amber-100">{T("feature.merchant.getListed")}</p>
              </div>
              <div className="flex items-start gap-3">
                <GoCheckCircle className="text-secondary text-xl mt-0.5 shrink-0" />
                <p className="text-amber-100">{T("feature.merchant.reachBuyers")}</p>
              </div>
              <div className="flex items-start gap-3">
                <GoCheckCircle className="text-secondary text-xl mt-0.5 shrink-0" />
                <p className="text-amber-100">{T("feature.merchant.showcaseProducts")}</p>
              </div>
              <div className="flex items-start gap-3">
                <GoCheckCircle className="text-secondary text-xl mt-0.5 shrink-0" />
                <p className="text-amber-100">{T("feature.merchant.buildReputation")}</p>
              </div>
            </div>
          </div>

          {/* Buyers Card */}
          <div className="flex flex-col bg-white/10 rounded-2xl w-full p-8 space-y-5">
            <div className="flex items-center gap-4">
              <div className="bg-secondary/15 rounded-lg w-14 h-14 flex items-center justify-center shrink-0">
                <LiaShoppingBasketSolid className="text-secondary text-4xl" />
              </div>
              <h2 className="text-white text-2xl font-bold">
                {T("feature.buyer.title")}
              </h2>
            </div>
            <div className="flex flex-col space-y-4 mt-2">
              <div className="flex items-start gap-3">
                <GoCheckCircle className="text-secondary text-xl mt-0.5 shrink-0" />
                <p className="text-amber-100">{T("feature.buyer.findMerchants")}</p>
              </div>
              <div className="flex items-start gap-3">
                <GoCheckCircle className="text-secondary text-xl mt-0.5 shrink-0" />
                <p className="text-amber-100">{T("feature.buyer.discoverProducts")}</p>
              </div>
              <div className="flex items-start gap-3">
                <GoCheckCircle className="text-secondary text-xl mt-0.5 shrink-0" />
                <p className="text-amber-100">{T("feature.buyer.supportLocal")}</p>
              </div>
              <div className="flex items-start gap-3">
                <GoCheckCircle className="text-secondary text-xl mt-0.5 shrink-0" />
                <p className="text-amber-100">{T("feature.buyer.shopWithConfidence")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
