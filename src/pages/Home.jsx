import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import PopularFoods from "../components/PopularFoods";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <PopularFoods />
      <Testimonial/>
      <div className="max-padd-container">
      <Footer/>
      </div>
    </div>
  );
};

export default Home;
