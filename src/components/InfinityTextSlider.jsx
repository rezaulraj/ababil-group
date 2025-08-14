import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactUsModel from "./ContactUsModel";
import { TfiAnnouncement } from "react-icons/tfi";
import Calendly from "./Calendly";

const InfinityTextSlider = ({ atTop }) => {
  const [showCalendly, setShowCalendly] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const slides = [
    {
      text: "Final Deadline Alert! UK September 2025 Intake for Artificial Intelligence : ",
      button: "Apply Now!",
      action: "apply",
    },
    {
      text: "UK Student Visa Update: New Immigration Rules Simplified: ",
      button: "Book Free Advice Session!",
      action: "book",
    },
    {
      text: "Last 10 Seats Remaining! Top UK Universities for Machine Learning & AI: ",
      button: "Apply Now!",
      action: "apply",
    },
  ];

  const extended = [...slides, ...slides];

  const handleButtonClick = (action) => {
    if (action === "apply") {
      setContactOpen(true);
    } else if (action === "book") {
      setShowCalendly(true);
    }
  };

  return (
    <div
      className={`relative overflow-hidden ${
        atTop ? "bg-[#25A69F]/50" : "bg-white"
      }`}
    >
      <div
        className="hidden sm:block sm:absolute w-52 -left-1 z-10 h-full bg-[#06334C] text-gray-100 font-medium font-poppins p-2"
        style={{
          clipPath:
            "polygon(1% 100%,0% 0%,96% 0%,96% 34%,100% 50%,96% 67%,96% 100%)",
        }}
      >
        <span className="flex items-center text-center gap-2">
          <TfiAnnouncement />
          Announcements
        </span>
      </div>

      <div className="slider-track flex whitespace-nowrap will-change-transform">
        {extended.map((slide, i) => (
          <ul
            key={i}
            className="flex-shrink-0 m-2 flex items-center justify-center rounded-lg"
          >
            <li>
              <div
                className={`flex items-center gap-5 ${
                  atTop ? "text-white" : "text-gray-800"
                } border-r px-4 font-medium`}
              >
                <p>{slide.text}</p>
                <button
                  onClick={() => handleButtonClick(slide.action)}
                  className={`${
                    atTop
                      ? "text-yellow-300 hover:text-yellow-400"
                      : "text-blue-500 hover:text-blue-600"
                  } cursor-pointer transition-colors duration-200 font-semibold`}
                >
                  {slide.button}
                </button>
              </div>
            </li>
          </ul>
        ))}
      </div>

      {contactOpen && <ContactUsModel setContactOpen={setContactOpen} />}
      {showCalendly && (
        <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />
      )}
    </div>
  );
};

export default InfinityTextSlider;
