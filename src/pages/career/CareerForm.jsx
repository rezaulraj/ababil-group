import React, { useState, useRef } from "react";
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
import { TbLoader } from "react-icons/tb";

const CareerForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    cv: null,
  });
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("phone", formData.phone);
    formDataObj.append("subject", formData.subject);
    formDataObj.append("message", formData.message);
    if (formData.cv) {
      formDataObj.append("cv", formData.cv);
    }

    if (formRef.current) {
      formRef.current.submit();
    }
  };

  return (
    <div
      id="apply-form"
      className="max-w-2xl mx-auto p-8 mb-10 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-2xl border border-gray-100 relative"
    >
      <div className="text-center my-10">
        <div className="relative inline-block">
          <div className="absolute -inset-2 bg-indigo-100 rounded-lg blur opacity-75"></div>
          <h2 className="relative text-3xl font-bold text-[#25A69F]">
            Join Our Team
          </h2>
        </div>
        <p className="mt-3 text-gray-600">We're excited to hear from you!</p>
      </div>

      <form
        ref={formRef}
        action="https://formsubmit.co/800386826fd1b74ec1bab79279390a7c"
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input
          type="hidden"
          name="_next"
          value="https://ababil-group.netlify.app/thank-you"
        />

        <div className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaUser className="text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 block w-full pl-10 p-3 transition-all duration-200 shadow-sm"
            placeholder="Full Name"
            required
          />
        </div>

        <div className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaEnvelope className="text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 block w-full pl-10 p-3 transition-all duration-200 shadow-sm"
            placeholder="Email Address"
            required
          />
        </div>

        <div className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaPhone className="text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 block w-full pl-10 p-3 transition-all duration-200 shadow-sm"
            placeholder="Phone Number"
            required
          />
        </div>

        <div className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MdSubject className="text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 block w-full pl-10 p-3 transition-all duration-200 shadow-sm"
            placeholder="Subject"
            required
          />
        </div>

        <div className="relative group">
          <div className="absolute top-3 left-3 pointer-events-none">
            <FaFileAlt className="text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 block w-full pl-10 p-3 transition-all duration-200 shadow-sm"
            placeholder="Tell us about yourself and why you'd be a great fit..."
            required
          ></textarea>
        </div>

        <div className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaFileAlt className="text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <div className="flex items-center">
            <label className="block w-full cursor-pointer">
              <input
                type="file"
                name="cv"
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.doc,.docx,.txt"
                required
              />
              <div className="flex items-center justify-between w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors">
                <span className="truncate mr-2">
                  {formData.cv ? formData.cv.name : "Upload your CV"}
                </span>
                <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded">
                  Browse
                </span>
              </div>
            </label>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Supported formats: PDF, DOC, DOCX (Max 5MB)
          </p>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="flex items-center justify-center w-full px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-indigo-200"
        >
          {isLoading ? (
            <TbLoader className="animate-spin w-6 h-6" />
          ) : (
            <>
              <FaPaperPlane className="mr-2" />
              Submit Application
            </>
          )}
        </button>
      </form>

      <p className="mt-6 text-xs text-center text-gray-500">
        We'll get back to you within 2 business days
      </p>

      <AnimatePresence>
        {formSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
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
                onClick={() => setFormSubmitted(false)}
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
