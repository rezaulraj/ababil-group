import React from "react";
import { MdEmail, MdPhone, MdChat } from "react-icons/md";
import ladyImage from "../../assets/contact/ladyimage.jpg";

const WhatWeCan = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src={ladyImage}
                alt="Friendly customer service representative"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-semibold">Our Support Team</h3>
                <p className="text-sm opacity-90">Always ready to help</p>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How Can We Support You?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you’re seeking details about our services, need assistance, or are exploring partnership opportunities, we’re here to help. Backed by the strength and resources of our parent company, our team is equipped to respond promptly and effectively to your needs.
            </p>

            {/* Contact Options */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                  <MdEmail className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email Us</h4>
                  <p className="text-gray-600">support@yourcompany.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-full text-green-600">
                  <MdPhone className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Call Us</h4>
                  <p className="text-gray-600">+1 (123) 456-7890</p>
                </div>
              </div>

              {/* Get in Touch Button */}
              <button className="mt-6 flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                <MdChat className="text-xl" />
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeCan;
