'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiTailwindcss, SiPostgresql, SiTypescript } from 'react-icons/si'; // Import relevant icons from react-icons
import Image from 'next/image';

// Sample project data with icons for each technology
const projectsData = [
  {
    title: 'Portfolio Website',
    description: 'This portfolio showcases my projects and expertise as a developer. The design emphasizes simplicity with a black and white theme, giving it a minimalist, professional feel.',
    languages: [
      { name: 'React.js', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Postgres', icon: SiPostgresql },
      { name: 'TypeScript', icon: SiTypescript },
    ],
    github: 'https://github.com/Ruhanpaco/Monochrome-Profolio',
    liveDemo: 'https://ruhanpacolli.online',
    image: '/assets/img/portfolio-project.png',
  }
];

export default function ProjectsPage() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Navigate to the previous project
  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  // Navigate to the next project
  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Current project data
  const currentProject = projectsData[currentProjectIndex];

  return (
    <section className="bg-black text-white min-h-screen p-8 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h1>

        {/* Project Image */}
        <motion.div
          className="w-full h-64 mb-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={currentProject.image}
            alt={currentProject.title}
            width={600}
            height={300}
            className="object-cover rounded-lg shadow-lg transition-transform hover:scale-105"
          />
        </motion.div>

        {/* Project Info */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">{currentProject.title}</h2>
          <p className="text-gray-400 mb-6">{currentProject.description}</p>

          {/* Coding languages with icons */}
          <div className="flex justify-center space-x-4 mb-6">
            {currentProject.languages.map((language, index) => (
              <motion.span
                key={index}
                className="flex items-center px-4 py-2 bg-gray-800 rounded-md text-sm md:text-base text-gray-300 space-x-2"
                whileHover={{ scale: 1.1 }}
              >
                <language.icon size={20} />  {/* Render the icon */}
                <span>{language.name}</span>
              </motion.span>
            ))}
          </div>

          {/* Links to GitHub and Live Demo */}
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href={currentProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white flex items-center space-x-2 transition-colors"
            >
              <FaGithub /> <span>GitHub</span>
            </a>
            <a
              href={currentProject.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white flex items-center space-x-2 transition-colors"
            >
              <FaExternalLinkAlt /> <span>Live Demo</span>
            </a>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={prevProject}
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Previous Project
          </button>
          
          <button
            onClick={nextProject}
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Next Project
          </button>
        </div>
      </div>
    </section>
  );
}
