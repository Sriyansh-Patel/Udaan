import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/Udaanlogo.jpg";

export default function Intro() {
  return (
    <div className="bg-gray-900 text-gray-200 p-12 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-6xl mx-auto">
        
        {/* Left Side - Image/Icon */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={logo} 
            alt="Who are we?" 
            className="rounded-lg h-[270px] w-[270px] shadow-xl border-4 border-red-500"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div 
          className="space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold text-red-400">Who Are We?</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            The Placement Office is responsible for campus placement at 
            <span className="text-red-400 font-semibold"> J.C Bose UST YMCA, Faridabad</span>. 
            Our team consists of the Placement-in-Charge, the Assistant Placement Officer, 
            staff, and student representatives. We bridge the gap between 
            <span className="text-red-400 font-semibold"> recruiters and students</span>, 
            ensuring seamless placement experiences.
          </p>
          <p className="text-md text-gray-400">
            We offer excellent infrastructure and a dedicated team to support 
            every stage of the placement process.
          </p>

          {/* Call to Action Button */}
          <div className="mt-4">
            <motion.a 
              href="#"
              className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
