import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiClock, FiCalendar, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

// Helper function to generate slug from title
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with dashes
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing dashes
};

const LatestNews = () => {
  const recruitmentNews = [
    {
      id: 1,
      title:
        "Powering Global Workforces: How Ababil Group Supports Recruitment Agencies Worldwide",
      excerpt:
        "In today’s rapidly evolving labor market, reliable manpower supply is the backbone of successful industries. ",
      image:
        "https://images.unsplash.com/photo-1740042372484-67c211647db9?q=80&w=1089&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2023-06-15",
      readTime: "2 min read",
    },
    {
      id: 2,
      title:
        "From Dream to Departure: How Ababil Group Turns International Education into a Reality",
      excerpt:
        "At Ababil Group, we believe international education should be more than a dream, it should be an achievable, empowering reality.",
      image:
        "https://images.unsplash.com/photo-1628147529780-36964fbb8d54?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2023-06-10",
      readTime: "3 min read",
    },
    {
      id: 3,
      title:
        "Empowering Dreams: How Ababil Group Connects Students to Global Higher Education Opportunities",
      excerpt:
        "In today’s competitive academic landscape, securing admission into a reputable higher education institution can feel overwhelming for students and parents alike.",
      image:
        "https://images.unsplash.com/photo-1709054172839-17880c040f22?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2023-06-05",
      readTime: "4 min read",
    },
    {
      id: 4,
      title:
        "How Ababil Group Helped Elena Land a Healthcare Job in Austria Without Leaving Romania",
      excerpt:
        "When Elena Mureșan, a 28-year-old from Bucharest, began searching for international job opportunities, she wasn’t sure where to start.",
      image:
        "https://images.unsplash.com/photo-1630569265403-9f38855679fa?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2023-05-28",
      readTime: "3 min read",
    },
    {
      id: 5,
      title:
        "Building a Culture of Trust: The Foundation of Great Place To Work Certified Organisations",
      excerpt:
        "At Ababil Group, we believe that trust isn’t just a value, it's the foundation of a thriving organization.",
      image:
        "https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2023-05-20",
      readTime: "2 min read",
    },
    {
      id: 6,
      title:
        "From Learning to Earning: How Ababil Group Bridges the Gap Between Education and Employment",
      excerpt:
        "In today’s rapidly changing world, having a certificate is no longer enough. Employers want skills. Industries demand adaptability.",
      image:
        "https://images.unsplash.com/photo-1640030104754-0a33c686c533?q=80&w=1126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2023-05-15",
      readTime: "4 min read",
    },
    {
      id: 7,
      title:
        "Language Is Power: How Ababil’s Language School Is Opening Global Doors",
      excerpt:
        "In an interconnected world, the ability to communicate across cultures is no longer a luxury, it's a necessity..",
      image:
        "https://images.unsplash.com/photo-1689903777384-31fd780bef3c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2023-05-15",
      readTime: "4 min read",
    },
    {
      id: 8,
      title:
        "Ababil Group: A Trusted Partner for Recruitment Agencies Worldwide",
      excerpt:
        "At Job Seekers News, we work closely with agents and recruitment professionals who are constantly seeking reliable partners to help place candidates in reputable jobs across the globe..",
      image:
        "https://images.unsplash.com/photo-1706403615881-d83dc2067c5d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2023-05-15",
      readTime: "4 min read",
    },
    {
      id: 9,
      title:
        "Why Recruitment Agencies Trust Ababil Group for Global Workforce Solutions",
      excerpt:
        "In the fast-paced world of international recruitment, agencies need more than just manpower; they need trustworthy partners who deliver on time, stay compliant, and maintain strong relationships with employers..",
      image:
        "https://images.unsplash.com/photo-1588623731810-171b80f3c55e?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2023-05-15",
      readTime: "4 min read",
    },
    {
      id: 10,
      title:
        "Building Careers, Not Just Skills: How Ababil Group’s Training School Empowers the Workforce of Tomorrow",
      excerpt:
        "In today’s fast-paced job market, having the right skills is more important than ever.",
      image:
        "https://images.unsplash.com/photo-1594492691731-3d7974140624?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2023-05-15",
      readTime: "4 min read",
    },
  ];

  const getCardsToShow = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setCardsToShow(getCardsToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % (recruitmentNews.length - cardsToShow + 1)
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [cardsToShow, recruitmentNews.length]);

  const nextSlide = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % (recruitmentNews.length - cardsToShow + 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + (recruitmentNews.length - cardsToShow + 1)) %
        (recruitmentNews.length - cardsToShow + 1)
    );
  };

  const visibleNews = recruitmentNews.slice(
    currentIndex,
    currentIndex + cardsToShow
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-[#1A9695]">
              Recruitment News
            </h2>
            <p className="text-gray-500 mt-2">
              Latest trends about{" "}
              <span className="text-[#1A9695]">Ababil Group</span>
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors"
            >
              ◀
            </button>
            <button
              onClick={nextSlide}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors"
            >
              ▶
            </button>
          </div>
        </div>

        {/* Auto Sliding Cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {visibleNews.map((news) => (
            <motion.div
              key={news.id}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <Link
                to={`/media-and-news/${generateSlug(news.title)}`}
                className="block"
              >
                <div className="h-48 overflow-hidden">
                  <motion.img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <FiCalendar className="mr-1.5" />
                    <span className="mr-4">
                      {new Date(news.date).toLocaleDateString()}
                    </span>
                    <FiClock className="mr-1.5" />
                    <span>{news.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {news.excerpt}
                  </p>
                  <div className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
                    Read more <FiArrowRight className="ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* All News Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            All News
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recruitmentNews.map((news) => (
              <div
                key={news.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <Link
                  to={`/media-and-news/${generateSlug(news.title)}`}
                  className="block"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <FiCalendar className="mr-1.5" />
                      <span className="mr-4">
                        {new Date(news.date).toLocaleDateString()}
                      </span>
                      <FiClock className="mr-1.5" />
                      <span>{news.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
                      Read more <FiArrowRight className="ml-2" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
