import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaCar,
  FaIndustry,
  FaTractor,
  FaCut,
  FaUtensils,
  FaBroom,
  FaHardHat,
  FaTshirt,
  FaTruck,
  FaGraduationCap,
  FaLanguage,
  FaUserFriends,
  FaChalkboardTeacher,
} from "react-icons/fa";

import ind1 from "../../assets/AbabilGroup/Home/ababilindustris/AutoMechanic.jpg?url";
import ind2 from "../../assets/AbabilGroup/Home/ababilindustris/manufacturing.jpg?url";
import ind3 from "../../assets/AbabilGroup/Home/ababilindustris/Agriculture.jpg?url";
import ind4 from "../../assets/AbabilGroup/Home/ababilindustris/Beautician.jpeg?url";
import ind5 from "../../assets/AbabilGroup/Home/ababilindustris/Chef.jpg?url";
import ind6 from "../../assets/AbabilGroup/Home/ababilindustris/Cleaner.jpeg?url";
import ind7 from "../../assets/AbabilGroup/Home/ababilindustris/Construciton.jpg?url";
import ind8 from "../../assets/AbabilGroup/Home/ababilindustris/Germents.jpg?url";
import ind9 from "../../assets/AbabilGroup/Home/ababilindustris/HeavyTruckDriver.jpg?url";
import ind10 from "../../assets/AbabilGroup/Industries/EducationConsultancy.jpg?url";
import ind11 from "../../assets/AbabilGroup/Industries/LanguageSchool.jpg?url";
import ind12 from "../../assets/AbabilGroup/Industries/Manpower.jpg?url";
import ind13 from "../../assets/AbabilGroup/Industries/SkilltraningSchool.jpg?url";

