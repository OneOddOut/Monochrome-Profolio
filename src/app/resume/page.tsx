'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import TechStack from '../components/TechStack'; 

// Sample data for Experience
const experienceData = [
  {
    title: "No Data",
    company: "No Datat",
    duration: "No Data",
    details: [
      "No Data Found"
    ]
  }
];

// Updated education data for Don Bosko (Start and End Date)
const educationData = [
  {
    institution: "Data not found",
    duration: "Data was found"  // Start at age 5 in 2014, finished in 2024 at age 15
  },
];

export default function Resume() {
  const [activeSection, setActiveSection] = useState('experience'); // Track which section is active

  return (
    <section className="bg-black text-white min-h-screen p-8 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full">
        {/* Page Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Resume
        </motion.h1>

        {/* Small Navigation Bar */}
        <nav className="mb-8 flex justify-center space-x-4">
          <button
            className={`px-6 py-2 rounded-lg text-lg font-semibold transition-all ${activeSection === 'experience' ? 'bg-white text-black' : 'bg-gray-800 text-gray-500 hover:bg-gray-700 hover:text-gray-200'}`}
            onClick={() => setActiveSection('experience')}
          >
            Experience
          </button>
          <button
            className={`px-6 py-2 rounded-lg text-lg font-semibold transition-all ${activeSection === 'education' ? 'bg-white text-black' : 'bg-gray-800 text-gray-500 hover:bg-gray-700 hover:text-gray-200'}`}
            onClick={() => setActiveSection('education')}
          >
            Education
          </button>
        </nav>

        {/* Timeline */}
        <div className="relative border-l border-gray-600">
          {/* Show Experience or Education based on activeSection */}
          {activeSection === 'experience' ? (
            <>
              <h2 className="text-2xl font-semibold mb-6 text-center">Experience</h2>
              {experienceData.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`mb-8 flex justify-${index % 2 === 0 ? 'start' : 'end'} relative`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                >
                  <div className="relative w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800">
                    <div className="absolute w-10 h-10 bg-white rounded-full -left-6 top-6 flex items-center justify-center">
                      <FaBriefcase className="text-black" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{exp.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{exp.company} - {exp.duration}</p>
                    <ul className="list-disc ml-4 space-y-2">
                      {exp.details.map((detail, idx) => (
                        <li key={idx} className="text-gray-300">{detail}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold mb-6 text-center">Education</h2>
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  className={`mb-8 flex justify-${index % 2 === 0 ? 'start' : 'end'} relative`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                >
                  <div className="relative w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800">
                    <div className="absolute w-10 h-10 bg-white rounded-full -left-6 top-6 flex items-center justify-center">
                      <FaGraduationCap className="text-black" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{edu.institution}</h3>
                    <p className="text-sm text-gray-400">{edu.duration}</p>
                  </div>
                </motion.div>
              ))}
            </>
          )}
        </div>
      </div>
      
      {/* Tech Stack Section */}
      <section className="bg-black text-white p-8">
        <div className="max-w-4xl mx-auto">
          <TechStack />
        </div>
      </section>
    </section>
  );
}
