import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import logoblue from "/logo1.png";

const HeroHome = () => {
  const videoLink =
    "https://res.cloudinary.com/dtw7qhd69/video/upload/v1754136484/Ababil_vpad1r.mp4";

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const logoX = useTransform(mouseX, [0, window.innerWidth], [-40, 40]);
  const logoY = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);

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
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoLink} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
        {/* <motion.div style={{ x: logoX, y: logoY }} className="">
          <img
            src={logoblue}
            alt="Ababil Group Logo"
            className="h-56 w-auto "
          />
        </motion.div> */}

        {/* Animated Main Heading */}
        <motion.h1
          style={{ x: textX, y: textY }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold bg-[#1A9695]/90 px-4 py-2 text-white mb-4 tracking-tight"
        >
          <span className="uppercase">Ababil Group</span>
        </motion.h1>

        <motion.h2
          style={{ x: textX, y: textY }}
          className="text-xl md:text-3xl font-medium text-white max-w-2xl mx-auto mb-8"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#25A69F] to-[#1A9695]/90 uppercase">
            Innovating Beyond Boundaries.
          </span>
        </motion.h2>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white mt-2 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
