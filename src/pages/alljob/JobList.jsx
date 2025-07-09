import React from "react";
import {
  FaHardHat,
  FaTruckMoving,
  FaPaintRoller,
  FaChartLine,
  FaSearchDollar,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClock,
  FaCalendarAlt,
} from "react-icons/fa";
import { MdEngineering, MdDesignServices } from "react-icons/md";

const ConstructionMarketingJobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Construction Project Manager",
      type: "Full-time",
      category: "Construction",
      icon: <FaHardHat className="text-orange-500 text-2xl" />,
      location: "Houston, TX",
      salary: "$85,000 - $110,000/yr",
      experience: "5+ years",
      posted: "3 days ago",
      description:
        "Oversee commercial construction projects from conception to completion, ensuring quality, safety, and timely delivery.",
      requirements: [
        "Bachelor's in Construction Management",
        "OSHA 30-Hour Certification",
        "Proficient in Procore or similar",
        "Strong leadership skills",
      ],
    },
    {
      id: 2,
      title: "Digital Marketing Specialist",
      type: "Full-time",
      category: "Marketing",
      icon: <FaChartLine className="text-blue-500 text-2xl" />,
      location: "Remote",
      salary: "$65,000 - $85,000/yr",
      experience: "3+ years",
      posted: "1 week ago",
      description:
        "Develop and execute digital marketing campaigns to drive lead generation and brand awareness.",
      requirements: [
        "Google Ads/Analytics certified",
        "Experience with SEO/SEM",
        "Proficient in marketing automation",
        "Content creation skills",
      ],
    },
    {
      id: 3,
      title: "Civil Engineer",
      type: "Full-time",
      category: "Construction",
      icon: <MdEngineering className="text-yellow-600 text-2xl" />,
      location: "Denver, CO",
      salary: "$90,000 - $120,000/yr",
      experience: "4+ years",
      posted: "5 days ago",
      description:
        "Design and oversee infrastructure projects including roads, bridges, and utilities.",
      requirements: [
        "PE License required",
        "AutoCAD Civil 3D proficiency",
        "Knowledge of local regulations",
        "Field experience preferred",
      ],
    },
    {
      id: 4,
      title: "Marketing Coordinator",
      type: "Contract",
      category: "Marketing",
      icon: <MdDesignServices className="text-purple-500 text-2xl" />,
      location: "Chicago, IL",
      salary: "$30 - $45/hr",
      experience: "2+ years",
      posted: "2 days ago",
      description:
        "Support marketing team with campaign execution, content creation, and event planning.",
      requirements: [
        "Bachelor's in Marketing",
        "Social media management",
        "Adobe Creative Suite skills",
        "Excellent communication",
      ],
    },
    {
      id: 5,
      title: "Heavy Equipment Operator",
      type: "Full-time",
      category: "Construction",
      icon: <FaTruckMoving className="text-green-600 text-2xl" />,
      location: "Phoenix, AZ",
      salary: "$25 - $35/hr",
      experience: "3+ years",
      posted: "1 day ago",
      description:
        "Operate heavy machinery for commercial construction sites with focus on safety and efficiency.",
      requirements: [
        "CDL preferred",
        "OSHA 10-Hour Certification",
        "Experience with excavators",
        "Physical stamina required",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Construction & Marketing Career Opportunities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our growing team of professionals building the future and
            connecting with customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Construction Jobs Summary */}
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
            <div className="flex items-center mb-4">
              <FaHardHat className="text-orange-500 text-3xl mr-3" />
              <h3 className="text-xl font-bold text-gray-800">
                Construction Careers
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              We're hiring skilled tradespeople, engineers, and project managers
              for exciting infrastructure projects nationwide.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                Project Management
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                Civil Engineering
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                Skilled Trades
              </span>
            </div>
          </div>

          {/* Marketing Jobs Summary */}
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <FaSearchDollar className="text-blue-500 text-3xl mr-3" />
              <h3 className="text-xl font-bold text-gray-800">
                Marketing Careers
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Creative minds wanted! Join our marketing team to develop
              campaigns that connect our services with customers.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                Digital Marketing
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                Content Creation
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                Market Research
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
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gray-100 rounded-lg">{job.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {job.title}
                      </h3>
                      <div className="flex items-center mt-1">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            job.category === "Construction"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {job.category}
                        </span>
                        <span className="mx-2 text-gray-400">•</span>
                        <span className="text-gray-600">{job.type}</span>
                      </div>
                    </div>
                  </div>
                  <button className="px-5 py-2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 whitespace-nowrap">
                    Full Details
                  </button>
                </div>

                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
            View All 24 Open Positions
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

export default ConstructionMarketingJobs;
