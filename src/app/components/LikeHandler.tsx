'use client';

import { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';  // Import the heart icon from react-icons
import { motion } from 'framer-motion';    // Import Framer Motion for animations

export default function LikeHandler() {
  const [likeCount, setLikeCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [liked, setLiked] = useState(false);  // Track whether the heart has been liked

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const response = await fetch('/api/GET/likes');  // Fetch from GET API
        if (!response.ok) {
          throw new Error(`Failed to fetch likes. Status: ${response.status}`);
        }
        const data = await response.json();
        setLikeCount(data.likeCount);
      } catch (error) {
        console.error('Error loading like count:', error);
        setError('Unable to load like count');
      } finally {
        setLoading(false);
      }
    };

    const isLiked = localStorage.getItem('liked') === 'true';
    setLiked(isLiked);

    fetchLikes();
  }, []);

  const handleLike = async () => {
    if (liked) return;

    try {
      setLiked(true);
      localStorage.setItem('liked', 'true');

      const response = await fetch('/api/POST/like', { method: 'POST' });
      if (!response.ok) {
        throw new Error(`Failed to send like. Status: ${response.status}`);
      }

      const data = await response.json();
      setLikeCount(data.likeCount);
    } catch (error) {
      console.error('Error updating likes:', error);
      setError('Unable to update likes');
    }
  };

  if (loading) {
    return <p>Loading likes...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="fixed bottom-4 right-4">  {/* Positioning the badge in the corner */}
      <motion.button
        whileTap={{ scale: 1.2 }}
        disabled={liked}  // Disable the button if already liked
        className={`flex items-center justify-center space-x-2 p-3 border rounded-full border-white bg-black focus:outline-none transition-colors duration-500 ${
          liked ? 'text-red-500' : 'text-white'
        }`}  // No opacity change when disabled, just the color change
        onClick={handleLike}
      >
        <FaHeart
          size={24}
          className={`transition-colors duration-500 ${
            liked ? 'fill-current text-red-500' : 'text-white'
          }`}
        />
        <span className="ml-2 text-lg text-white">{likeCount}</span>
      </motion.button>
    </div>
  );
}