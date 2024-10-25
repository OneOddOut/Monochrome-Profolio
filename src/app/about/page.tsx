'use client';

import ProfilePicture from '../components/ProfilePicture';  // Import the ProfilePicture component
import SocialMediaBoxes from '../components/SocialMedia';   // Adjust path as necessary
import PhotoCard from '../components/PhotoCard';  // Import the PhotoCard component
import { useEffect, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';  // Import location icon


interface GeneralInfo {
  Information: {
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    city: string;
  };
  aboutMe: {
    paragraphs: string[];
    homepageDescription: string;
  };
  languagesSpeak: {
    flag: string;
    language: string;
  }[];
}

export default function AboutPage() {
  const [generalInfo, setGeneralInfo] = useState<GeneralInfo | null>(null);

  useEffect(() => {
    const fetchGeneralInfo = async () => {
      try {
        const res = await fetch('/assets/data/general.json');
        if (!res.ok) throw new Error('Failed to fetch general.json');
        const data: GeneralInfo = await res.json();
        setGeneralInfo(data); // Set the aboutMe and other info from the fetched JSON
      } catch (error) {
        console.error('Error fetching general.json:', error);
      }
    };

    fetchGeneralInfo();
  }, []);

  if (!generalInfo) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  const { firstName, lastName, country, city } = generalInfo.Information;

  // Array of photos with image, location, and description
  const photos = [
    {
      imageUrl: '/assets/img/italy-milano.jpeg',
      location: 'McArthurGlen Designer Outlet, Milan - Italy',
      description: 'A luxury shopping experience at the McArthurGlen Designer Outlet in Milan, featuring brands like Dolce & Gabbana, Moncler, and Prada.',
    },
    {
      imageUrl: '/assets/img/skopje.jpeg',
      location: 'Vardar River, Skopje - North Macedonia',
      description: 'A stunning night view of the Archaeological Museum of North Macedonia along the Vardar River in Skopje.',
    },
    {
      imageUrl: '/assets/img/brussels.jpeg',
      location: 'National Basilica of the Sacred Heart, Brussels - Belgium',
      description: 'The National Basilica of the Sacred Heart (Basilique Nationale du Sacré-Cœur), one of the largest churches in the world, located in Brussels.',
    }
  ];

  return (
    <section className="bg-black text-white min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        {/* Flexbox for Profile Image and Bio */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-x-8">
          
          {/* Profile Picture Component */}
          <div className="relative">
            <ProfilePicture />
            
            {/* Location Section - Positioned Above Languages */}
            <div className="mt-4 text-center">
              <div className="flex items-center justify-center text-white text-sm space-x-2">
                <FaMapMarkerAlt className="text-red-500" /> {/* Location Icon */}
                <span>{city}, {country}</span> {/* City and Country */}
              </div>

              {/* Languages I Know - Dynamically Rendered */}
              <div className="mt-4 flex justify-center space-x-4">
                {generalInfo.languagesSpeak.map((language, index) => (
                  <span key={index} className="flex items-center text-white bg-gray-700 px-3 py-1 rounded-full text-sm">
                    {language.flag} {language.language}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-white mb-4">About {firstName} {lastName}</h1>
            <p className="text-lg text-gray-400 mb-6">
              {generalInfo.aboutMe.paragraphs[0]}
            </p>
            <p className="text-lg text-gray-400">
              {generalInfo.aboutMe.paragraphs[1]}
            </p>
          </div>
        </div>

        {/* Add PhotoCard Component Below the Bio */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">A Glimpse of My Life</h2>
          
          {/* Grid Layout for Multiple PhotoCards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo, index) => (
              <PhotoCard
                key={index}
                imageUrl={photo.imageUrl}
                location={photo.location}
                description={photo.description}
              />
            ))}
          </div>
        </div>
        
        {/* Social Media Links */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-white text-center mb-6">Connect with Me</h2>
          <div className="flex justify-center">
            <SocialMediaBoxes />
          </div>
        </div>
      </div>
    </section>
  );
}
