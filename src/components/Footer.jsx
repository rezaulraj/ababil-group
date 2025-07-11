import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import logo from "/logo1.png";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-2xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-2 mb-12">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-3 ">
            <a href="/">
              <img
                src={logo}
                alt="ababil logo"
                className="h-36 filter brightness-5 invert"
              />
            </a>
            <p className="text-gray-300 max-w-[300px]">
              Building the future with innovative solutions and exceptional
              service.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 lg:col-span-2">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/people-at-ababil-group"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  People At Ababil
                </a>
              </li>
              <li>
                <a
                  href="/media-and-news"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Media & News
                </a>
              </li>
              <li>
                <a
                  href="/career"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Career
                </a>
              </li>
              <li>
                <a
                  href="/all-jobs"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  All Jobs
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 lg:col-span-2">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Construction
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Architecture
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Interior Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Consulting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 lg:col-span-2">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MdLocationOn
                  className="text-blue-400 mt-1 flex-shrink-0"
                  size={20}
                />
                <p className="text-gray-400">
                  123 Business Avenue, City, Country
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <MdPhone className="text-blue-400" size={20} />
                <p className="text-gray-400">+1 (123) 456-7890</p>
              </div>
              <div className="flex items-center space-x-3">
                <MdEmail className="text-blue-400" size={20} />
                <p className="text-gray-400">info@rancon.com</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-3">
            <h4 className="text-lg font-semibold text-white">Follow Us</h4>
            <div className="shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100066224514696&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1387842505640830"
                // width="300"
                height="350"
                style={{
                  border: "none",
                  overflow: "hidden",
                  scrollBehavior: "smooth",
                  borderBlockColor: "#fff",
                }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="w-auto h-[350px] rounded-2xl p-2 bg-amber-50"
                title="Facebook Page Plugin"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Rancon. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 text-sm transition"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 text-sm transition"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 text-sm transition"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
