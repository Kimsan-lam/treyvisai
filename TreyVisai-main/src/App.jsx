import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Feature from "./components/feature";
import Contact from "./components/contact";
import Footer from "./components/footer";

export const App = () => {
  return (
    <div className="bg-primary">
      <Navbar />
      <Hero />
      <About />
      <Feature />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
