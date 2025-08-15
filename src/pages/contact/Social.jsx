import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaCheckCircle,
  FaBuilding,
} from "react-icons/fa";
import {
  MdEmail,
  MdOutlineMessage,
  MdPerson,
  MdPhone,
  MdSubject,
} from "react-icons/md";
import { FaX } from "react-icons/fa6";
import { TbLoader } from "react-icons/tb";
import { FiArrowRight } from "react-icons/fi";
import Calendly from "../../components/Calendly";

const Social = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await fetch(
        "https://formsubmit.co/ajax/800386826fd1b74ec1bab79279390a7c",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            subject: formData.subject,
            message: formData.message,
            _captcha: false,
            // _next: "https://cloudconektion.com/thank-you",
          }),
        }
      );

      setFormSubmitted(true);

      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
      }, 3000);
      setIsLoading(false);
    } catch (error) {
      console.error("Error sending form:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <section
        id="contact-form"
        className="py-20 px-4 sm:px-8 bg-white text-gray-800"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
            <h2 className="text-3xl font-bold text-[#25A69F] mb-6">
              Get in Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                  <MdPerson className="text-[#25A69F] text-2xl" />
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                  <MdEmail className="text-[#25A69F] text-2xl" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                  <MdPhone className="text-[#25A69F] text-2xl" />
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                  <FaBuilding className="text-[#25A69F] text-2xl" />
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
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
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                  <MdOutlineMessage className="text-[#25A69F] text-2xl" />{" "}
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  required
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#25A69F] hover:bg-[#25A69F]/90 text-white font-medium rounded-lg transition-all duration-300"
              >
                {isLoading ? (
                  <TbLoader className="animate-spin w-6 h-6" />
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

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
                  label: "Tiktok",
                  color: "bg-gray-600",
                  link: "https://www.tiktok.com/@ababil.group0",
                },
              ].map(({ icon: Icon, label, color, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
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

            <div className="bg-white p-6 mt-10 rounded-xl shadow border border-gray-200 max-w-md">
              <button
                onClick={() => setShowCalendly(true)}
                className="px-6 py-3 bg-[#1A9695] text-white rounded-lg font-medium flex items-center justify-center transition-all duration-300 hover:bg-teal-700 hover:shadow-md hover:scale-105 cursor-pointer"
              >
                Book A Call <FiArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

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
                We've received your message and will contact you shortly.
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

      <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />
    </>
  );
};

export default Social;
