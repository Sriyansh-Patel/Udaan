import { useState, useEffect } from "react";

export default function NewsBoard() {
  const [activeTab, setActiveTab] = useState("internships");
  const [scrollIndex, setScrollIndex] = useState(0);

  const internships = [
    { title: "Google Summer Internship 2025", link: "https://intern.google.com/" },
    { title: "Microsoft Research Internship", link: "https://careers.microsoft.com/" },
    { title: "Tesla AI Internship Program", link: "https://www.tesla.com/careers" },
    { title: "Apple ML Internship", link: "https://www.apple.com/careers" },
    { title: "Netflix Software Internship", link: "https://jobs.netflix.com/" },
  ];

  const jobs = [
    { title: "Software Engineer - Amazon", link: "https://www.amazon.jobs/" },
    { title: "Data Analyst - Meta", link: "https://www.metacareers.com/" },
    { title: "Cybersecurity Engineer - IBM", link: "https://www.ibm.com/careers" },
    { title: "Backend Developer - Google", link: "https://careers.google.com/" },
    { title: "Full Stack Engineer - LinkedIn", link: "https://www.linkedin.com/careers" },
  ];

  const getActiveItems = () => (activeTab === "internships" ? internships : jobs);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prevIndex) => (prevIndex + 1) % getActiveItems().length);
    }, 2000); // Scrolls every 2 seconds

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <div className="relative bg-blue-950 shadow-lg rounded-lg w-[80%] h-[300px] mx-auto p-4 border border-gray-200 overflow-hidden">
      {/* Notice Board Header */}
      <div className="text-center text-white font-bold text-lg py-2 bg-blue-600 rounded-t-lg">
        📢 Notice Board
      </div>

      {/* Tabs */}
      <div className="flex justify-around border-b pb-2 mt-2">
        <button
          onClick={() => { setActiveTab("internships"); setScrollIndex(0); }}
          className={`px-4 py-2 ${
            activeTab === "internships"
              ? "border-b-2 border-blue-500 text-blue-600 font-bold"
              : "text-gray-600"
          }`}
        >
          Internships
        </button>
        <button
          onClick={() => { setActiveTab("jobs"); setScrollIndex(0); }}
          className={`px-4 py-2 ${
            activeTab === "jobs"
              ? "border-b-2 border-green-500 text-green-600 font-bold"
              : "text-gray-600"
          }`}
        >
          Jobs
        </button>
      </div>

      {/* Scrolling Content */}
      <div className="mt-4 h-[180px] overflow-hidden relative">
        <ul className="absolute w-full transition-transform duration-700" style={{ transform: `translateY(-${scrollIndex * 40}px)` }}>
          {getActiveItems().map((item, index) => (
            <li key={index} className="h-10 flex items-center">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-800 font-medium hover:text-blue-500 transition"
              >
                {item.title} →
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* View More Button */}
      <div className="text-center mt-4 block relative">
        <a
          href="#"
          className="inline-block bg-red-600 text-white font-bold py-2 px-6 rounded-md hover:bg-red-700  relative"
        >
          View More
        </a>
      </div>
    </div>
  );
}
