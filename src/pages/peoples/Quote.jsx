import React from "react";

const Quote = () => {
  return (
    <div className="relative w-full">
      {/* Black background for the quote */}
      <div className="bg-black text-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            "We don't just build businesses, we build legacies that stand the
            test of time."
          </blockquote>
        </div>
      </div>

      {/* Gray background for the text */}
      <div className="bg-gray-950 py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
            We are proud of living our values across our diverse operations and
            locations. As a group, we value integrity, initiative, challenge
            convention, progression, and teamwork. We strive to be an employer
            of choice and to create an environment where our people can fulfill
            their personal and professional potential.
          </p>
        </div>
      </div>

      {/* Decorative element (optional) */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
    </div>
  );
};

export default Quote;
