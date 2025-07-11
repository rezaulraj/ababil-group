import React from "react";
import HeroCareer from "./HeroCareer";
import CareerForm from "./CareerForm";
import CareerCard from "./CareerCard";

const CareerPage = () => {
  return (
    <div className="min-h-screen">
      <HeroCareer />
      <CareerForm />
      <CareerCard />
    </div>
  );
};

export default CareerPage;
