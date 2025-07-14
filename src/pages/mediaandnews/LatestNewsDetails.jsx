import React from "react";
import { useParams } from "react-router-dom";
import { FaCalendarAlt, FaClock, FaTag, FaArrowLeft } from "react-icons/fa";
import { IconContext } from "react-icons";
import {
  FaUsers,
  FaGraduationCap,
  FaGlobe,
  FaUniversity,
  FaBriefcaseMedical,
  FaHandshake,
  FaMoneyBillWave,
  FaLanguage,
  FaUserTie,
  FaShieldAlt,
  FaChalkboardTeacher,
  FaBuilding,
} from "react-icons/fa";

const getRelativeTime = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / seconds);
    if (interval >= 1) {
      return interval === 1 ? `1 ${unit} ago` : `${interval} ${unit}s ago`;
    }
  }

  return "Just now";
};
const LatestNewsDetails = () => {
  const { slug } = useParams();
  const iconComponents = {
    FaUsers,
    FaGraduationCap,
    FaGlobe,
    FaUniversity,
    FaBriefcaseMedical,
    FaHandshake,
    FaMoneyBillWave,
    FaLanguage,
    FaUserTie,
    FaShieldAlt,
    FaChalkboardTeacher,
    FaBuilding,
  };

  const newsData = {
    latestNews: [
      {
        id: 1,
        title:
          "Powering Global Workforces: How Ababil Group Supports Recruitment Agencies Worldwide",
        excerpt:
          "In today’s rapidly evolving labor market, reliable manpower supply is the backbone of successful industries.",
        content:
          "At Ababil Group, we understand the critical role recruitment agencies play in connecting employers with the right talent fast, efficiently, and ethically. That's why our manpower supply division is built to serve agencies, not individuals streamlining the hiring process and ensuring a pipeline of job-ready, skilled workers.",
        para1:
          "Our approach goes beyond basic recruitment. We collaborate closely with licensed agencies, offering pre-screened candidates trained in fields such as construction, hospitality, healthcare, and technical services. Every worker is vetted not only for skills but also for reliability, adaptability, and compliance with international standards. Whether you’re sourcing for short-term projects or long-term placements, our manpower solutions help you deliver results without delays.",
        para2:
          "What sets Ababil Group apart is our commitment to partnership. We don’t just fill gaps, we build bridges between demand and supply, ensuring your agency remains trusted by clients. From document processing to pre-deployment orientation, we handle the heavy lifting so you can focus on growth. With Ababil Group by your side, scaling your recruitment success across borders becomes a seamless reality.",
        image:
          "https://images.unsplash.com/photo-1740042372484-67c211647db9?q=80&w=1089&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2025-06-15",
        readTime: "5 min read",
        icon: "FaUsers",
        category: "Recruitment",
        tags: ["manpower", "agencies", "global workforce"],
      },
      {
        id: 2,
        title:
          "Building Careers, Not Just Skills: How Ababil Group's Training School Empowers the Workforce of Tomorrow",
        excerpt:
          "In today's fast-paced job market, having the right skills is more important than ever.",
        content:
          "At Ababil Group's Skill Training School, we equip individuals with practical, hands-on training designed to meet real-world demands. From electrical maintenance and healthcare support to hospitality and ICT, our programs prepare learners not just to fill jobs, but to build long-term careers. We believe true empowerment starts with relevant, job-ready skills and that’s exactly what we offer in every class, lab, and workshop.",
        para1:
          "Our training programs are intentionally short, affordable, and targeted ranging from 3 to 6 months to serve school leavers, job seekers, and professionals looking to pivot or upgrade their skills. Beyond the classroom, we offer mock interviews, career coaching, and direct links to local and international hiring partners. It’s not just about certificates; it’s about confidence, competence, and connection to real opportunities. As one of our recent graduates, Ruqayyah, shared: “I didn’t have a degree or connections. But with Ababil’s training and support, I now work full-time in a private clinic and can provide for my daughter. I never thought I’d get here but I did.”",
        para2:
          "What makes our Skill Training School stand out is the environment we create: expert instructors, cutting-edge equipment, and a community that genuinely wants you to succeed. At Ababil Group, we don’t just provide training, we create pathways. Whether you’re looking to step into a new field or finally pursue your dream profession, we’re here to walk that journey with you. The future isn’t just something you wait for it’s something you build. And at Ababil, we help you build it with purpose.",
        image:
          "https://images.unsplash.com/photo-1628147529780-36964fbb8d54?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2025-04-10",
        readTime: "5 min read",
        icon: "FaGraduationCap",
        category: "Training",
        tags: ["skills development", "career growth", "vocational training"],
      },
      {
        id: 3,
        title:
          "From Dream to Departure: How Ababil Group Turns International Education into a Reality",
        excerpt:
          "At Ababil Group, we believe international education should be more than a dream.",
        content:
          "Through our comprehensive Education Consultancy services, we guide students through every step of the journey, from choosing the right course and university to handling visa applications, scholarship assistance, and pre-departure preparation. Whether aiming for the UK, Canada, Australia, UAE, or beyond, our mission is to match each student with institutions that align with their passion, potential, and career goals.",
        para1:
          "Our personalized approach has helped hundreds of students gain admission into top-tier institutions worldwide. One inspiring example is Suleiman, a student from Ghana who wanted to study engineering in the UK but didn’t know where to begin. “A friend recommended Ababil,” he says. “They helped me craft a strong application, secure a scholarship, and get my visa all in under two months. Now, I’m studying at Oxford Brookes University and thriving.” Stories like Suleiman’s are a testament to our commitment to student success.",
        para2:
          "What sets us apart is our genuine care and continued support. Parents trust us, and students often refer to their friends and siblings as a reflection of the trust we’ve earned over the years. At Ababil Group, we don’t just help students gain admission; we help them transition into a new chapter of life with clarity, confidence, and community. Your global education journey starts here—and we’re with you every step of the way.",
        image:
          "https://images.unsplash.com/photo-1709054172839-17880c040f22?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2024-09-05",
        readTime: "4 min read",
        icon: "FaGlobe",
        category: "Education",
        tags: ["study abroad", "visa assistance", "scholarships"],
      },
      {
        id: 4,
        title:
          "Empowering Dreams: How Ababil Group Connects Students to Global Higher Education Opportunities",
        excerpt:
          "In today's competitive academic landscape, securing admission into a reputable higher education institution can feel overwhelming for students and parents alike.",
        content:
          "That’s where Ababil Group steps in. As a trusted education consultancy, we specialize in guiding students toward universities and colleges around the world helping them not only get accepted but thrive. Whether it's the UK, USA, Canada, or Australia, our expert advisors provide personalized guidance on course selection, application requirements, and scholarship opportunities.",
        para1:
          "What sets Ababil apart is our student-first approach. We take time to understand each student’s academic background, career goals, and personal aspirations before recommending institutions that match their profile. From preparing admission documents to acing interviews and securing visas, we provide end-to-end support every step of the way. Our strong partnerships with accredited universities and higher education bodies also mean students benefit from reliable placements and real opportunities for success.",
        para2:
          "Just ask Fahad, one of our recent clients: “I had no idea how to navigate the admission process for schools abroad. But Ababil made it simple. They helped me secure a scholarship and admission into a top university in Canada. Today, I’m studying computer science and loving every moment.” At Ababil Group, we don’t just process applications, we open doors to global futures. With every student we support, we help build a generation that’s globally competent, confident, and prepared for tomorrow.",
        image:
          "https://images.unsplash.com/photo-1630569265403-9f38855679fa?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2025-02-28",
        readTime: "5 min read",
        icon: "FaUniversity",
        category: "Education",
        tags: ["higher education", "university placement", "career guidance"],
      },
      {
        id: 5,
        title:
          "How Ababil Group Helped Elena Land a Healthcare Job in Austria Without Leaving Romania",
        excerpt:
          "When Elena Mureșan, a 28-year-old from Bucharest, began searching for international job opportunities, she wasn’t sure where to start. She had training in elderly care and a strong work ethic but limited connections outside of Romania.",
        content:
          "Then she came across Ababil Group’s virtual recruitment program for healthcare professionals seeking jobs in Austria. “What caught my eye was that everything could be done online application, interviews, even the onboarding process,” Elena recalls.",
        para1:
          "Through Ababil Group’s seamless virtual recruitment platform, Elena was guided step-by-step. The team helped her polish her CV, prepare for a Zoom interview with a care home in Vienna, and navigate the legal paperwork required for employment abroad. “The process felt transparent and professional,” she said. “They even offered virtual orientation to help me understand Austrian work culture before I arrived.”",
        para2:
          "Today, Elena is working full-time at a reputable private clinic in Vienna, earning a competitive salary, and enjoying a fresh start in a new country. “I never thought a virtual hiring process could be this smooth. Thanks to Ababil Group, I’m building a future I once thought was out of reach without spending a cent on agency scams or endless paperwork.” Ababil Group continues to connect skilled European candidates like Elena to international employers offering virtual recruitment you can trust, and life-changing opportunities you can count on.",
        image:
          "https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2025-05-20",
        readTime: "5 min read",
        icon: "FaBriefcaseMedical",
        category: "Recruitment",
        tags: ["healthcare", "virtual recruitment", "international jobs"],
      },
      {
        id: 6,
        title:
          "Building a Culture of Trust: The Foundation of Great Place To Work Certified Organisations",
        excerpt:
          "At Ababil Group, we believe that trust isn't just a value, it's the foundation of a thriving organization.",
        content:
          "In today’s competitive world, where employee satisfaction drives business success, cultivating a culture of trust is no longer optional. It’s essential. From transparent leadership and open-door policies to fair treatment and recognition, we ensure every member of our team feels respected, supported, and genuinely part of something meaningful.",
        para1:
          "Certified great workplaces don’t happen by chance; they're the result of consistent effort to empower people at every level. At Ababil Group, we champion this belief across all our services, from recruitment and manpower supply to education consultancy and skill training. Whether someone is joining us as a learner, a trainer, or a team member, our priority is to create an environment where they feel safe to grow, contribute, and lead. Regular feedback, opportunities for advancement, and a collaborative spirit keep our workplace dynamic and inclusive.",
        para2:
          "Trust is not just a feel-good concept it drives real performance. When people trust their leadership, understand their roles, and feel appreciated, they deliver their best work. At Ababil Group, we’re proud to lead with empathy, integrity, and purpose. Our success is built on the belief that when you invest in people, they invest in your mission and that’s how we continue to grow stronger, together.",
        image:
          "https://images.unsplash.com/photo-1640030104754-0a33c686c533?q=80&w=1126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2025-05-15",
        readTime: "4 min read",
        icon: "FaHandshake",
        category: "Corporate",
        tags: ["work culture", "employee satisfaction", "leadership"],
      },
      {
        id: 7,
        title:
          "From Learning to Earning: How Ababil Group Bridges the Gap Between Education and Employment",
        excerpt:
          "In today's rapidly changing world, having a certificate is no longer enough.",
        content:
          "Employers want skills. Industries demand adaptability. And job seekers are looking for more than just a paycheck; they're searching for purpose, growth, and stability. At Ababil Group, we understand that gap between learning and earning and we’re committed to bridging it.",
        para1:
          "Through our Skill Training School, Language School, and Higher Education consultancy, we don’t just prepare people for jobs we prepare them for careers. Every program we offer is designed with one goal in mind: employability. From hands-on hospitality training to ICT labs and healthcare simulations, our students gain real-world experience that employers value. And because we work closely with industry partners, we ensure our training aligns with current market needs, not outdated theory.",
        para2:
          "What sets Ababil apart is our end-to-end support. We don’t wave goodbye after the training ends. Instead, we help our graduates build CVs, prepare for interviews, and connect with local and international employers through our recruitment and manpower supply services. The result? Thousands of people who once struggled to find direction are now working, earning, and building brighter futures for themselves and their families. Want to go from learning to earning? Ababil Group is where that journey begins.",
        image:
          "https://images.unsplash.com/photo-1689903777384-31fd780bef3c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2025-03-15",
        readTime: "4 min read",
        icon: "FaMoneyBillWave",
        category: "Training",
        tags: ["career readiness", "job placement", "skills training"],
      },
      {
        id: 8,
        title:
          "Language Is Power: How Ababil's Language School Is Opening Global Doors",
        excerpt:
          "In an interconnected world, the ability to communicate across cultures is no longer a luxury, it's a necessity.",
        content:
          "Whether you're looking to study abroad, land a job in a multinational company, or simply boost your confidence, mastering a new language can be life-changing. At Ababil Group’s Language School, we don’t just teach languages, we unlock opportunities.",
        para1:
          "Our programs go beyond grammar and vocabulary. We train students in practical, everyday communication. From business English for professionals to German and French for academic and migration purposes, our courses are tailored to real-world goals. Small class sizes, native-speaking instructors, and interactive sessions make the learning experience effective, fun, and immersive.",
        para2:
          "For many of our students, this is the first step toward a better future. Take Amina, for example, a young woman from a small town who joined our English program with dreams of studying in the UK. Today, she’s pursuing her Master's degree in London, confidently navigating life abroad thanks to the foundation she built with us. At Ababil Group, we believe language is more than just words, it's power, freedom, and access. Whether you're starting fresh or preparing for an international career, our Language School is the bridge to your global future.",
        image:
          "https://images.unsplash.com/photo-1706403615881-d83dc2067c5d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2025-02-15",
        readTime: "4 min read",
        icon: "FaLanguage",
        category: "Education",
        tags: ["language learning", "communication", "cultural integration"],
      },
      {
        id: 9,
        title:
          "Ababil Group: A Trusted Partner for Recruitment Agencies Worldwide",
        excerpt:
          "At Job Seekers News, we work closely with agents and recruitment professionals who are constantly seeking reliable partners to help place candidates in reputable jobs across the globe.",
        content:
          "One name that continues to earn the trust of agents is Ababil Group, a company known for its structured processes, ethical recruitment standards, and commitment to delivering results.",
        para1:
          "Ababil Group doesn’t just fill vacancies; they work with licensed agents to streamline documentation, ensure worker readiness, and connect qualified candidates with verified employers in countries like the UK, Romania, and the UAE. Their team understands the importance of transparency, speed, and compliance making them an ideal partner for agencies looking to scale international placements without compromising on quality.",
        para2:
          "If you’re an agency looking for a dependable partner to support your overseas recruitment operations, Ababil Group is a name worth knowing. At Job Seekers News, we’re proud to spotlight organizations that make the agent’s job easier and Ababil consistently delivers.",
        image:
          "https://images.unsplash.com/photo-1588623731810-171b80f3c55e?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2025-06-15",
        readTime: "4 min read",
        icon: "FaUserTie",
        category: "Recruitment",
        tags: [
          "agency partnership",
          "global recruitment",
          "talent acquisition",
        ],
      },
      {
        id: 10,
        title:
          "Why Recruitment Agencies Trust Ababil Group for Global Workforce Solutions",
        excerpt:
          "In the fast-paced world of international recruitment, agencies need more than just manpower...",
        content:
          "They need trustworthy partners who deliver on time, stay compliant, and maintain strong relationships with employers. That’s why more and more agents are turning to Ababil Group, a leading force in workforce solutions across Europe, the Gulf, and beyond.",
        para1:
          "What sets Ababil apart is its agent-first model. The company collaborates exclusively with licensed agencies, offering full backend support from candidate screening and documentation to visa processing and deployment. Their consistent communication, ethical practices, and deep knowledge of destination country requirements make them a reliable extension of any agency’s operations.",
        para2:
          "At Job Seekers News, we connect with agencies worldwide and time and again, we hear the same thing: Ababil Group gets the job done. If you're an agent seeking a dependable partner who values professionalism and transparency as much as you do, Ababil should be at the top of your list.",
        image:
          "https://images.unsplash.com/photo-1594492691731-3d7974140624?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2024-06-15",
        readTime: "4 min read",
        icon: "FaShieldAlt",
        category: "Recruitment",
        tags: [
          "trusted partner",
          "workforce solutions",
          "international hiring",
        ],
      },
    ],
    categories: [
      {
        name: "Recruitment",
        icon: "FaUsers",
        count: 4,
      },
      {
        name: "Education",
        icon: "FaGraduationCap",
        count: 3,
      },
      {
        name: "Training",
        icon: "FaChalkboardTeacher",
        count: 2,
      },
      {
        name: "Corporate",
        icon: "FaBuilding",
        count: 1,
      },
    ],
    icons: {
      FaUsers: "Users",
      FaGraduationCap: "Graduation Cap",
      FaGlobe: "Globe",
      FaUniversity: "University",
      FaBriefcaseMedical: "Medical Briefcase",
      FaHandshake: "Handshake",
      FaMoneyBillWave: "Money Bill",
      FaLanguage: "Language",
      FaUserTie: "User Tie",
      FaShieldAlt: "Shield",
      FaChalkboardTeacher: "Teacher",
      FaBuilding: "Building",
    },
  };

  const newsItem = newsData.latestNews.find(
    (item) =>
      item.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "") === slug
  );

  if (!newsItem) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            News article not found
          </h2>
          <p className="mt-2 text-gray-600">
            The article you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <a
          href="/latest-news"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Back to all news
        </a>
      </div>

      <article className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Featured Image */}
        <div className="h-96 w-full overflow-hidden">
          <img
            src={newsItem.image}
            alt={newsItem.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Article Content */}
        <div className="p-8">
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
            <div className="flex items-center">
              <FaCalendarAlt className="mr-2" />
              <span>
                {getRelativeTime(newsItem.date)}
                {/* Show both relative time and full date on hover */}
                <span className="hidden md:inline-block ml-2 text-gray-400">
                  (
                  {new Date(newsItem.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                  )
                </span>
              </span>
            </div>
            <div className="flex items-center">
              <FaClock className="mr-2" />
              <span>{newsItem.readTime}</span>
            </div>
            <div className="flex items-center bg-blue-100 px-3 py-1 rounded-full">
              <IconContext.Provider value={{ className: "text-blue-600 mr-2" }}>
                {React.createElement(iconComponents[newsItem.icon])}
              </IconContext.Provider>
              <span className="font-medium text-blue-600">
                {newsItem.category}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {newsItem.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {newsItem.excerpt}
          </p>

          {/* Content */}
          <div className="prose max-w-none text-gray-700 space-y-4 mb-10">
            <p className="mb-6">{newsItem.content}</p>
            {/* Additional content paragraphs would go here */}
            <p className="mb-6">{newsItem.para1}</p>
            <p className="mb-6">{newsItem.para1}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-200">
            <FaTag className="text-gray-400 mt-1 mr-1" />
            {newsItem.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2 mb-2"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Related News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.latestNews
            .filter(
              (item) =>
                item.id !== newsItem.id && item.category === newsItem.category
            )
            .slice(0, 3)
            .map((relatedItem) => (
              <div
                key={relatedItem.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={relatedItem.image}
                  alt={relatedItem.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>
                      {new Date(relatedItem.date).toLocaleDateString()}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{relatedItem.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                    {relatedItem.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {relatedItem.excerpt}
                  </p>
                  <a
                    href={`/latest-news/${relatedItem.title
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/^-+|-+$/g, "")}`}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default LatestNewsDetails;
