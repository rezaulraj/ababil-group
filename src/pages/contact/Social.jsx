import React, { useRef, useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaPaperPlane,
  FaPhone,
  FaTiktok,
  FaCheckCircle,
} from "react-icons/fa";
import { MdEmail, MdPerson, MdSubject } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { FaX } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { TbLoader } from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";

const Social = () => {
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
        id="contact-form"
        className="py-20 px-4 sm:px-8 bg-white text-gray-800"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
            <h2 className="text-3xl font-bold text-[#25A69F] mb-6">
              Get in Touch
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                  <MdPerson className="text-blue-500" />
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
              <div>
                <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                  <MdEmail className="text-blue-500" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                  <MdSubject className="text-blue-500" />
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
                <label className="block text-sm font-medium text-gray-700">
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
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#25A69F] hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300"
              >
                {submitRign ? (
                  <TbLoader className="animate-spin w-4 h-4" />
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          {/* Social and Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-[#25A69F] mb-6">
              Connect With Us
            </h2>
            <p className="text-gray-600 mb-8 max-w-md">
              Follow us on social media or get in touch using the contact
              details below.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
              {[
                {
                  icon: FaFacebook,
                  label: "Facebook",
                  color: "bg-blue-600",
                  link: "https://www.facebook.com/ababilgroup0/",
                },
                {
                  icon: FaX,
                  label: "Twitter",
                  color: "bg-sky-500",
                  link: "https://x.com/ababilgroup0",
                },
                {
                  icon: FaLinkedin,
                  label: "LinkedIn",
                  color: "bg-blue-700",
                  link: "https://www.linkedin.com/company/107995554/admin/dashboard/",
                },
                {
                  icon: FaInstagram,
                  label: "Instagram",
                  color: "bg-pink-500",
                  link: "https://www.instagram.com/ababil.group0/",
                },
                {
                  icon: FaYoutube,
                  label: "YouTube",
                  color: "bg-red-600",
                  link: "https://www.youtube.com/channel/UC0GpetTVeP01QoP7KtVe6LA",
                },
                {
                  icon: FaTiktok,
                  label: "YouTube",
                  color: "bg-gray-600",
                  link: "https://www.tiktok.com/@ababil.group0",
                },
              ].map(({ icon: Icon, label, color, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  className={`flex flex-col items-center justify-center h-24 rounded-xl text-white ${color} hover:brightness-110 transition shadow-md`}
                >
                  <Icon className="text-2xl mb-1" />
                  <span className="text-sm font-medium">{label}</span>
                </a>
              ))}
            </div>

            <div className="bg-white p-6 rounded-xl shadow border border-gray-200 max-w-md">
              <h3 className="text-lg font-semibold text-blue-600 mb-4">
                Contact Info
              </h3>
              <p className="flex items-center text-gray-700 mb-2">
                <MdEmail className="text-blue-500 mr-2" /> info@ababil.group
              </p>
            </div>
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

export default Social;
