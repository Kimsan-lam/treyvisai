import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import global_eng from "./translation/eng/global.json";
import global_kh from "./translation/kh/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: true },
  lng: localStorage.getItem("lang") || "eng",
  resources: {
    eng: {
      global: global_eng,
    },
    kh: {
      global: global_kh,
    },
  },
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
