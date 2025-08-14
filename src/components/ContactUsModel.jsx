import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TbLoader } from "react-icons/tb";
import {
  MdEmail,
  MdOutlineMessage,
  MdPerson,
  MdPhone,
  MdSubject,
} from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
const ContactUsModel = ({ setContactOpen }) => {
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
          //   setContactOpen(false);
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
      className="fixed inset-0 z-50 bg-black/50 font-poppins"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-screen-sm w-full p-6">
        <div className="rounded-lg bg-white shadow-lg ">
          <div className="relative">
            <h2
              id="modalTitle"
              className="text-xl font-bold text-blue-dark sm:text-2xl p-6 text-center"
            >
              Contact Ababil Group Experts for Our Services
            </h2>

            <button
              onClick={() => setContactOpen(false)}
              type="button"
              className="absolute -right-5 -top-5 bg-gray-300 text-gray-900 rounded-full p-2 transition-colors hover:bg-red-300 hover:text-gray-600 focus:outline-none cursor-pointer"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-3 p-3">
            <div className="flex gap-3">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                  <MdPerson className="text-[#25A69F] text-2xl" />
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                  <MdEmail className="text-[#25A69F] text-2xl" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                <MdPhone className="text-[#25A69F] text-2xl" />
                Phone
              </label>
              <input
                type="tel"
                name="number"
                required
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                <MdSubject className="text-[#25A69F] text-2xl" />
                Subject
              </label>
              <input
                type="text"
                name="need"
                required
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                <MdOutlineMessage className="text-[#25A69F] text-2xl" /> Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#25A69F] hover:bg-[#25A69F]/90 text-white font-medium rounded-lg transition-all duration-300"
            >
              {submitRign ? (
                <TbLoader className="animate-spin w-4 h-4" />
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
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
                onClick={() => {
                  setShowPopup(false);
                  setContactOpen(false);
                }}
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

export default ContactUsModel;
