import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Disclaimer from "../components/Disclaimer";
import HowItWorks from "../components/HowItWorks";
import AssessmentMethodology from "../components/AssessmentMethodology";
import BusinessBenefits from "../components/BusinessBenefits";
import AssessmentComplete from "../components/AssessmentComplete";
import UnlockAccess from "../components/UnlockAccess";

const Home = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <AssessmentMethodology />
      <BusinessBenefits />
      <AssessmentComplete />
      <UnlockAccess />
      <Disclaimer />
    </>
  );
};

export default Home;
