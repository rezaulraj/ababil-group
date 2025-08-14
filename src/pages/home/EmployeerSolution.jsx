import React, { useState } from "react";
import {
  FiUsers,
  FiBarChart2,
  FiAward,
  FiClock,
  FiHeart,
  FiDollarSign,
} from "react-icons/fi";
import Calendly from "../../components/Calendly";

const EmployerSolution = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  return (
    <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transform Your Workplace with{" "}
            <span className="text-[#1A9695]">Smart Solutions</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Empower your team, streamline operations, and create an engaging
            work environment with our comprehensive employer solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-700 hover:border-teal-400/30">
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-teal-900/30 text-teal-400">
                <FiUsers className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Talent Acquisition
              </h3>
              <p className="text-gray-300 mb-6">
                Attract top talent with our streamlined hiring platform that
                makes recruitment faster and more efficient.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-700 hover:border-blue-400/30">
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-blue-900/30 text-blue-400">
                <FiBarChart2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Performance Analytics
              </h3>
              <p className="text-gray-300 mb-6">
                Gain valuable insights with real-time analytics to help your
                team perform at their best.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-700 hover:border-purple-400/30">
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-purple-900/30 text-purple-400">
                <FiAward className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Employee Recognition
              </h3>
              <p className="text-gray-300 mb-6">
                Boost morale with our recognition platform that celebrates
                employee achievements.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-700 hover:border-amber-400/30">
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-amber-900/30 text-amber-400">
                <FiClock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Time Management
              </h3>
              <p className="text-gray-300 mb-6">
                Simplify scheduling and time tracking with our intuitive
                workforce management tools.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-700 hover:border-pink-400/30">
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-pink-900/30 text-pink-400">
                <FiHeart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Wellness Programs
              </h3>
              <p className="text-gray-300 mb-6">
                Support your team's wellbeing with customizable wellness
                initiatives and benefits.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-700 hover:border-indigo-400/30">
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-indigo-900/30 text-indigo-400">
                <FiDollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Compensation Tools
              </h3>
              <p className="text-gray-300 mb-6">
                Competitive salary benchmarking and benefits administration made
                simple.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Ready to transform your workplace?
          </h3>
          <div className="flex flex-col items-center justify-center sm:flex-row gap-4">
            <button
              onClick={() => setShowCalendly(true)}
              className="px-8 py-3 bg-[#1A9695] text-white rounded-lg font-bold text-lg transition-all duration-300 hover:bg-teal-400 hover:shadow-lg hover:scale-105 transform shadow-teal-500/20 hover:shadow-teal-400/30 cursor-pointer"
            >
              Schedule a Free Consultation
            </button>
            <a
              href="/workforce-solutions"
              className="px-6 py-3 bg-white text-[#1A9695] border border-indigo-200 rounded-lg font-medium flex items-center justify-center transition-all duration-300 hover:bg-indigo-50 hover:shadow-md hover:scale-105 cursor-pointer"
            >
              More Information
            </a>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            Join 1,000+ companies revolutionizing their HR processes
          </p>
        </div>
      </div>
      <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />
    </div>
  );
};

export default EmployerSolution;
