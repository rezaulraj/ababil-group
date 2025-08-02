import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiX,
  FiMenu,
  FiHome,
  FiUsers,
  FiBook,
  FiBriefcase,
  FiFileText,
  FiMail,
} from "react-icons/fi";
import { FaUsersViewfinder } from "react-icons/fa6";

import { FaLayerGroup, FaMapMarkerAlt, FaRegBuilding } from "react-icons/fa";
import logo1 from "/Ababil-Group-Logo.png?url";

const Header = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showPageFlip, setShowPageFlip] = useState(false);
  const [currentFlip, setCurrentFlip] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const navLinks = [
    { label: "Home", path: "/", icon: <FiHome className="mr-2" /> },
    {
      label: "Industries",
      path: "/industries",
      icon: <FaRegBuilding className="mr-2" />,
    },
    {
      label: "People At Ababil",
      path: "/people-at-ababil-group",
      icon: <FiUsers className="mr-2" />,
    },
    {
      label: "Media & News",
      path: "/media-and-news",
      icon: <FiBook className="mr-2" />,
    },
    {
      label: "Career",
      path: "/career",
      icon: <FiBriefcase className="mr-2" />,
    },
    {
      label: "For Employers",
      path: "/for-employers",
      icon: <FaUsersViewfinder className="mr-2" />,
    },
    { label: "Contact", path: "/contact", icon: <FiMail className="mr-2" /> },
  ];

  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setAtTop(currentScrollY <= 0);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollingDown(true);
      } else if (currentScrollY < lastScrollY) {
        setScrollingDown(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (searchOpen) setSearchOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  const handleFaLayerClick = () => {
    setShowPageFlip(true);
    setCurrentFlip(0);
  };

  useEffect(() => {
    if (!showPageFlip) return;

    const flipInterval = setInterval(() => {
      if (currentFlip < colors.length - 1) {
        setCurrentFlip((prev) => prev + 1);
      } else {
        clearInterval(flipInterval);
        setShowPageFlip(false);
        setShowPopup(true);
      }
    }, 500);

    return () => clearInterval(flipInterval);
  }, [showPageFlip, currentFlip]);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <header className="fixed w-full z-50 top-0">
      {/* Page Flip Animation */}
      <AnimatePresence>
        {showPageFlip && (
          <motion.div
            key="page-flip"
            className="fixed bg-gray-900/90 inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {colors.map((color, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 ${color}`}
                initial={{ rotateY: 0, opacity: 0 }}
                animate={{
                  rotateY: index <= currentFlip ? 180 : 0,
                  opacity: index === currentFlip ? 1 : 0,
                  zIndex: index === currentFlip ? 1 : 0,
                }}
                transition={{
                  rotateY: { duration: 0.5, ease: "easeInOut" },
                  opacity: { duration: 0.3 },
                }}
                style={{
                  transformOrigin: "left center",
                  backfaceVisibility: "hidden",
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Screen Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            key="popup"
            className="fixed inset-0 z-50 bg-white flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 p-2 text-gray-600 hover:bg-gray-100 rounded-full"
            >
              <FiX size={24} />
            </button>

            <motion.div
              className="flex h-full"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="w-1/2 flex items-center justify-center bg-gray-100 p-8">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <h2 className="text-4xl font-bold mb-4">Ababil Group</h2>
                  <p className="text-lg">
                    Leading the way in innovation and excellence
                  </p>
                </motion.div>
              </div>

              <div className="w-1/2 flex items-center justify-center bg-blue-50 p-8">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <h2 className="text-4xl font-bold mb-4">Our Locations</h2>
                  <ul className="space-y-2 text-lg">
                    {/* Address */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-[#25A69F] rounded-full text-white mt-1">
                        <FaMapMarkerAlt className="text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-1">
                          Global Headquarters (GHQ)
                        </h3>
                        <p className="text-gray-700">
                          112-116 Whitechapel Road, London, England, E1 1JE
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-[#25A69F] rounded-full text-white mt-1">
                        <FaMapMarkerAlt className="text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-1">
                          Operations Center :
                        </h3>
                        <p className="text-gray-700">
                          Olaya Towers, Tower B, Intersection of Tahlia Street &
                          Olaya Street, Riyadh, Saudi Arabia
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-[#25A69F] rounded-full text-white mt-1">
                        <FaMapMarkerAlt className="text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-1">
                          Global Business Center :
                        </h3>
                        <p className="text-gray-700">
                          Globex Business Centre, The Gate, Doha, Qatar
                        </p>
                      </div>
                    </div>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Content */}
      <AnimatePresence mode="wait">
        {scrollingDown ? (
          // Minimal Header (scrolling down)
          <motion.div
            key="minimal-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-transparent"
          >
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-22">
                <motion.a
                  href="/"
                  className="flex-shrink-0 bg-gray-800 p-2 rounded"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={logo1}
                    alt="Logo"
                    className="h-8 filter brightness-5 invert"
                  />
                </motion.a>
                <motion.div
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.button
                    className="p-2 text-white bg-gray-800 hover:bg-gray-800 rounded"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleFaLayerClick}
                  >
                    <FaLayerGroup size={32} />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ) : (
          // Full Header (top or scrolling up)
          <motion.div
            key="full-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`${atTop ? "bg-transparent" : "bg-white shadow-sm"}`}
          >
            <div className="container mx-auto">
              <div className="flex items-center justify-between h-16 md:h-20">
                <a href="/" className="">
                  {atTop ? (
                    <img
                      src={logo1}
                      alt="Logo"
                      className="h-16 filter brightness-5 invert hover:scale-120 transition-transform duration-300"
                    />
                  ) : (
                    <img
                      src={logo1}
                      alt="Logo"
                      className="h-16 hover:scale-120 transition-transform duration-300"
                    />
                  )}
                </a>
                <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 mx-4">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.path}
                      className={`px-2 py-2 rounded-md text-sm lg:text-lg font-medium flex items-center ${
                        atTop ? "text-white" : "text-gray-800"
                      } hover:text-[#25A69F] transition-colors`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.icon}
                      {link.label}
                    </motion.a>
                  ))}
                </nav>

                <div className="flex items-center space-x-4">
                  {/* <motion.button
                    onClick={toggleSearch}
                    className="p-2 text-[#06334C] hover:bg-gray-300 hover:text-[#06334C] rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {searchOpen ? <FiX size={20} /> : <FiSearch size={20} />}
                  </motion.button> */}

                  <motion.button
                    className="p-2 text-[#06334C] bg-gray-200 hover:bg-gray-300 hover:text-[#06334C] rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleFaLayerClick}
                  >
                    <FaLayerGroup size={20} />
                  </motion.button>

                  <motion.button
                    onClick={toggleMobileMenu}
                    className={`md:hidden p-2 ${
                      atTop ? "text-white" : "text-[#06334C]"
                    } hover:bg-gray-100 rounded-full`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiMenu size={24} />
                  </motion.button>
                </div>
              </div>

              {/* Mobile Menu */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden overflow-hidden bg-white rounded-md"
                  >
                    <div className="px-2 pt-2 pb-4 space-y-1">
                      {navLinks.map((link, index) => (
                        <motion.a
                          key={index}
                          href={link.path}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 flex items-center"
                          whileHover={{ x: 5 }}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.icon}
                          {link.label}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Search Bar */}
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-white"
                  >
                    <div className="px-4 py-3">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full py-2 pl-10 pr-4 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <FiSearch
                          className="absolute left-3 top-3 text-gray-500"
                          size={18}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
