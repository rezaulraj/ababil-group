import React from "react";
import { motion } from "framer-motion";

import brandLogo1 from "../../assets/home/client/mercedes-benz.jpg?url";
import brandLogo2 from "../../assets/home/client/mitsubishi-motors.png?url";
import brandLogo3 from "../../assets/home/client/rangs-properties.jpg?url";
import brandLogo4 from "../../assets/home/client/mercedes-benz.jpg?url";
import brandLogo5 from "../../assets/home/client/suzuki.jpg?url";
import brandLogo6 from "../../assets/home/client/motul.jpg?url";
import brandLogo7 from "../../assets/home/client/ranksnet.jpg?url";
import brandLogo8 from "../../assets/home/client/ritt.jpg?url";
import brandLogo9 from "../../assets/home/client/workshop.jpg?url";
import brandLogo10 from "../../assets/home/client/softex.jpg?url";

const brands = [
  { logo: brandLogo1, name: "Mercedes-Benz" },
  { logo: brandLogo2, name: "Mitsubishi Motors" },
  { logo: brandLogo3, name: "Rangs Properties" },
  { logo: brandLogo4, name: "Mercedes-Benz" },
  { logo: brandLogo5, name: "Suzuki" },
  { logo: brandLogo6, name: "Motul" },
  { logo: brandLogo7, name: "Ranksnet" },
  { logo: brandLogo8, name: "Ritt" },
  { logo: brandLogo9, name: "Workshop" },
  { logo: brandLogo10, name: "Softex" },
];

const BrandLogo = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header with Gradient Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#25A69F] via-[#25A69F]/80 to-[#25A69F] mb-4">
            Ababil SBUs & BRANDS
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-xl mx-auto">
            Ababil Group brings together a strong network of specialized units
            ranging from education consultancy and language training to manpower
            supply and vocational skill development delivering trusted solutions
            through strategic partnerships and proven expertise.
          </p>
        </motion.div>

        {/* Brand Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="aspect-square bg-white/5 backdrop-blur rounded-xl p-6 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-pink-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-16 object-contain object-center filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 z-10"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white text-center py-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-sm font-medium z-20">
                  {brand.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogo;
