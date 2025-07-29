import React from "react";
import { motion } from "framer-motion";
import ourValue from "../../assets/home/our_values.gif?url";

const ValueHome = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-10 overflow-hidden">
      {/* Animated Header Text */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12 text-center"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold uppercase tracking-wider"
          animate={{
            backgroundImage: [
              "linear-gradient(45deg, #1A9695, #f9cb28)",
              "linear-gradient(45deg, #f9cb28, #ff4d4d)",
              "linear-gradient(45deg, #ff4d4d, #4d79ff)",
              "linear-gradient(45deg, #1A9695, #f9cb28)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            backgroundSize: "200% 200%",
          }}
        >
          OUR VALUES
        </motion.h1>
      </motion.div>

      {/* Centered animated element */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: {
            duration: 1.2,
            ease: [0.17, 0.67, 0.83, 0.67],
          },
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.4 },
        }}
        className="w-full"
      >
        <img
          src={ourValue}
          alt="Visual animation"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  );
};

export default ValueHome;
