import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaSmile } from "react-icons/fa";
import bgimage from "../../assets/home/movedo-bw-bg.jpg";

const CareerCard = () => {
  return (
    <div
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Work With Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location Card */}
          <div className="bg-white rounded-lg shadow-xl p-6 transform transition-all hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-100 p-4 rounded-full mb-4">
                <FaMapMarkerAlt className="text-indigo-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                We Are Here
              </h3>
              <p className="text-gray-600 mb-4">Find our office location</p>
              <a
                href="/contact"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                Click here to find us
              </a>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-white rounded-lg shadow-xl p-6 transform transition-all hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <FaCalendarAlt className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Weekends
              </h3>
              <p className="text-gray-600 mb-2">Friday: 9AM - 5PM</p>
              <p className="text-gray-600">Saturday: 10AM - 3PM</p>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-lg shadow-xl p-6 transform transition-all hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-100 p-4 rounded-full mb-4">
                <FaSmile className="text-yellow-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Say Hello
              </h3>
              <p className="text-gray-600">What can we do for you?</p>
              <p className="bg-yellow-100 px-6 py-2 rounded-full
              
              ">info@ababil.group</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
