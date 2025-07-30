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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.7444846615253!2d-0.06664262337927528!3d51.517903571815665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ccc7c9cb58b%3A0x837ef31a0b99463!2s112-116%20Whitechapel%20Rd%2C%20Greater%2C%20London%20E1%201JE%2C%20UK!5e0!3m2!1sen!2sbd!4v1752492448271!5m2!1sen!2sbd"
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
            <h2 className="text-3xl font-bold text-[#25A69F] mb-6">
              Our Location
            </h2>

            {/* Address */}
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-[#25A69F]/50 rounded-full text-blue-200 mt-1">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-1">
                  Global Headquarters (GHQ)
                </h3>
                <p className="text-gray-300">
                  112-116 Whitechapel Road, London, England, E1 1JE
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-[#25A69F]/50 rounded-full text-blue-200 mt-1">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-1">
                  Operations Center :
                </h3>
                <p className="text-gray-300">
                  Olaya Towers, Tower B, Intersection of Tahlia Street & Olaya
                  Street, Riyadh, Saudi Arabia
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-[#25A69F]/50 rounded-full text-blue-200 mt-1">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-1">
                  Global Business Center :
                </h3>
                <p className="text-gray-300">
                  Globex Business Centre, The Gate, Doha, Qatar
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
              {/* <div className="flex items-center gap-3">
                <FaPhone className="text-blue-400" />
                <a
                  href="tel:+12127363100"
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  +1 (212) 736-3100
                </a>
              </div> */}
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <a
                  href="mailto:info@ababil.group"
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  info@ababil.group
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
