'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaDownload } from 'react-icons/fa';
import TechStack from '../components/TechStack'; 

// Sample data for Experience
const experienceData = [
  {
    title: "No Data",
    company: "No Data",
    duration: "No Data",
    details: [
      "No Data Found"
    ]
  }
];

// Updated education data
const educationData = [
  {
    institution: "Data not found",
    duration: "No Data"
  },
];

export default function Resume() {
  const [activeSection, setActiveSection] = useState('experience');
  const [resumeInfo, setResumeInfo] = useState<{ downloadAllowed: boolean, fileName: string } | null>(null);
  const [resumeLink, setResumeLink] = useState<string | null>(null);

  // Fetch resume info from general.json
  useEffect(() => {
    const fetchResumeInfo = async () => {
      try {
        const res = await fetch('/assets/data/general.json');
        if (!res.ok) throw new Error('Failed to fetch general.json');
        const data = await res.json();
        const { downloadAllowed, fileName } = data.resume;

        if (downloadAllowed) {
          const validExtensions = ['.pdf', '.docx', '.png', '.jpg'];
          let finalFileName = fileName;

          // Check if filename has a file extension
          if (!validExtensions.some(ext => fileName.toLowerCase().endsWith(ext))) {
            finalFileName += '.pdf'; // Default to .pdf if no extension is specified
          }

          setResumeLink(`/assets/data/${finalFileName}`);
        }

        setResumeInfo({ downloadAllowed, fileName });
      } catch (error) {
        console.error('Error fetching general.json:', error);
      }
    };

    fetchResumeInfo();
  }, []);

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

        {/* Resume Download Section */}
        <div className="mb-8 text-center">
          {resumeInfo?.downloadAllowed && resumeLink ? (
            <a
              href={resumeLink}
              download
              className="inline-flex items-center px-6 py-3 bg-white text-black font-semibold rounded-md shadow hover:bg-gray-300 transition-colors"
            >
              <FaDownload className="mr-2" />
              Download Resume
            </a>
          ) : (
            <p className="text-gray-400">No resume available for download. Please check back soon!</p>
          )}
        </div>

        {/* Navigation Bar */}
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

        {/* Timeline Section */}
        <div className="relative border-l border-gray-600">
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
