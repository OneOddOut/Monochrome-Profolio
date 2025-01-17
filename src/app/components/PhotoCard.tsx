// components/PhotoCard.tsx
"use client";  // Client component for animations

import React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface PhotoCardProps {
  imageUrl: string;
  location: string;
  description: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ imageUrl, location, description }) => {
  return (
    <motion.div
      className="relative w-full h-96 max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg" 
      whileHover={{ scale: 1.02 }} 
      
      <motion.div
        className="relative w-full h-full"
        whileHover={{ scale: 1.1 }} 
        transition={{ duration: 0.5 }}
      >
        <Image
          src={imageUrl}
          alt={description}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </motion.div>

     
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end"
        initial={{ opacity: 0, y: 50 }} 
        whileHover={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center text-white space-x-2">
          <FaMapMarkerAlt className="text-red-500" />
          <span className="font-semibold">{location}</span>
        </div>
        <p className="text-white mt-2">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default PhotoCard;
