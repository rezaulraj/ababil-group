import React from "react";
import { motion } from "framer-motion";
import {
  FaCar,
  FaIndustry,
  FaTractor,
  FaCut,
  FaUtensils,
  FaBroom,
  FaHardHat,
  FaTshirt,
  FaTruck,
} from "react-icons/fa";

import ind1 from "../../assets/AbabilGroup/Home/ababilindustris/AutoMechanic.jpg?url";
import ind2 from "../../assets/AbabilGroup/Home/ababilindustris/manufacturing.jpg?url";
import ind3 from "../../assets/AbabilGroup/Home/ababilindustris/Agriculture.jpg?url";
import ind4 from "../../assets/AbabilGroup/Home/ababilindustris/Beautician.jpeg?url";
import ind5 from "../../assets/AbabilGroup/Home/ababilindustris/Chef.jpg?url";
import ind6 from "../../assets/AbabilGroup/Home/ababilindustris/Cleaner.jpeg?url";
import ind7 from "../../assets/AbabilGroup/Home/ababilindustris/Construciton.jpg?url";
import ind8 from "../../assets/AbabilGroup/Home/ababilindustris/Germents.jpg?url";
import ind9 from "../../assets/AbabilGroup/Home/ababilindustris/HeavyTruckDriver.jpg?url";

const industries = [
  {
    src: ind1,
    title: "Automobile",
    icon: <FaCar className="text-4xl mb-4 text-white" />,
    description: "Skilled professionals for automotive repair and maintenance",
  },
  {
    src: ind2,
    title: "Manufacturing",
    icon: <FaIndustry className="text-4xl mb-4 text-white" />,
    description: "Workforce solutions for production and assembly lines",
  },
  {
    src: ind3,
    title: "Agriculture",
    icon: <FaTractor className="text-4xl mb-4 text-white" />,
    description: "Experienced workers for farming and cultivation",
  },
  {
    src: ind4,
    title: "Beautician",
    icon: <FaCut className="text-4xl mb-4 text-white" />,
    description: "Trained beauty and wellness professionals",
  },
  {
    src: ind5,
    title: "Chef",
    icon: <FaUtensils className="text-4xl mb-4 text-white" />,
    description: "Culinary experts for restaurants and food services",
  },
  {
    src: ind6,
    title: "Cleaner",
    icon: <FaBroom className="text-4xl mb-4 text-white" />,
    description: "Professional cleaning and maintenance staff",
  },
  {
    src: ind7,
    title: "Construction",
    icon: <FaHardHat className="text-4xl mb-4 text-white" />,
    description: "Skilled laborers for building and infrastructure projects",
  },
  {
    src: ind8,
    title: "Garments",
    icon: <FaTshirt className="text-4xl mb-4 text-white" />,
    description: "Workforce for textile and apparel manufacturing",
  },
  {
    src: ind9,
    title: "Heavy Truck Driver",
    icon: <FaTruck className="text-4xl mb-4 text-white" />,
    description: "Licensed operators for heavy vehicle transportation",
  },
];

// Animation variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const flipVariants = {
  hover: {
    rotateY: 180,
    transition: { duration: 0.5 },
  },
};

const contentVariants = {
  front: { rotateY: 0 },
  back: { rotateY: 180 },
};

const Industries = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-[#1A9695] uppercase tracking-widest text-4xl font-semibold">
            INDUSTRIES WE SERVE
          </h1>

          <p className="mt-4 text-gray-600">
            For over a decade, Ababil Group has upheld a legacy of quality,
            innovation, and excellence. Explore the diverse industries where we
            continue to make a lasting impact.
          </p>
        </div>

        {/* Animated Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative perspective-1000"
              whileHover="hover"
            >
              <div className="relative perspective-1000 group">
                <div className="relative w-full h-96 transition-transform duration-500 preserve-3d group-hover:rotate-y-180">
                  {/* Front side */}
                  <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg overflow-hidden">
                    <img
                      src={industry.src}
                      alt={industry.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 text-center">
                      {industry.icon}
                      <h3 className="text-white text-xl font-semibold">
                        {industry.title}
                      </h3>
                    </div>
                  </div>

                  {/* Back side */}
                  <div className="absolute w-full h-full backface-hidden bg-[#1A9695] rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center rotate-y-180">
                    {industry.icon}
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {industry.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
