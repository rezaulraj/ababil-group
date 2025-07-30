import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  stagger,
  animate,
} from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

// IMAGES
import people1 from "../../assets/AbabilGroup/PeopleatAbabil/CHAIRMAN.jpeg?url";
import people2 from "../../assets/AbabilGroup/PeopleatAbabil/GROUPManagingDirector.jpeg?url";
import people3 from "../../assets/AbabilGroup/PeopleatAbabil/DIRECTOR.jpeg?url";
import people4 from "../../assets/AbabilGroup/PeopleatAbabil/MANAGINGDIRECTOR.jpeg?url";
import people5 from "../../assets/AbabilGroup/PeopleatAbabil/Director.jpg?url";
import people6 from "../../assets/AbabilGroup/PeopleatAbabil/HEADOFOPERATIONS.jpeg?url";
import people7 from "../../assets/AbabilGroup/PeopleatAbabil/ChiefTechnologyOfficer.jpeg?url";
import people8 from "../../assets/AbabilGroup/PeopleatAbabil/ChiefFinancialOfficer.jpeg?url";

const peoples = [
  {
    image: people1,
    degination: "CHAIRMAN",
    name: "George Mitchell",
    company: "Ababil Group",
  },
  {
    image: people2,
    degination: "GROUP Managing Director",
    name: "Thomas Wright",
    company: "Ababil Group",
  },
  {
    image: people3,
    degination: "Director",
    name: "Amelia Turner",
    company: "Ababil Group",
  },
  {
    image: people4,
    degination: "MANAGING DIRECTOR",
    name: "Isabella Rossi",
    company: "Ababil Group",
  },
  {
    image: people5,
    degination: "DIRECTOR",
    name: "Yasmin Al-Mutairi",
    company: "Ababil Group",
  },
  {
    image: people6,
    degination: "HEAD OF OPERATIONS",
    name: "Edward Bennett",
    company: "Ababil Group",
  },
  {
    image: people7,
    degination: "Chief Technology Officer (CTO)",
    name: "Andreas Schneider",
    company: "Ababil Group",
  },
  {
    image: people8,
    degination: "Chief Financial Officer (CFO)",
    name: "Katarzyna Nowak",
    company: "Ababil Group",
  },
];

const Peoples = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animation for the entire container
  const containerY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const containerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 1]);

  return (
    <motion.div
      ref={containerRef}
      style={{ y: containerY, opacity: containerOpacity }}
      className="bg-gradient-to-b from-gray-50 to-gray-100 py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
        >
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
            Our Leadership Team
          </motion.h2>

          <motion.p className="text-center text-gray-600 mb-12 md:mb-16 max-w-2xl mx-auto text-sm sm:text-base">
            The visionaries driving our company forward
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-20 md:space-y-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {peoples.map((person, index) => (
            <PersonCard key={index} person={person} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const PersonCard = ({ person, index }) => {
  const isRight = index % 2 === 0;
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isRight ? [0, -40, 0] : [0, 40, 0]
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    isRight ? [-3, 3] : [3, -3]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.03]);

  // Background image parallax
  const bgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div
      ref={sectionRef}
      className="relative h-[300px] sm:h-[400px] md:h-[500px] flex justify-center items-center"
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.16, 0.77, 0.47, 0.97],
          },
        },
      }}
    >
      {/* Background image with offset */}
      <motion.div
        className={`relative w-full h-full ${
          isRight ? "pr-0 md:pr-[30%]" : "pl-0 md:pl-[30%]"
        }`}
        style={{ y: bgY }}
      >
        <motion.img
          src={person.image}
          alt={person.name}
          className="w-full h-full object-cover rounded-lg md:rounded-xl shadow-md"
          style={{
            scale,
            transition: "all 0.6s cubic-bezier(0.16, 0.77, 0.47, 0.97)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#25A69F]/60 to-transparent rounded-lg md:rounded-xl" />
      </motion.div>

      {/* Info card */}
      <motion.div
        ref={cardRef}
        className={`
          absolute w-full sm:w-4/5 md:w-96 p-4 sm:p-6 bg-white/90 backdrop-blur-sm 
          rounded-lg md:rounded-xl shadow-lg z-30
          ${
            isRight
              ? "right-0 bottom-0 md:right-auto md:top-1/2 md:-mr-40 md:-translate-y-1/2"
              : "left-0 bottom-0 md:left-auto md:top-1/2 md:-ml-40 md:-translate-y-1/2"
          }
        `}
        style={{
          y,
          x,
          rotate,
          transition: "all 0.6s cubic-bezier(0.16, 0.77, 0.47, 0.97)",
        }}
        whileHover={{
          scale: 1.03,
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
      >
        <motion.p
          className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider"
          initial={{ opacity: 0, x: isRight ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "-50px" }}
          transition={{ delay: 0.2 }}
        >
          {person.degination}
        </motion.p>
        <motion.h3
          className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mt-1"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-50px" }}
          transition={{ delay: 0.3 }}
        >
          {person.name}
        </motion.h3>
        <motion.p
          className="text-gray-600 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-50px" }}
          transition={{ delay: 0.4 }}
        >
          {person.company}
        </motion.p>
        {/* <motion.div
          whileHover={{ x: 5 }}
          className="mt-2 sm:mt-3 text-blue-600 hover:text-blue-700 flex items-center gap-1 sm:gap-2 transition-colors"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-50px" }}
          transition={{ delay: 0.5 }}
        >
          <FaLinkedin className="text-sm sm:text-base" />
          <span className="text-xs sm:text-sm">Connect</span>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default Peoples;
