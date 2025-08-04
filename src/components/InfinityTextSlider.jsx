import React, { useState } from "react";
import { Link } from "react-router-dom";
// import ContactModel from "../models/ContactModel";
import { TfiAnnouncement } from "react-icons/tfi";

const InfinityTextSlider = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const slides = [
    {
      text: "Final Deadline Alert! UK September 2025 Intake for Artificial Intelligence : ",
      button: "Apply Now!",
    },
    {
      text: "UK Student Visa Update: New Immigration Rules Simplified: ",
      button: "Book Free Advice Session!",
    },
    {
      text: "Last 10 Seats Remaining! Top UK Universities for Machine Learning & AI: ",
      button: "Apply Now!",
    },
  ];
  const extended = [...slides, ...slides];
  const IsContactButtonOpen = () => {
    setContactOpen((open) => !open);
  };
  return (
    <div className="relative overflow-hidden bg-[#25A69F]">
      <div
        className="hidden sm:block sm:absolute w-52 -left-1 z-10 h-full bg-red-900 text-gray-100 font-medium font-poppins p-2"
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
        {extended.map((text, i) => (
          <ul
            key={i}
            className="flex-shrink-0 m-2 flex items-center justify-center rounded-lg"
          >
            <li>
              <Link
                onClick={IsContactButtonOpen}
                className="flex items-center gap-5 text-white border-r px-4 font-semibold font-poppins cursor-pointer"
              >
                <p>{text.text}</p>
                <button className="text-blue-900 cursor-pointer">
                  {text.button}
                </button>
              </Link>
            </li>
          </ul>
        ))}
      </div>

      {/* {contactOpen && <ContactModel setContactOpen={setContactOpen} />} */}
    </div>
  );
};

export default InfinityTextSlider;
