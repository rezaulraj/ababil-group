import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaFileAlt,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import { MdSubject } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    cv: null,
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowPopup(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      cv: null,
    });

    // Hide popup after 3 seconds
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 mb-10 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-2xl border border-gray-100 relative">
      {/* Header with decorative elements */}
      <div className="text-center my-10">
        <div className="relative inline-block">
          <div className="absolute -inset-2 bg-indigo-100 rounded-lg blur opacity-75"></div>
          <h2 className="relative text-3xl font-bold text-[#25A69F]">
            Join Our Team
          </h2>
        </div>
        <p className="mt-3 text-gray-600">We're excited to hear from you!</p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaUser className="text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 block w-full pl-10 p-3 transition-all duration-200 shadow-sm"
            placeholder="Full Name"
            required
          />
        </div>

        {/* Email Field */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaEnvelope className="text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 block w-full pl-10 p-3 transition-all duration-200 shadow-sm"
            placeholder="Email Address"
            required
          />
        </div>

        {/* Phone Field */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaPhone className="text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 block w-full pl-10 p-3 transition-all duration-200 shadow-sm"
            placeholder="Phone Number"
            required
          />
        </div>

        {/* Subject Field */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MdSubject className="text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 block w-full pl-10 p-3 transition-all duration-200 shadow-sm"
            placeholder="Subject"
            required
          />
        </div>

        {/* Message Field */}
        <div className="relative group">
          <div className="absolute top-3 left-3 pointer-events-none">
            <FaFileAlt className="text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 block w-full pl-10 p-3 transition-all duration-200 shadow-sm"
            placeholder="Tell us about yourself and why you'd be a great fit..."
            required
          ></textarea>
        </div>

        {/* CV Upload */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaFileAlt className="text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <div className="flex items-center">
            <input
              type="file"
              name="cv"
              onChange={handleChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-100 file:text-indigo-700 hover:file:bg-indigo-200 transition-colors file:cursor-pointer file:shadow-sm pl-10"
              accept=".pdf,.doc,.docx,.txt"
              required
            />
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Supported formats: PDF, DOC, DOCX (Max 5MB)
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center justify-center w-full px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-indigo-200"
        >
          <FaPaperPlane className="mr-3" />
          Submit Application
        </button>
      </form>

      {/* Footer note */}
      <p className="mt-6 text-xs text-center text-gray-500">
        We'll get back to you within 2 business days
      </p>

      {/* Thank You Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black opacity-50 z-50"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-xl p-8 max-w-sm mx-4 text-center shadow-2xl"
            >
              <div className="flex justify-center mb-4">
                <FaCheckCircle className="text-6xl text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600 mb-6">
                We've received your application and will contact you shortly.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CareerForm;
