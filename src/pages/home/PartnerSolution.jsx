import React, { useState } from "react";
import {
  FiUsers,
  FiBriefcase,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import { LuHeartHandshake } from "react-icons/lu";
import Calendly from "../../components/Calendly";

const PartnerSolution = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-white text-[#1A9695] rounded-full font-medium mb-4 shadow-sm">
            Partnership Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Grow Together with{" "}
            <span className="text-[#1A9695]">Ababil Group</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Unlock new opportunities through strategic partnerships with our
            innovative solutions and dedicated team.
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Benefit 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center w-14 h-14 mb-6 rounded-full bg-indigo-100 text-indigo-600">
              <LuHeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Strategic Alliances
            </h3>
            <p className="text-gray-600">
              Collaborate with industry leaders to expand your market reach and
              capabilities.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center w-14 h-14 mb-6 rounded-full bg-blue-100 text-blue-600">
              <FiUsers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Shared Resources
            </h3>
            <p className="text-gray-600">
              Access our network, technology, and expertise to accelerate your
              growth.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center w-14 h-14 mb-6 rounded-full bg-purple-100 text-purple-600">
              <FiBriefcase className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Joint Ventures
            </h3>
            <p className="text-gray-600">
              Create new business opportunities through mutually beneficial
              partnerships.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center w-14 h-14 mb-6 rounded-full bg-green-100 text-green-600">
              <FiCheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Proven Success
            </h3>
            <p className="text-gray-600">
              Join our network of satisfied partners achieving remarkable
              results.
            </p>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 bg-gradient-to-br from-[#1A9695] to-teal-600 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Partner With Us?</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FiCheckCircle className="flex-shrink-0 mt-1 mr-3 text-blue-200" />
                  <span>15+ years of industry experience</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="flex-shrink-0 mt-1 mr-3 text-blue-200" />
                  <span>150+ successful partnerships</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="flex-shrink-0 mt-1 mr-3 text-blue-200" />
                  <span>Dedicated partnership support team</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="flex-shrink-0 mt-1 mr-3 text-blue-200" />
                  <span>Flexible collaboration models</span>
                </li>
              </ul>
            </div>

            <div className="p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Start Your Partnership Journey
              </h3>
              <p className="text-gray-600 mb-8">
                Discover how partnering with Ababil Group can transform your
                business and open new possibilities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowCalendly(true)}
                  className="px-6 py-3 bg-[#1A9695] text-white rounded-lg font-medium flex items-center justify-center transition-all duration-300 hover:bg-teal-700 hover:shadow-md hover:scale-105 cursor-pointer"
                >
                  Meet Our Team <FiArrowRight className="ml-2" />
                </button>

                <a
                  href="/partner-with-us"
                  className="px-6 py-3 bg-white text-[#1A9695] border border-indigo-200 rounded-lg font-medium flex items-center justify-center transition-all duration-300 hover:bg-indigo-50 hover:shadow-md hover:scale-105 cursor-pointer"
                >
                  More Information
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
          <blockquote className="text-center">
            <p className="text-xl text-gray-700 italic mb-6">
              "Our partnership with Ababil Group has been transformative. Their
              expertise and collaborative approach helped us expand into three
              new markets within just 18 months."
            </p>
            <footer className="text-gray-900 font-medium">
              — Sarah Johnson, CEO of Ted Solutions
            </footer>
          </blockquote>
        </div>
      </div>
      <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />
    </div>
  );
};

export default PartnerSolution;
