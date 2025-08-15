import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { TbLoader } from "react-icons/tb";
import {
  MdEmail,
  MdOutlineMessage,
  MdPerson,
  MdPhone,
  MdSubject,
} from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const ContactUsModel = ({ setContactOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
          subject: "",
          message: "",
        });
        setContactOpen(false);
      }, 3000);
      setIsLoading(false);
    } catch (error) {
      console.error("Error sending form:", error);
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/50 font-poppins"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-screen-sm w-full p-6"
        >
          <div className="rounded-lg bg-white shadow-lg">
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

            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-3 p-3">
                <div className="flex gap-3">
                  <div className="w-full">
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

                  <div className="w-full">
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
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <FaCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  We've received your message and will contact you shortly.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactUsModel;
