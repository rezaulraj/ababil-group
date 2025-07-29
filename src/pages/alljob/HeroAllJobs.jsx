import React, { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  animate,
} from "framer-motion";
import bgimage from "../../assets/AbabilGroup/Career/heropage.jpg?url";
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
          className="max-w-2xl px-8 lg:px-16"
          style={{ x: textX, y: textY }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Be the Change and Become a Part of the Movement to Build a Stronger Nation
          </motion.h1>
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
