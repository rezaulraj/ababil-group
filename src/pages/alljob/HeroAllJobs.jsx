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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgScaleX = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const textX = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const textY = useTransform(mouseY, [0, window.innerHeight], [-10, 10]);

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
      <motion.div
        className="absolute inset-0 bg-cover bg-center origin-left"
        style={{
          backgroundImage: `url(${bgimage})`,
          scaleX: bgScaleX,
          y: bgY,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      <div className="relative z-10 h-full flex items-center">
        <motion.div
          className="max-w-2xl px-8 lg:px-16"
          style={{ x: textX, y: textY }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Build Your Dream Team with Confidence
          </motion.h1>
          <motion.p
            className="text-xl font-medium text-gray-300 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Find, attract, and hire the best talent with our end-to-end
            recruitment solutions. From executive search to contract staffing,
            we help employers scale smarter and faster.
          </motion.p>
        </motion.div>
      </div>

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
