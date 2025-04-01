import React, { useState } from "react";
import { motion } from "framer-motion";

export default function VerticalTabs() {
  const [activeYear, setActiveYear] = useState("2024");

  // Data for each year
  const yearData = {
    "2024": {
      placementRate: "95%",
      topRecruiters: ["Google", "Microsoft", "Amazon"],
      avgPackage: "₹10 LPA",
    },
    "2023": {
      placementRate: "92%",
      topRecruiters: ["Tata Consultancy Services", "Infosys", "Wipro"],
      avgPackage: "₹8 LPA",
    },
    "2022": {
      placementRate: "89%",
      topRecruiters: ["Adobe", "Accenture", "Cognizant"],
      avgPackage: "₹7.5 LPA",
    },
    "2021": {
      placementRate: "87%",
      topRecruiters: ["Flipkart", "HCL", "Zoho"],
      avgPackage: "₹6.8 LPA",
    },
    "2020": {
      placementRate: "85%",
      topRecruiters: ["IBM", "SAP", "Deloitte"],
      avgPackage: "₹6 LPA",
    },
  };

  // Handle tab switch
  const handleTabClick = (year) => {
    setActiveYear(year);
  };

  return (
    <div className="flex">
      {/* Vertical Tabs - Left Sidebar */}
      <div className="w-1/4 bg-gray-800 text-gray-200 p-4 space-y-4 rounded-l-lg">
        {Object.keys(yearData).map((year) => (
          <motion.button
            key={year}
            onClick={() => handleTabClick(year)}
            className={`py-3 px-6 w-full text-left rounded-lg ${
              activeYear === year ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            {year}
          </motion.button>
        ))}
      </div>

      {/* Content Area - Right Side */}
      <div className="w-3/4 bg-gray-900 text-gray-200 p-6 rounded-r-lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-red-400 mb-4">
            Placement Stats for {activeYear}
          </h3>
          <div className="space-y-2">
            <p><strong>Placement Rate:</strong> {yearData[activeYear].placementRate}</p>
            <p><strong>Top Recruiters:</strong> {yearData[activeYear].topRecruiters.join(", ")}</p>
            <p><strong>Average Package:</strong> {yearData[activeYear].avgPackage}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
