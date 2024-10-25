'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import SocialMediaBoxes from './components/SocialMedia';
import LikeHandler from './components/LikeHandler'; // Updated import for LikeHandler

// Define the interface for the JSON structure
interface GeneralInfo {
  Information: {
    firstName: string;
    lastName: string;
    email: string;
    country: string;
  };
  aboutMe: {
    homepageDescription: string;
    otherText: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  socialMedia: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
}

const roles = ["Software Developer", "Web Developer", "Tech Enthusiast"];

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0);
  const [generalInfo, setGeneralInfo] = useState<GeneralInfo | null>(null); // Update useState typing

  // Fetch general information from the JSON file
  useEffect(() => {
    const fetchGeneralInfo = async () => {
      const res = await fetch('/assets/data/general.json');
      const data: GeneralInfo = await res.json(); // Type the fetched data
      setGeneralInfo(data);
    };

    fetchGeneralInfo();
  }, []);

  // Change role every 2 seconds
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 2000);
    return () => clearInterval(roleInterval);
  }, []);

  if (!generalInfo) {
    return <div>Loading...</div>;
  }

  const { firstName, lastName } = generalInfo.Information;
  const { homepageDescription } = generalInfo.aboutMe;

  return (
    <section className="bg-black text-white min-h-screen p-4 md:p-8 flex flex-col justify-center items-center">
      {/* Profile Image */}
      <motion.div
        className="mb-6 rounded-full overflow-hidden w-32 h-32 md:w-40 md:h-40 flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/assets/img/profile-photo.png"
          alt={`${firstName} ${lastName}`}
          width={160}
          height={160}
          className="object-cover"
        />
      </motion.div>

      {/* Introduction */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
          Hi, I&apos;m {firstName} {lastName}
        </h1>
        <motion.p
          className="mt-4 text-base sm:text-lg md:text-2xl text-gray-300"
          key={currentRole}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {roles[currentRole]}
        </motion.p>

        {/* Description - Homepage Paragraph */}
        <p className="mt-4 max-w-md sm:max-w-lg md:max-w-2xl mx-auto text-gray-500 text-sm sm:text-base">
          {homepageDescription}
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
          <a
            href="/projects"
            className="bg-gray-800 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md font-semibold hover:bg-gray-600 text-sm sm:text-base"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="border border-gray-500 text-gray-500 px-4 py-2 sm:px-6 sm:py-3 rounded-md font-semibold hover:border-white hover:text-white text-sm sm:text-base"
          >
            Contact Me
          </a>
        </div>

        {/* Social Media Boxes */}
        <div className="mt-8">
          <SocialMediaBoxes />
        </div>

        {/* LikeHandler Component */}
        <LikeHandler />
      </motion.div>
    </section>
  );
}
