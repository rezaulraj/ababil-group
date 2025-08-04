import React from "react";
import {
  FaUserCheck,
  FaHeadset,
  FaChartLine,
  FaClock,
  FaHandshake,
} from "react-icons/fa";
import { motion } from "framer-motion";

const WhyPartner = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const hoverEffect = {
    scale: 1.03,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  };

  const iconHover = {
    rotate: [0, -10, 10, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Partner With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We go beyond traditional recruitment to deliver exceptional talent
            and an unmatched partnership experience.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Card 1 */}
          <motion.div
            variants={cardItem}
            whileHover={hoverEffect}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div whileHover={iconHover} className="text-blue-600 mb-4">
              <FaUserCheck className="text-4xl" />
            </motion.div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Pre-Vetted Talent
            </h3>
            <p className="text-gray-600">
              Our rigorous 5-stage screening process ensures you only interview
              candidates who are technically proficient and culturally aligned.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardItem}
            whileHover={hoverEffect}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div whileHover={iconHover} className="text-indigo-600 mb-4">
              <FaHeadset className="text-4xl" />
            </motion.div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Dedicated Support
            </h3>
            <p className="text-gray-600">
              From initial briefing to final offer, you'll have a dedicated
              account manager ensuring a seamless hiring experience.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardItem}
            whileHover={hoverEffect}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div whileHover={iconHover} className="text-green-600 mb-4">
              <FaChartLine className="text-4xl" />
            </motion.div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Quality Guarantee
            </h3>
            <p className="text-gray-600">
              90% of candidates we present get to final interview stages, with a
              95% retention rate after 12 months.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={cardItem}
            whileHover={hoverEffect}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div whileHover={iconHover} className="text-purple-600 mb-4">
              <FaClock className="text-4xl" />
            </motion.div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Time Efficiency
            </h3>
            <p className="text-gray-600">
              Reduce your hiring timeline by up to 60%. We deliver qualified
              candidates within 72 hours of your brief.
            </p>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            variants={cardItem}
            whileHover={hoverEffect}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div whileHover={iconHover} className="text-amber-600 mb-4">
              <FaHandshake className="text-4xl" />
            </motion.div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Strategic Partnership
            </h3>
            <p className="text-gray-600">
              We align with your long-term goals, providing market insights and
              talent mapping to support your growth.
            </p>
          </motion.div>

          {/* Card 6 */}
          <motion.div
            variants={cardItem}
            whileHover={hoverEffect}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              //   transition={{
              //     duration: 8,
              //     repeat: Infinity,
              //     ease: "linear",
              //   }}
              className="text-rose-600 mb-4"
            >
              <div className="text-4xl font-bold">∞</div>
            </motion.div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              End-to-End Solutions
            </h3>
            <p className="text-gray-600">
              From executive search to volume hiring, we scale to meet all your
              recruitment needs with consistent quality.
            </p>
          </motion.div>
        </motion.div>

        {/* <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-16 text-center"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
            Start Your Talent Journey
          </button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default WhyPartner;
