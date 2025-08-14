import React, { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  animate,
} from "framer-motion";
import heroimage from "../../assets/AbabilGroup/PeopleatAbabil/CHAIRMAN.jpeg?url";

const HeroPeople = () => {
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
      className="relative h-screen w-full overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center origin-left"
        style={{
          backgroundImage: `url(${heroimage})`,
          scaleX: bgScaleX,
          y: bgY,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60 z-0" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-2xl px-6 lg:px-12 py-32 text-left">
          <motion.h1
            style={{ x: textX, y: textY }}
            className="text-4xl md:text-5xl lg:text-7xl font-semibold font-lato text-white leading-relaxed tracking-widest select-none"
          >
            George Mitchell
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4"
          >
            <p className="text-xl md:text-2xl text-white font-light mb-2">
              Chairman of
            </p>
            <motion.div
              className="text-3xl md:text-4xl font-bold text-white bg-[#1A9695] px-4 py-2 inline-block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              ABABIL GROUP
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 text-lg text-white/90 max-w-lg"
          >
            Leading the company with vision and innovation to deliver
            exceptional workforce solutions globally.
          </motion.p>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white mt-2 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroPeople;
