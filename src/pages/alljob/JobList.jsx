import React from "react";
import {
  FaSearchDollar,
  FaChartLine,
  FaMoneyBillWave,
  FaClock,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

const SalesMarketingJobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Sales Executive",
      type: "Full-time",
      category: "Sales",
      icon: <FaSearchDollar className="text-blue-500 text-2xl" />,
      location: "New York, NY",
      salary: "$15000 - $20,000/yr + commission",
      experience: "3+ years",
      posted: "10 days ago",
      description:
        "Drive revenue growth by identifying new business opportunities and maintaining client relationships.",
      requirements: [
        "Bachelor's in Business or Marketing",
        "Proven sales experience",
        "Strong negotiation skills",
        "CRM proficiency",
      ],
    },
    {
      id: 2,
      title: "Digital Marketing Specialist",
      type: "Full-time",
      category: "Marketing",
      icon: <FaChartLine className="text-purple-500 text-2xl" />,
      location: "Remote",
      salary: "$18,000 - $22,000/yr",
      experience: "2+ years",
      posted: "1 week ago",
      description:
        "Develop and implement digital marketing campaigns across SEO, email, and social platforms.",
      requirements: [
        "Bachelor's in Marketing or Communications",
        "SEO and Google Ads experience",
        "Email marketing tools",
        "Analytical mindset",
      ],
    },
    {
      id: 3,
      title: "Content Marketing Manager",
      type: "Full-time",
      category: "Marketing",
      icon: <MdDesignServices className="text-green-500 text-2xl" />,
      location: "Chicago, IL",
      salary: "$22,000 - $28,000/yr",
      experience: "4+ years",
      posted: "5 days ago",
      description:
        "Lead content strategy, oversee blog and social content, and manage content calendars.",
      requirements: [
        "Bachelor's in Journalism, Marketing, or similar",
        "Content writing and editing",
        "Experience with CMS (e.g., WordPress)",
        "Team leadership skills",
      ],
    },
    {
      id: 4,
      title: "Business Development Associate",
      type: "Full-time",
      category: "Sales",
      icon: <FaSearchDollar className="text-blue-500 text-2xl" />,
      location: "Boston, MA",
      salary: "$30,000 - $40,000/yr + bonus",
      experience: "1+ year",
      posted: "2 Year ago",
      description:
        "Identify leads, conduct outreach, and support pipeline growth through strategic partnerships.",
      requirements: [
        "Bachelor's degree",
        "Strong communication and research skills",
        "Cold outreach experience",
        "CRM and lead tracking tools",
      ],
    },
    {
      id: 5,
      title: "Social Media Marketing Assistant",
      type: "Part-time",
      category: "Marketing",
      icon: <MdDesignServices className="text-pink-500 text-2xl" />,
      location: "Los Angeles, CA",
      salary: "$22 - $28/hr",
      experience: "1+ year",
      posted: "1 day ago",
      description:
        "Assist in content scheduling, engagement tracking, and campaign reporting across social platforms.",
      requirements: [
        "Knowledge of major social platforms",
        "Graphic design basics",
        "Copywriting ability",
        "Attention to detail",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Sales & Marketing Career Opportunities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our dynamic team of sales and marketing professionals driving
            business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <FaSearchDollar className="text-blue-500 text-3xl mr-3" />
              <h3 className="text-xl font-bold text-gray-800">Sales Careers</h3>
            </div>
            <p className="text-gray-600 mb-4">
              We're looking for motivated sales professionals to expand our
              client base and drive revenue growth.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                Business Development
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                Account Management
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                Sales Operations
              </span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
            <div className="flex items-center mb-4">
              <FaChartLine className="text-purple-500 text-3xl mr-3" />
              <h3 className="text-xl font-bold text-gray-800">
                Marketing Careers
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Creative and analytical marketers wanted to develop impactful
              campaigns and grow our brand.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                Digital Marketing
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                Content Strategy
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                Social Media
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start space-x-4 mb-4 sm:mb-0">
                    <div className="p-3 bg-gray-100 rounded-lg">{job.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {job.title}
                      </h3>
                      <div className="flex items-center mt-1 flex-wrap">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            job.category === "Sales"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-purple-100 text-purple-800"
                          }`}
                        >
                          {job.category}
                        </span>
                        <span className="mx-2 text-gray-400 hidden sm:inline">
                          •
                        </span>
                        <span className="text-gray-600 mr-2 sm:mr-0">
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      const section = document.querySelector("#apply-form");
                      section?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-5 py-2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 whitespace-nowrap w-full sm:w-auto text-center"
                  >
                    Apply Now
                  </button>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center text-gray-700">
                    <FaMapMarkerAlt className="mr-2 text-gray-500" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaMoneyBillWave className="mr-2 text-gray-500" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaClock className="mr-2 text-gray-500" />
                    <span>{job.experience}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaCalendarAlt className="mr-2 text-gray-500" />
                    <span>Posted {job.posted}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-gray-700 mb-4">{job.description}</p>

                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Key Requirements:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 pl-4">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors duration-300 inline-flex items-center">
            View All Open Positions
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default SalesMarketingJobs;
