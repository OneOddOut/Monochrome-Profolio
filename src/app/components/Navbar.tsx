'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to track menu open/close
  const pathname = usePathname(); // Get the current route

  // Helper function to check if the route is active
  const isActive = (route: string) => pathname === route;

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo or Brand */}
        <div className="text-2xl font-bold">My Portfolio</div>

        {/* Hamburger Menu Icon for Mobile Screens */}
        <button 
          className="block md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Full Navigation Links for Desktop */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <Link href="/" className={`text-lg font-semibold ${isActive('/') ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/resume" className={`text-lg font-semibold ${isActive('/resume') ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}>
              Resume
            </Link>
          </li>
          <li>
            <Link href="/about" className={`text-lg font-semibold ${isActive('/about') ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}>
              About Me
            </Link>
          </li>
          <li>
            <Link href="/projects" className={`text-lg font-semibold ${isActive('/projects') ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`text-lg font-semibold ${isActive('/contact') ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Navigation Menu (dropdown) */}
        {isOpen && (
          <ul className="md:hidden absolute top-16 left-0 right-0 bg-black p-4 space-y-4">
            <li>
              <Link href="/" className={`block text-lg font-semibold ${isActive('/') ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/resume" className={`block text-lg font-semibold ${isActive('/resume') ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}>
                Resume
              </Link>
            </li>
            <li>
              <Link href="/about" className={`block text-lg font-semibold ${isActive('/about') ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}>
                About Me
              </Link>
            </li>
            <li>
              <Link href="/projects" className={`block text-lg font-semibold ${isActive('/projects') ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className={`block text-lg font-semibold ${isActive('/contact') ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}>
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
