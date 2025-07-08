import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiX, FiMenu } from "react-icons/fi";
import { FaLayerGroup } from "react-icons/fa";
import logoBlue from "/logoblue.png";
import logoWhite from "/logowhite.png";

const Header = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "People At Ababil", path: "/people-at-ababil-group" },
    { label: "Media & News", path: "/media-and-news" },
    { label: "Career", path: "/career" },
    { label: "All Jobs", path: "/all-jobs" },
    { label: "Contact", path: "/contact" },
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

  return (
    <header className="fixed w-full z-50 top-0">
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
              <div className="flex items-center justify-between h-16">
                <motion.div
                  className="flex-shrink-0 bg-gray-800 p-2 rounded"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={logoWhite} alt="Logo" className="h-8" />
                </motion.div>
                <motion.div
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.button
                    className="p-2 text-white bg-gray-800 hover:bg-gray-700 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLayerGroup size={20} />
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
            className={`${atTop ? "bg-transparent" : "bg-black shadow-sm"}`}
          >
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16 md:h-20">
                {atTop ? (
                  <img src={logoBlue} alt="Logo" className="h-8 md:h-10" />
                ) : (
                  <img src={logoWhite} alt="Logo" className="h-8 md:h-10" />
                )}

                <nav className="hidden md:flex items-center space-x-1 lg:space-x-4 mx-4">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.path}
                      className={`px-3 py-2 rounded-md text-sm lg:text-base font-medium ${
                        atTop ? "text-white" : "text-white"
                      }  hover:text-blue-600 transition-colors`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>

                <div className="flex items-center space-x-4">
                  <motion.button
                    onClick={toggleSearch}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {searchOpen ? <FiX size={20} /> : <FiSearch size={20} />}
                  </motion.button>

                  <motion.button
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLayerGroup size={20} />
                  </motion.button>

                  <motion.button
                    onClick={toggleMobileMenu}
                    className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full"
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
                    className="md:hidden overflow-hidden bg-white"
                  >
                    <div className="px-2 pt-2 pb-4 space-y-1">
                      {navLinks.map((link, index) => (
                        <motion.a
                          key={index}
                          href={link.path}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                          whileHover={{ x: 5 }}
                          onClick={() => setMobileMenuOpen(false)}
                        >
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
