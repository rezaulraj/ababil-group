import React from "react";
import HeroAllJobs from "./HeroAllJobs";
import JobList from "./JobList";
import CTASection from "./CTASection";
import EmployeeHunter from "./EmployeeHunter";

const Alljobs = () => {
  return (
    <div className="">
      <HeroAllJobs />
      <EmployeeHunter/>
      {/* <JobList /> */}
      <CTASection />
    </div>
  );
};

export default Alljobs;
