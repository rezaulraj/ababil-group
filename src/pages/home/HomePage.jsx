import React from "react";
import HeroHome from "./HeroHome";
import ValueHome from "./ValueHome";
import OurCulture from "./OurCulture";
import Industries from "./Industies";
import BrandLogo from "./BrandLogo";
import WeHave from "./Wehave";
import EmployerSolution from "./EmployeerSolution";
import PartnerSolution from "./PartnerSolution";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroHome />
      <ValueHome />
      <OurCulture />
      <Industries />
      <EmployerSolution />
      <PartnerSolution />
      <BrandLogo />
      <WeHave />
    </div>
  );
};

export default HomePage;
