import React, { useRef, useState } from "react";
import {
  FaSearch,
  FaUsers,
  FaHandshake,
  FaClock,
  FaPhoneAlt,
  FaBuilding,
  FaUser,
  FaEnvelope,
  FaClipboardList,
  FaCheckCircle,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { TbLoader } from "react-icons/tb";
import employeeImage from "../../assets/AbabilGroup/Contact.jpg?url";
import { AnimatePresence, motion } from "framer-motion";
import WorkforceContactForm from "../industries/WorkforceContactForm";
const EmployeeHunter = () => {
  const [submitRign, setSubmitRing] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const form = useRef();
  const publicKey = "vqs8cPefiJoNphzzB";
  const serviceId = "service_55ubscz";
  const templeteId = "template_be7y4a9";
  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitRing(true);
    emailjs
      .sendForm(serviceId, templeteId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setShowPopup(true);
          setSubmitRing(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert(
            "Someting is error sending data do not panic we will resolve soon. Please Email us"
          );
          setSubmitRing(false);
        }
      );
  };
  return (
    <div
      id="workforce-solution"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16">
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Struggling to Find{" "}
            <span className="text-[#06334C]">Quality Employees?</span> We Can
            Help!
          </h1>
          <p className="text-xl text-[#06334C] font-semibold mb-8">
            Ababil Group specializes in connecting businesses with exceptional
            non-technical talent across all industries.
          </p>
          <button
            onClick={() => {
              const section = document.querySelector("#work-force");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#06334C] hover:bg-[#06334C]/90 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition duration-300"
          >
            <FaPhoneAlt /> Get Staffing Solutions Now
          </button>
        </div>
        <div className="lg:w-1/2">
          <img
            src={employeeImage}
            alt="Professional team working together"
            className="rounded-xl shadow-xl w-full"
          />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Why Workforce Solutions With Ababil Group?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition duration-300">
            <FaSearch className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Precision Matching</h3>
            <p className="text-gray-600">
              We find candidates who align perfectly with your company values
              and requirements.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition duration-300">
            <FaUsers className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Extensive Network</h3>
            <p className="text-gray-600">
              Access to thousands of pre-screened candidates across all
              non-technical roles.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition duration-300">
            <FaClock className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Fast Results</h3>
            <p className="text-gray-600">
              Reduce your hiring time by up to 70% with our efficient
              recruitment process.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition duration-300">
            <FaHandshake className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Guaranteed Fit</h3>
            <p className="text-gray-600">
              Our replacement policy ensures you're completely satisfied with
              your new hire.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      {/* <div id="contact-staf" className="bg-blue-50 rounded-xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Get Your Staffing Solution
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Fill out the form below and we'll contact you within 24 hours
        </p>

        <form ref={form} onSubmit={sendEmail} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Company Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaBuilding className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="company"
                  name="company_name"
                  placeholder="Your organization"
                  className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 border"
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 border"
                />
              </div>
            </div>

            <div className="relative md:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Work Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@company.com"
                  className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 border"
                />
              </div>
            </div>

            <div className="relative md:col-span-2">
              <label
                htmlFor="needs"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Hiring Needs
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaClipboardList className="text-gray-400" />
                </div>
                <select
                  id="needs"
                  name="need"
                  className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 border appearance-none bg-white"
                >
                  <option>Select your hiring needs</option>
                  <option value={"Administrative-Staff"}>
                    Administrative Staff
                  </option>
                  <option value={"Customer-Service"}>Customer Service</option>
                  <option value={"Sales Professionals"}>
                    Sales Professionals
                  </option>
                  <option value={"Operations Staff"}>Operations Staff</option>
                  <option value={"Management Roles"}>Management Roles</option>
                  <option value={"Other Roles"}>Other Roles</option>
                </select>
              </div>
            </div>

            <div className="relative md:col-span-2">
              <label
                htmlFor="requirements"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Specific Requirements
              </label>
              <textarea
                id="requirements"
                name="message"
                rows="4"
                placeholder="Tell us about your ideal candidates, required skills, timeline, etc."
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 border"
              ></textarea>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#06334C] hover:bg-[#06334C]/90 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center gap-2 transition duration-300"
            >
              {submitRign ? (
                <TbLoader className="animate-spin w-4 h-4" />
              ) : (
                "Request Talent Consultation"
              )}
            </button>
          </div>
        </form>
      </div> */}
      <WorkforceContactForm />

      {/* Final CTA */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Don't Let Staffing Shortages Slow You Down
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Our recruitment experts are ready to help you build your perfect team
        </p>
      </div>
      <AnimatePresence>
        {showPopup && (
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

export default EmployeeHunter;
