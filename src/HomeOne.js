import React from "react";
import AboutUs from "./components/AboutUs";
import CardSection from "./components/cardSection/CardSection";

import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import Gallery from "./components/Gallery";
import HeroSlide from "./components/HeroSlide";
import LatestEventCarousel from "./components/LatestEventCarousel/LatestEventCarousel.jsx";
import FooterNew from "./components/FooterNew/FooterNew.jsx";
// import HeaderNew from "./components/HeaderNew/HeaderNew.jsx";
import HeaderNew2 from "./components/HeaderNew2/HeaderNew2.jsx";
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs.jsx";
// import Cards from "./components/Cards";

export default function HomeOne() {
  return (
    <div className="main-wrapper">
      <HeaderNew2 />
      <HeroSlide />
      <BreadCrumbs />
      <AboutUs />
      <CardSection />
      <LatestEventCarousel />
      <Features />
      <Testimonial />
      <Gallery />
      <FooterNew />
    </div>
  );
}
