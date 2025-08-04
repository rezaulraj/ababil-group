import React from "react";
import HeroPartner from "./HeroPartner";
import WhyPartner from "./WhyPartner";
import OurProcess from "./OurPorcess";
import ContactPartner from "./ContactPartner";

const Partner = () => {
  return (
    <div className="min-h-screen">
      <HeroPartner />
      <WhyPartner />
      <OurProcess />
      <ContactPartner />
    </div>
  );
};

export default Partner;
