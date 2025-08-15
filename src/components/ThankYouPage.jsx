import { motion } from "framer-motion";
import { FaCheckCircle, FaPaperPlane, FaHome, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md w-full"
      >
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 p-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block"
          >
            <FaCheckCircle className="text-white text-6xl mx-auto" />
          </motion.div>
        </div>

        <div className="p-8 text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold text-gray-900 mb-2"
          >
            Thank You!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 mb-6"
          >
            We've received your application and will review it shortly. Our team
            will contact you within 2 business days.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <FaHome />
              Return Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 pt-6 border-t border-gray-200"
          >
            <p className="text-sm text-gray-500">
              Didn't receive a confirmation email? Check your spam folder or
              <a
                href="mailto:info@ababil.group"
                className="text-indigo-600 hover:underline ml-1"
              >
                contact us
              </a>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ThankYouPage;
