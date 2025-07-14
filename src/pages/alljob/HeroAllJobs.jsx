import React, { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  animate,
} from "framer-motion";
import bgimage from "../../assets/contact/herocontact.jpg?url";
import { FaSearch } from "react-icons/fa";

const HeroAllJobs = () => {
  const containerRef = useRef(null);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax background transforms
  const bgScaleX = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  // Mouse tracking motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transform movement for text based on cursor
  const textX = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const textY = useTransform(mouseY, [0, window.innerHeight], [-10, 10]);

  // Smooth cursor animation
  useEffect(() => {
    const handleMouseMove = (e) => {
      animate(mouseX, e.clientX, {
        type: "spring",
        stiffness: 100,
        damping: 20,
      });
      animate(mouseY, e.clientY, {
        type: "spring",
        stiffness: 100,
        damping: 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative h-[90vh] w-full overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center origin-left"
        style={{
          backgroundImage: `url(${bgimage})`,
          scaleX: bgScaleX,
          y: bgY,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <motion.div
          className="max-w-5xl px-8 lg:px-16"
          style={{ x: textX, y: textY }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Build Your Career.
            <span className="text-blue-400"> Empower a Nation.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-3xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Become part of a purpose-driven team committed to national
            development. Explore fulfilling career opportunities where your
            skills fuel economic growth and drive lasting social impact.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 group">
              <span className="group-hover:mr-2 transition-all">
                Browse All Jobs
              </span>
              <FaSearch className="opacity-0 group-hover:opacity-100 transition-all" />
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium rounded-lg transition-all duration-300">
              Learn About Our Mission
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white mt-2 rounded-full"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroAllJobs;
