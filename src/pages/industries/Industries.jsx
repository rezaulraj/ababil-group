import React from "react";
import HeroIndustries from "./HeroIndustries";
import ProgressIndustries from "./ProgressIndustrice";
import WorkforceContactForm from "./WorkforceContactForm";

const Industries = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <HeroIndustries />
      <ProgressIndustries />
      <WorkforceContactForm />
    </div>
  );
};

export default Industries;
