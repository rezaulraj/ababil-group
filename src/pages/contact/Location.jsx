import React from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaCalendarAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Location = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Google Maps Iframe */}
          <div className="w-full lg:w-1/2 h-96 lg:h-auto">
            <div className="rounded-xl overflow-hidden shadow-xl h-full border-2 border-blue-500/30">
              <iframe
                title="Business Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209132773!2d-73.9878449241645!3d40.74844097138979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1712345678901!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>

          {/* Right Side - Location Info */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">
              Our Location
            </h2>

            {/* Address */}
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-blue-900/50 rounded-full text-blue-400 mt-1">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-1">
                  Address
                </h3>
                <p className="text-gray-300">
                  20 W 34th St, New York, NY 10001, United States
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-emerald-900/50 rounded-full text-emerald-400 mt-1">
                <FaClock className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  Working Hours
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span className="text-red-400">Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Business Days */}
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-purple-900/50 rounded-full text-purple-400 mt-1">
                <FaCalendarAlt className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-1">
                  Business Days
                </h3>
                <p className="text-gray-300">
                  We're open 6 days a week (Closed on Sundays and public
                  holidays)
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-400" />
                <a
                  href="tel:+12127363100"
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  +1 (212) 736-3100
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <a
                  href="mailto:info@example.com"
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  info@example.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