const ProgressIndustrice = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const industries = [
    {
      src: ind1,
      title: "Automobile",
      icon: <FaCar className="text-4xl mb-4 text-white" />,
      description:
        "Our skilled automotive professionals bring precision and expertise to every repair and maintenance task. From engine diagnostics to electrical systems, we provide trained technicians who ensure vehicles operate at peak performance with meticulous attention to detail.",
      benefits: [
        "Certified technicians",
        "Advanced diagnostic tools",
        "24/7 support",
        "Warranty on services",
      ],
    },
    {
      src: ind2,
      title: "Manufacturing",
      icon: <FaIndustry className="text-4xl mb-4 text-white" />,
      description:
        "We deliver comprehensive workforce solutions tailored to your production needs. Our manufacturing specialists are proficient in assembly line operations, quality control, and lean manufacturing techniques to maximize your operational efficiency and output quality.",
      benefits: [
        "Lean manufacturing experts",
        "Quality assurance",
        "Scalable workforce",
        "Continuous improvement",
      ],
    },
    {
      src: ind3,
      title: "Agriculture",
      icon: <FaTractor className="text-4xl mb-4 text-white" />,
      description:
        "Our agricultural workforce combines traditional farming knowledge with modern techniques. From crop cultivation to livestock management, we provide experienced workers who understand seasonal requirements, irrigation systems, and sustainable farming practices.",
      benefits: [
        "Organic farming specialists",
        "Precision agriculture",
        "Livestock management",
        "Sustainable practices",
      ],
    },
    {
      src: ind4,
      title: "Beautician",
      icon: <FaCut className="text-4xl mb-4 text-white" />,
      description:
        "Trained in the latest beauty trends and techniques, our beauticians offer exceptional salon and spa services. From precision haircuts to skincare treatments, our professionals create personalized experiences that enhance natural beauty and boost confidence.",
      benefits: [
        "Latest beauty trends",
        "Hygienic practices",
        "Personalized services",
        "Premium products",
      ],
    },
    {
      src: ind5,
      title: "Chef",
      icon: <FaUtensils className="text-4xl mb-4 text-white" />,
      description:
        "Our culinary experts bring creativity and precision to every kitchen. Specializing in diverse cuisines, menu planning, and food safety standards, we provide chefs who elevate dining experiences through exceptional flavor combinations and presentation artistry.",
      benefits: [
        "Multiple cuisine experts",
        "Food safety certified",
        "Menu development",
        "Cost control",
      ],
    },
    {
      src: ind6,
      title: "Cleaner",
      icon: <FaBroom className="text-4xl mb-4 text-white" />,
      description:
        "Professional cleaning staff trained in modern sanitation protocols. We provide thorough cleaning services using eco-friendly products and systematic approaches to maintain hygienic, spotless environments in homes, offices, and commercial spaces.",
      benefits: [
        "Eco-friendly products",
        "Customized cleaning plans",
        "Trained professionals",
        "Flexible scheduling",
      ],
    },
    {
      src: ind7,
      title: "Construction",
      icon: <FaHardHat className="text-4xl mb-4 text-white" />,
      description:
        "Skilled construction teams equipped to handle projects of all scales. From foundation work to finishing touches, our workers are trained in safety protocols, modern building techniques, and efficient project execution to deliver quality structures on schedule.",
      benefits: [
        "OSHA certified",
        "Heavy equipment operators",
        "Project management",
        "Quality craftsmanship",
      ],
    },
    {
      src: ind8,
      title: "Garments",
      icon: <FaTshirt className="text-4xl mb-4 text-white" />,
      description:
        "Our garment industry professionals bring precision to textile manufacturing. Skilled in cutting, sewing, quality inspection, and finishing, we provide workers who understand fabric handling, pattern making, and efficient production line operations.",
      benefits: [
        "Bulk production capacity",
        "Quality control",
        "Fast turnaround",
        "Custom designs",
      ],
    },
    {
      src: ind9,
      title: "Heavy Truck Driver",
      icon: <FaTruck className="text-4xl mb-4 text-white" />,
      description:
        "Certified heavy vehicle operators with extensive road experience. Our drivers are trained in safety regulations, cargo handling, long-haul logistics, and vehicle maintenance to ensure timely, secure transportation of goods across all terrains.",
      benefits: [
        "CDL certified",
        "GPS tracked",
        "On-time delivery",
        "Cargo insurance",
      ],
    },
    // Newly added industries
    {
      src: ind10,
      title: "Education Consultancy",
      icon: <FaGraduationCap className="text-4xl mb-4 text-white" />,
      description:
        "Our education consultants provide expert guidance on international study opportunities, visa processes, and career planning. We help students navigate the complex world of global education to find the best institutions matching their academic goals and aspirations.",
      benefits: [
        "Global university partnerships",
        "Visa application assistance",
        "Scholarship guidance",
        "Career counseling",
      ],
    },
    {
      src: ind11,
      title: "Language School",
      icon: <FaLanguage className="text-4xl mb-4 text-white" />,
      description:
        "Specialized language training programs designed to enhance communication skills for professional and academic purposes. Our certified instructors use immersive techniques to help students achieve fluency in English and other languages quickly and effectively.",
      benefits: [
        "IELTS/TOEFL preparation",
        "Business communication",
        "Native-speaking instructors",
        "Flexible scheduling",
      ],
    },
    {
      src: ind12,
      title: "Manpower Solutions",
      icon: <FaUserFriends className="text-4xl mb-4 text-white" />,
      description:
        "Comprehensive workforce recruitment and management services tailored to your business needs. We source, screen, and supply qualified professionals across all industries, handling all aspects of human resource management for seamless operations.",
      benefits: [
        "Talent acquisition",
        "Background verification",
        "Payroll management",
        "Labor law compliance",
      ],
    },
    {
      src: ind13,
      title: "Skill Training School",
      icon: <FaChalkboardTeacher className="text-4xl mb-4 text-white" />,
      description:
        "Vocational training programs that equip individuals with market-relevant skills for immediate employment. Our hands-on courses in various trades are designed to bridge the skills gap and create job-ready professionals for today's competitive market.",
      benefits: [
        "Industry-aligned curriculum",
        "Certified trainers",
        "Practical workshops",
        "Job placement assistance",
      ],
    },
  ];

  return (
    <div
      className="py-16 bg-gradient-to-b from-gray-50 to-gray-100"
      ref={containerRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center px-4 max-w-4xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-4xl md:text-5xl font-bold text-[#06334C] mb-6"
          >
            Ababil Group's Comprehensive Industry Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-xl text-gray-700"
          >
            We provide end-to-end workforce solutions with positive support,
            ensuring seamless operations and client satisfaction across diverse
            industries.
          </motion.p>
        </div>

        <div className="space-y-32">
          {industries.map((industry, index) => {
            const y = useTransform(
              scrollYProgress,
              [index * 0.1, (index + 1) * 0.1],
              [100, 0]
            );

            const opacity = useTransform(
              scrollYProgress,
              [index * 0.1, (index + 1) * 0.1],
              [100, 1]
            );

            return (
              <motion.div
                key={index}
                style={{ y, opacity }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 md:gap-12`}
              >
                <motion.div
                  className="w-full md:w-1/2 relative overflow-hidden rounded-2xl shadow-2xl"
                  whileInView={{
                    x: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  }}
                  initial={{ x: index % 2 === 0 ? -200 : 200 }}
                  viewport={{ once: false, margin: "-100px" }}
                >
                  <img
                    src={industry.src}
                    alt={industry.title}
                    className="w-full h-[400px] object-cover transform hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <div className="flex justify-center">{industry.icon}</div>
                      <h3 className="text-2xl font-bold text-center mt-2">
                        {industry.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="w-full md:w-1/2"
                  whileInView={{
                    x: 0,
                    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
                  }}
                  initial={{ x: index % 2 === 0 ? 200 : -200 }}
                  viewport={{ once: false, margin: "-100px" }}
                >
                  <div
                    className={`px-8 py-4 rounded-2xl ${
                      index % 2 === 0 ? "bg-[#1A9695]" : "bg-gray-800"
                    } text-white shadow-xl hover:shadow-2xl transition-all duration-500`}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {industry.title} Services
                    </h3>
                    <p className="text-gray-100 leading-relaxed mb-6">
                      {industry.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-lg mb-3">
                        Key Benefits:
                      </h4>
                      <ul className="space-y-2">
                        {industry.benefits.map((benefit, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            viewport={{ once: false }}
                            className="flex items-start"
                          >
                            <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-2"></span>
                            {benefit}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-44 text-center bg-gradient-to-r from-[#1A9695] to-[#1A9695]/90 rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Workforce?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss how we can provide the perfect workforce
            solutions for your business needs across any industry.
          </p>
          <motion.button
            onClick={() => {
              const section = document.querySelector("#work-force");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer"
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProgressIndustrice;
