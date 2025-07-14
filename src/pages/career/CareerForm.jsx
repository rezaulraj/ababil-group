import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaFileAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { MdSubject } from "react-icons/md";

const CareerForm = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 mb-10 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-2xl border border-gray-100">
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

      <form className="space-y-6">
        {/* Name Field */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaUser className="text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <input
            type="text"
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
    </div>
  );
};

export default CareerForm;
