import React from "react";

const Quote = () => {
  return (
    <div className="relative w-full">
      <div className="bg-black text-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            "We don’t just build businesses we build legacies that endure."
          </blockquote>
        </div>
      </div>

      <div className="bg-gray-950 py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
            Across our diverse operations and global footprint, we proudly live
            out our core values: integrity, initiative, challenging convention,
            progress, and collaboration. At Ababil Group, we are committed to
            being an employer of choice fostering a culture where our people are
            empowered to grow, thrive, and reach their full potential.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
    </div>
  );
};

export default Quote;
