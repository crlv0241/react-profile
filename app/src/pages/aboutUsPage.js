import React from "react";
import AboutSection from "../components/aboutSection";
import ServicesSection from "../components/servicesSection";
import FaqSection from "../components/faqSection";

const AboutUsPage = () => {
  return (
    <div className="aboutUsPage">
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </div>
  );
};

export default AboutUsPage;
