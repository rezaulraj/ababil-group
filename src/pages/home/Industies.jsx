import React from "react";
import { motion } from "framer-motion";

import ind1 from "../../assets/home/automobile.jpg";
import ind2 from "../../assets/home/electonics.jpg";
import ind3 from "../../assets/home/real-state.jpg";
import ind4 from "../../assets/home/service-center.jpg";
import ind5 from "../../assets/home/seafood.jpg";
import ind6 from "../../assets/home/telecom.jpg";
import ind7 from "../../assets/home/motorbike.jpg";
import ind8 from "../../assets/home/manager-service.jpg";
import ind9 from "../../assets/home/security.jpg";

const images = [
  { src: ind1, title: "Automobile" },
  { src: ind2, title: "Electronics" },
  { src: ind3, title: "Real Estate" },
  { src: ind4, title: "Service Center" },
  { src: ind5, title: "Seafood" },
  { src: ind6, title: "Telecom" },
  { src: ind7, title: "Motorbike" },
  { src: ind8, title: "Manager Service" },
  { src: ind9, title: "Security" },
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

const Industries = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-blue-600 uppercase tracking-widest text-4xl font-semibold">
            INDUSTRIES WE SERVE
          </h1>

          <p className="mt-4 text-gray-600">
            For over 30 years, Ababil Group has maintained a tradition of
            quality and innovation. Learn about the industries that our company
            operates on.
          </p>
        </div>

        {/* Animated Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {images.map((itemData, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={itemData.src}
                alt={itemData.title}
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition duration-300 flex items-center justify-center">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="text-white text-xl md:text-2xl font-semibold transition duration-300"
                >
                  {itemData.title}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
