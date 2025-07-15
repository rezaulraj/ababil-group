import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaPaperPlane,
  FaPhone,
  FaTiktok,
} from "react-icons/fa";
import { MdEmail, MdPerson, MdSubject } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { FaX } from "react-icons/fa6";

const Social = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      {/* Popup Message */}
      {submitted && (
        <div className="fixed top-5 right-5 z-50 animate-fade-in-up">
          <div className="bg-green-100 border border-green-300 text-green-800 px-6 py-4 rounded-lg shadow-lg flex items-center gap-3">
            <FaPaperPlane className="text-green-500 text-xl" />
            <div>
              <strong className="block">Thank you!</strong>
              <span>Your message has been sent.</span>
            </div>
          </div>
        </div>
      )}

      <section className="py-20 px-4 sm:px-8 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
            <h2 className="text-3xl font-bold text-[#25A69F] mb-6">
              Get in Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                  <MdPerson className="text-blue-500" />
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#25A69F] hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300"
              >
                <span>Send Message</span>
                <IoMdSend className="text-lg" />
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
              ].map(({ icon: Icon, label, color }, i) => (
                <a
                  key={i}
                  href="#"
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
