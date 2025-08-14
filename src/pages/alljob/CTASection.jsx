import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaComments } from "react-icons/fa";
import { MdAccessTime, MdEmail, MdPhone } from "react-icons/md";
import bgimage from "../../assets/home/movedo-bw-bg.jpg?url";

const CTASection = () => {
  const cards = [
    {
      id: 1,
      icon: <FaMapMarkerAlt className="text-3xl text-blue-500" />,
      title: "Our Location",
      content: "112-116 Whitechapel Road, London, England, E1 1JE",
      buttonText: "Get Directions",
      buttonIcon: <FaMapMarkerAlt className="ml-2" />,
    },
    {
      id: 2,
      icon: <FaCalendarAlt className="text-3xl text-green-500" />,
      title: "Working Hours",
      content: (
        <>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="font-medium">Mon-Fri</span>
            <span>9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="font-medium">Saturday</span>
            <span>10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-medium">Sunday</span>
            <span className="text-red-500">Closed</span>
          </div>
        </>
      ),
      buttonText: "Book Appointment",
      buttonIcon: <MdAccessTime className="ml-2" />,
    },
    {
      id: 3,
      icon: <FaComments className="text-3xl text-purple-500" />,
      title: "Say Hello",
      content: (
        <>
          <div className="flex items-center">
            <MdEmail className="text-purple-500 flex-shrink-0" size={18} />
            <a
              href="mailto:info@rancon.com"
              className="text-gray-700 hover:text-blue-400 transition-colors duration-300 ml-3 text-sm"
            >
              info@ababil.group
            </a>
          </div>
          {/* <div className="flex items-center py-2">
            <MdPhone className="mr-3 text-gray-600" />
            <span>+1 (212) 555-1234</span>
          </div> */}
        </>
      ),
      buttonText: "Contact Us",
      buttonIcon: <FaComments className="ml-2" />,
    },
  ];

  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgimage})`,
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          How Can We Help You?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          We're here to serve you. Reach out through any of these convenient
          ways.
        </p>

        <div className="relative">
          <div className="flex items-center justify-center overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center justify-center space-x-6">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="flex-shrink-0 w-80 bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105"
                >
                  <div className="p-8 h-full flex flex-col">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-gray-100 rounded-full">
                        {card.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {card.title}
                    </h3>
                    <div className="text-gray-600 mb-6 flex-grow">
                      {typeof card.content === "string" ? (
                        <p className="whitespace-pre-line">{card.content}</p>
                      ) : (
                        card.content
                      )}
                    </div>
                    {/* <button className="mt-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center">
                      {card.buttonText}
                      {card.buttonIcon}
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
