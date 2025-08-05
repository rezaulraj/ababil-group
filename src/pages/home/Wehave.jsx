import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import bgimage from "../../assets/home/movedo-bw-bg.jpg";

const Wehave = () => {
  const containerRef = useRef(null);
  const cards = [
    { number: 30, name: "Business Units" },
    { number: 6, name: "Geographical Regions" },
    { number: "70+", name: "Offices & Showrooms" },
    { number: "1000+", name: "Team Members" },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const cardYUp = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const cardYDown = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  const cardX = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-[70vh] w-full overflow-hidden"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-0" />
      <div className="relative z-10 h-full flex flex-col justify-center">
        <motion.div
          style={{ cardX }}
          className="max-w-7xl mx-auto px-6 py-32 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                style={{
                  y: index % 2 === 0 ? cardYUp : cardYDown,
                }}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-2xl transition-all duration-300 hover:bg-white/20 hover:shadow-glow"
              >
                <motion.p
                  className="text-5xl font-bold text-blue-400 mb-3"
                  whileHover={{ scale: 1.05 }}
                >
                  {card.number}
                </motion.p>
                <p className="text-xl font-medium text-white/90">{card.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Wehave;
