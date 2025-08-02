import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import logo from "/logo1.png";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-2xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <a href="/" className="inline-block">
              <img
                src={logo}
                alt="Ababil logo"
                className="h-16 w-auto filter brightness-0 invert hover:opacity-90 transition-opacity"
              />
            </a>
            <p className="text-gray-300 text-sm leading-relaxed">
              At Ababil Group, we build the future through innovation,
              exceptional service, and a commitment to progress. With over a
              decade of experience, we lead change, empower industries, and
              create lasting value for communities and partners alike.
            </p>
            <div className="flex space-x-5 pt-1">
              {[
                {
                  icon: <FaFacebook size={18} />,
                  color: "hover:text-[#25A69F]",
                  link: "https://www.facebook.com/ababilgroup0/",
                },
                {
                  icon: <FaX size={18} />,
                  color: "hover:text-[#25A69F]",
                  link: "https://x.com/ababilgroup0",
                },
                {
                  icon: <FaInstagram size={18} />,
                  color: "hover:text-[#25A69F]",
                  link: "https://www.instagram.com/ababil.group0/",
                },
                {
                  icon: <FaLinkedin size={18} />,
                  color: "hover:text-[#25A69F]",
                  link: "https://www.linkedin.com/company/107995554/admin/dashboard/",
                },
                {
                  icon: <FaYoutube size={18} />,
                  color: "hover:text-[#25A69F]",
                  link: "https://www.youtube.com/channel/UC0GpetTVeP01QoP7KtVe6LA",
                },
                {
                  icon: <FaPinterest size={18} />,
                  color: "hover:text-[#25A69F]",
                  link: "https://www.pinterest.com/diziababilgroup/",
                },
                {
                  icon: <FaTiktok size={18} />,
                  color: "hover:text-[#25A69F]",
                  link: "https://www.tiktok.com/@ababil.group0",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className={`text-gray-400 ${social.color} hover:-translate-y-2 transition-transform duration-300`}
                  aria-label={`${social.icon.type.displayName} link`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white border-b border-blue-500 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "People At Ababil", path: "/people-at-ababil-group" },
                { name: "Media & News", path: "/media-and-news" },
                { name: "Career", path: "/career" },
                { name: "All Jobs", path: "/all-jobs" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-start group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full mt-2 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* INDUSTRIES  */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white border-b border-blue-500 pb-2 inline-block">
              Industries
            </h4>
            <ul className="space-y-3">
              {[
                "Automobile",
                "Manufacturing",
                "Agriculture",
                "Education Consultancy",
                "Manpower Solutions",
                "Language School",
                "Construction",
                "Garments",
                "More Service",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="/industries"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-start group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full mt-2 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white border-b border-blue-500 pb-2 inline-block">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MdLocationOn
                  className="text-blue-400 mt-1 flex-shrink-0"
                  size={18}
                />
                <div className="ml-3">
                  <h2 className="text-sm font-medium text-gray-300 mb-1">
                    Global Headquarters (GHQ)
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    112-116 Whitechapel Road, London, England, E1 1JE
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <MdLocationOn
                  className="text-blue-400 mt-1 flex-shrink-0"
                  size={18}
                />
                <div className="ml-3">
                  <h2 className="text-sm font-medium text-gray-300 mb-1">
                    Operations Center :
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Olaya Towers, Tower B, Intersection of Tahlia Street & Olaya
                    Street, Riyadh, Saudi Arabia
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <MdLocationOn
                  className="text-blue-400 mt-1 flex-shrink-0"
                  size={18}
                />
                <div className="ml-3">
                  <h2 className="text-sm font-medium text-gray-300 mb-1">
                    Global Business Center :
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Globex Business Centre, The Gate, Doha, Qatar
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <MdEmail className="text-blue-400 flex-shrink-0" size={18} />
                <a
                  href="mailto:info@rancon.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 ml-3 text-sm"
                >
                  info@ababil.group
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8 opacity-50"></div>

        {/* Bottom Footer */}
        <div className="text-center ">
          <p className="text-gray-400 text-xs mb-4 md:mb-0">
            &copy; {currentYear} Ababil Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
