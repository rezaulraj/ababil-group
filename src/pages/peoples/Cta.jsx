import React, { useState } from "react";
import { FiCalendar, FiInfo } from "react-icons/fi";
import Calendly from "../../components/Calendly";

const Cta = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  return (
    <div className="bg-[#06334C] py-16 px-4 sm:px-6 lg:px-8 shadow-xl">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
          Join thousands of satisfied clients who've accelerated their growth
          with our solutions.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setShowCalendly(true)}
            className="px-6 py-3 bg-[#1A9695] text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:bg-blue-500/30 hover:shadow-md hover:scale-[1.03] border border-blue-400/30 cursor-pointer"
          >
            <FiCalendar className="w-5 h-5" />
            Book A Call
          </button>

          <a
            href="/contact"
            className="px-6 py-3 bg-transparent text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:bg-white/10 hover:shadow-md hover:scale-[1.03] underline decoration-blue-300"
          >
            <FiInfo className="w-5 h-5" />
            More Information
          </a>
        </div>
      </div>
      <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />
    </div>
  );
};

export default Cta;
