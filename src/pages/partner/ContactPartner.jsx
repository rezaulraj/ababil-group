import React, { useRef, useState } from "react";
import { FaBuilding, FaCheckCircle } from "react-icons/fa";
import bgPartner from "../../assets/partner.avif?url";
import {
  MdEmail,
  MdOutlineMessage,
  MdPerson,
  MdPhone,
  MdSubject,
} from "react-icons/md";
import { FaX } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { TbLoader } from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";
const ContactPartner = () => {
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
    <>
      <section
        id="partner-with-us"
        className="py-20 px-4 sm:px-8 bg-white text-gray-800 relative"
      >
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${bgPartner})`,
              filter: "brightness(0.4)",
            }}
          />
          <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply" />
        </div>
        <div className="max-w-3xl mx-auto relative z-20">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
            <h2 className="text-3xl font-bold text-center text-[#25A69F] mb-6">
              Partner Contact Form
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              {/* Name */}
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

                {/* Email */}
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
              <div className="flex gap-3">
                <div className="w-full">
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
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                    <FaBuilding className="text-[#25A69F] text-2xl" />
                    Company Name
                  </label>
                  <input
                    type="company"
                    name="company"
                    required
                    className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Subject */}
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

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                  <MdOutlineMessage className="text-[#25A69F] text-2xl" />{" "}
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              {/* Submit Button */}
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
      </section>
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
      {/* Inline Style for Animation */}
      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default ContactPartner;
