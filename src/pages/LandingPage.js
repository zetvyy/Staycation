import React, { useRef } from "react";
import "assets/scss/style.scss";
import Header from "parts/Header";
import Hero from "parts/Hero";
import landingPage from "json/landingPage.json";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

const LandingPage = () => {
  const refMostPicked = useRef();
  return (
    <>
      <Header />
      <Hero data={landingPage.hero} refMostPicked={refMostPicked} />
      <MostPicked data={landingPage.mostPicked} refMostPicked={refMostPicked} />
      <Categories data={landingPage.categories} />
      <Testimony data={landingPage.testimonial} />
      <Footer />
    </>
  );
};

export default LandingPage;
