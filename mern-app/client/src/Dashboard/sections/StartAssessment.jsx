import React from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import StepperProgress from "../sections/StartAssessment/StepperProgress";
import RAMQualificationCheck from "../sections/StartAssessment/RAMQualificationCheck";
import ProblematicPackagingCheck from "../sections/StartAssessment/ProblematicPackagingCheck";
import MaterialType from "../sections/StartAssessment/MaterialType";

const steps = [
  { id: 1, title: "Material", subtitle: "Material details" },
  { id: 2, title: "Classification", subtitle: "Classification process" },
  { id: 3, title: "Collection", subtitle: "Collection process" },
  { id: 4, title: "Sortation", subtitle: "Sorting process" },
  { id: 5, title: "Reprocessing", subtitle: "Reprocessing steps" },
  { id: 6, title: "Application", subtitle: "Final application" },
];

const StartAssessment = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 px-10 py-8">
        <StepperProgress steps={steps} currentStep={1} progress={8} />

        <RAMQualificationCheck />
        <ProblematicPackagingCheck />
        <MaterialType />
      </div>

      <Footer />
    </>
  );
};

export default StartAssessment;
