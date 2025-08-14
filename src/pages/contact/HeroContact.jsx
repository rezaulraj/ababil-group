import React, { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  animate,
} from "framer-motion";
import bgimage from "../../assets/AbabilGroup/Career/heropage.jpg?url";
const HeroContact = () => {
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
      className="relative h-[80vh] w-full overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center origin-left"
        style={{
          backgroundImage: `url(${bgimage})`,
          scaleX: bgScaleX,
          y: bgY,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/80" />

      <div className="relative z-10 h-full flex items-center">
        <motion.div
          className="max-w-2xl px-8 lg:px-16"
          style={{ x: textX, y: textY }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-lato tracking-wider text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We're Here to Help Let’s Connect!
          </motion.h1>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="animate-bounce flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white mt-2 rounded-full"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroContact;
