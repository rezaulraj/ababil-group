import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiClock, FiCalendar, FiArrowRight } from "react-icons/fi";

const LatestNews = () => {
  const recruitmentNews = [
    {
      id: 1,
      title: "Tech Hiring Boom in 2023",
      excerpt: "Major tech companies expanding their workforce globally",
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      date: "2023-06-15",
      readTime: "2 min read",
    },
    {
      id: 2,
      title: "Remote Work Now Standard",
      excerpt: "87% of companies offer remote options in job postings",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      date: "2023-06-10",
      readTime: "3 min read",
    },
    {
      id: 3,
      title: "Diversity Hiring Initiatives",
      excerpt: "Companies commit to 30% diversity hiring targets",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      date: "2023-06-05",
      readTime: "4 min read",
    },
    {
      id: 4,
      title: "AI Recruitment Tools Popular",
      excerpt: "60% of HR using AI for candidate screening",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      date: "2023-05-28",
      readTime: "3 min read",
    },
    {
      id: 5,
      title: "Entry-Level Salaries Rise",
      excerpt: "15% increase in starting salaries across industries",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      date: "2023-05-20",
      readTime: "2 min read",
    },
    {
      id: 6,
      title: "Healthcare Hiring Surge",
      excerpt: "500k new healthcare jobs created this year",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Recruitment News
            </h2>
            <p className="text-gray-500 mt-2">
              Latest trends in hiring and employment
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors"
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors"
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visibleNews.map((news) => (
            <motion.div
              key={news.id}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="h-48 overflow-hidden">
                <motion.img
                  className="w-full h-full object-cover"
                  src={news.image}
                  alt={news.title}
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
                <motion.button
                  className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Read more <FiArrowRight className="ml-2" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: recruitmentNews.length - cardsToShow + 1 }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  currentIndex === index
                    ? "bg-indigo-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
