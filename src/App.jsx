import React from "react";
import Hero from "./sections/Hero";
import Header from "./sections/Header";
import Reviews from "./sections/Reviews";
import FastAndCrafted from "./sections/FastAndCrafted";
import Gallery from "./sections/Gallery";
import Services from "./sections/Services";
import ActionMessage from "./sections/ActionMessage";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import SmoothScroll from "./helpers/SmoothScroll";

const App = () => {
  return (
    <>
      <SmoothScroll>
        <div>
          <Header />
          <Hero />
          <Reviews />
          <FastAndCrafted />
          <Gallery />
          <Services />
          <ActionMessage />
          <Contact />
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
};

export default App;
