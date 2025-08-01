import React from "react";
import HeroCareer from "./HeroCareer";
import CareerForm from "./CareerForm";
import CareerCard from "./CareerCard";
import JobList from "../alljob/JobList";
const CareerPage = () => {
  return (
    <div className="min-h-screen">
      <HeroCareer />
      <JobList />
      <CareerForm />
      <CareerCard />
    </div>
  );
};

export default CareerPage;
