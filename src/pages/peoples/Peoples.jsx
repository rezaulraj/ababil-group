import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

// IMAGES
import people1 from "../../assets/ababil/people1.jpg?url";
import people2 from "../../assets/ababil/people2.jpg?url";
import people3 from "../../assets/ababil/people3.jpg?url";
import people4 from "../../assets/ababil/people4.jpg?url";
import people5 from "../../assets/ababil/people5.jpg?url";
import people6 from "../../assets/ababil/people6.jpg?url";
import people7 from "../../assets/ababil/people7.jpg?url";
import people8 from "../../assets/ababil/people8.jpg?url";

// DATA
const peoples = [
  {
    image: people1,
    degination: "CHAIRMAN",
    name: "Abdur Rouf Chowdhury",
    company: "RANCON",
  },
  {
    image: people2,
    degination: "GROUP Managing Director",
    name: "Romo Rouf Chowdhury",
    company: "RANCON",
  },
  {
    image: people3,
    degination: "Director",
    name: "Someone Example",
    company: "RANCON",
  },
  {
    image: people4,
    degination: "MANAGING DIRECTOR",
    name: "Farhana Karim",
    company: "RANCON",
  },
  {
    image: people5,
    degination: "DIRECTOR",
    name: "John Doe",
    company: "RANCON",
  },
  {
    image: people6,
    degination: "HEAD OF OPERATIONS",
    name: "Jane Doe",
    company: "RANCON",
  },
  {
    image: people7,
    degination: "CTO",
    name: "Someone Tech",
    company: "RANCON",
  },
  {
    image: people8,
    degination: "CFO",
    name: "Someone Finance",
    company: "RANCON",
  },
];

const Peoples = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-20">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
        Meet Our Leadership
      </h2>
      <div className="space-y-32">
        {peoples.map((person, index) => (
          <PersonCard key={index} person={person} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Peoples;

// Card Component
const PersonCard = ({ person, index }) => {
  const isEven = index % 2 !== 0;
  const sectionRef = useRef(null);

  // Scroll progress relative to card
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // [element top to bottom of viewport]
  });

  // Move card from top to bottom within image area
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]); // animate full image area

  return (
    <div
      ref={sectionRef}
      className="relative h-full flex justify-center items-center"
    >
      {/* Image container */}
      <div className="relative w-full max-w-4xl h-full">
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />

        {/* Animated card */}
        <motion.div
          style={{ y }}
          className={`absolute w-96 p-6 bg-white rounded-xl shadow-2xl z-30 top-1/2 -translate-y-1/2 ${
            isEven ? "-left-40" : "-right-40"
          }`}
        >
          <p className="text-sm text-gray-500 uppercase">{person.degination}</p>
          <h3 className="text-xl font-semibold text-gray-800">{person.name}</h3>
          <p className="text-gray-600">{person.company}</p>
          <div className="mt-3 text-blue-600 flex items-center gap-2">
            <FaLinkedin />
            <span>LinkedIn</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
