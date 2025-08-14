import React from "react";
import {
  FaSearch,
  FaUserFriends,
  FaFileAlt,
  FaComments,
  FaCheckCircle,
  FaUserPlus,
} from "react-icons/fa";
import { motion } from "framer-motion";

const OurProcess = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const circle = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const timeline = {
    hidden: { height: 0 },
    visible: { height: "100%" },
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From understanding your hiring goals to seamless onboarding — we
            handle every step with precision and care.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={timeline}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-indigo-600"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={container}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12 md:space-y-0"
          >
            <div className="relative md:flex items-center justify-between mb-12">
              <div className="md:w-5/12 md:pr-12 mb-8 md:mb-0 text-right">
                <motion.div variants={item}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <FaSearch className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    Discovery & Planning
                  </h3>
                  <p className="text-gray-600">
                    We conduct in-depth consultations to understand your
                    technical requirements, team dynamics, and cultural values.
                  </p>
                </motion.div>
              </div>
              <div className="hidden md:block md:w-2/12 flex justify-center relative">
                <motion.div
                  variants={circle}
                  className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold border-4 border-white shadow-lg z-10"
                >
                  1
                </motion.div>
              </div>
              <div className="md:w-5/12"></div>
            </div>

            <div className="relative md:flex items-center justify-between mb-12">
              <div className="md:w-5/12"></div>
              <div className="hidden md:block md:w-2/12 flex justify-center relative">
                <motion.div
                  variants={circle}
                  className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold border-4 border-white shadow-lg z-10"
                >
                  2
                </motion.div>
              </div>
              <div className="md:w-5/12 md:pl-12">
                <motion.div variants={item}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-4">
                    <FaUserFriends className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    Talent Sourcing
                  </h3>
                  <p className="text-gray-600">
                    Leveraging our extensive network and AI-powered tools, we
                    identify both active and passive candidates who match your
                    criteria.
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="relative md:flex items-center justify-between mb-12">
              <div className="md:w-5/12 md:pr-12 mb-8 md:mb-0 text-right">
                <motion.div variants={item}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600 mb-4">
                    <FaFileAlt className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    Rigorous Screening
                  </h3>
                  <p className="text-gray-600">
                    Each candidate undergoes technical assessments, behavioral
                    interviews, and cultural fit evaluations.
                  </p>
                </motion.div>
              </div>
              <div className="hidden md:block md:w-2/12 flex justify-center relative">
                <motion.div
                  variants={circle}
                  className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-amber-500 text-white flex items-center justify-center text-xl font-bold border-4 border-white shadow-lg z-10"
                >
                  3
                </motion.div>
              </div>
              <div className="md:w-5/12"></div>
            </div>

            <div className="relative md:flex items-center justify-between mb-12">
              <div className="md:w-5/12"></div>
              <div className="hidden md:block md:w-2/12 flex justify-center relative">
                <motion.div
                  variants={circle}
                  className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center text-xl font-bold border-4 border-white shadow-lg z-10"
                >
                  4
                </motion.div>
              </div>
              <div className="md:w-5/12 md:pl-12">
                <motion.div variants={item}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                    <FaComments className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    Client Interviews
                  </h3>
                  <p className="text-gray-600">
                    We coordinate and prepare both parties for interviews,
                    providing candidate dossiers and suggested questions.
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="relative md:flex items-center justify-between mb-12">
              <div className="md:w-5/12 md:pr-12 mb-8 md:mb-0 text-right">
                <motion.div variants={item}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-100 text-rose-600 mb-4">
                    <FaCheckCircle className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    Selection & Offer
                  </h3>
                  <p className="text-gray-600">
                    We facilitate offer negotiations, handle counteroffers, and
                    ensure smooth acceptance.
                  </p>
                </motion.div>
              </div>
              <div className="hidden md:block md:w-2/12 flex justify-center relative">
                <motion.div
                  variants={circle}
                  className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-rose-500 text-white flex items-center justify-center text-xl font-bold border-4 border-white shadow-lg z-10"
                >
                  5
                </motion.div>
              </div>
              <div className="md:w-5/12"></div>
            </div>

            <div className="relative md:flex items-center justify-between">
              <div className="md:w-5/12"></div>
              <div className="hidden md:block md:w-2/12 flex justify-center relative">
                <motion.div
                  variants={circle}
                  className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-teal-500 text-white flex items-center justify-center text-xl font-bold border-4 border-white shadow-lg z-10"
                >
                  6
                </motion.div>
              </div>
              <div className="md:w-5/12 md:pl-12">
                <motion.div variants={item}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-600 mb-4">
                    <FaUserPlus className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    Onboarding Support
                  </h3>
                  <p className="text-gray-600">
                    Our relationship continues post-hire with onboarding
                    assistance and 90-day check-ins for successful integration.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          // initial={{ opacity: 0, y: 20 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ delay: 0.4 }}
          // viewport={{ once: false, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => {
              const section = document.querySelector("#partner-with-us");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#1A9695] hover:bg-[#1A9695] text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
          >
            Join Our Recuitment Partner
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcess;
