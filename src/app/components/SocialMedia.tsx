'use client';

import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';

const socialMediaIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  twitter: FaTwitter,
  facebook: FaFacebook,
  youtube: FaYoutube,
};

export default function SocialMediaBoxes() {
  const [socialMedia, setSocialMedia] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchGeneralInfo = async () => {
      try {
        const res = await fetch('/assets/data/general.json');
        if (!res.ok) throw new Error('Failed to fetch general.json');
        const data = await res.json();
        setSocialMedia(data.socialMedia); // Assuming your social media links are stored in `data.socialMedia`
      } catch (error) {
        console.error('Error fetching general.json:', error);
      }
    };

    fetchGeneralInfo();
  }, []);

  // Filter out empty or false social media links
  const activeSocialMedia = Object.entries(socialMedia).filter(
    ([, url]) => typeof url === 'string' && url.trim().length > 0
  );

  return (
    <div className="flex space-x-6 justify-center">
      {activeSocialMedia.map(([platform, url]) => {
        const IconComponent = socialMediaIcons[platform as keyof typeof socialMediaIcons];
        return (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center space-y-2"
          >
            <IconComponent className="w-10 h-10 text-gray-500 group-hover:text-white" />
            <span className="text-gray-500 group-hover:text-white capitalize">{platform}</span>
          </a>
        );
      })}
    </div>
  );
}
