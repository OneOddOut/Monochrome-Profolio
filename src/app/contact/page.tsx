'use client';

import { useState } from 'react';
import { handleSubmit } from '../components/handleSubmit'; // Import the handleSubmit function

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await handleSubmit(formData);  // Use the imported handleSubmit function
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' }); // Reset form fields
    } catch (error) {
      console.error('Submission failed', error);
    }
  };

  return (
    <section className="bg-black text-white min-h-screen p-8 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto">
        
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Me</h1>
          <p className="text-lg text-gray-400">
            Have a question or want to work together? Feel free to reach out to me via the form or through email.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Send a Message</h2>

            {!formSubmitted ? (
              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-gray-600 focus:outline-none"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-gray-600 focus:outline-none"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-gray-600 focus:outline-none"
                    rows={5}
                    placeholder="Write your message..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-300 focus:ring-4 focus:ring-gray-400 transition-all"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <p className="text-green-500 text-center">Thank you for your message! I&apos;ll get back to you shortly.</p>
            )}
          </div>
                    {/* Contact Info */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-center md:text-left">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <p className="text-lg text-gray-400 mb-4">
              If you&apos;d prefer to email me directly, you can reach me at:
            </p>
            <p className="text-lg font-semibold text-white mb-2">
              pacolliruhan844@gmail.com
            </p>
            <p className="text-lg text-gray-400 mb-6">
              I typically respond within 24-48 hours.
            </p>
            <p className="text-lg text-gray-400">
              Feel free to connect with me on social media:
            </p>
            <div className="flex justify-center md:justify-start mt-4 space-x-6">
              <a href="https://github.com/OneOddOut" target="_blank" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.582 0 8a8 8 0 005.47 7.59c.4.074.547-.174.547-.386 0-.19-.007-.693-.01-1.36-2.225.484-2.695-1.073-2.695-1.073-.363-.924-.887-1.17-.887-1.17-.724-.495.055-.485.055-.485.8.057 1.223.822 1.223.822.71 1.217 1.864.866 2.32.662.072-.514.278-.867.506-1.066-1.775-.2-3.64-.888-3.64-3.956 0-.874.312-1.59.823-2.15-.082-.202-.357-1.017.078-2.12 0 0 .67-.215 2.2.82a7.7 7.7 0 012-.268c.678.003 1.36.092 2 .27 1.53-1.037 2.198-.82 2.198-.82.438 1.103.163 1.918.08 2.12.514.56.823 1.276.823 2.15 0 3.076-1.868 3.753-3.647 3.95.287.247.543.736.543 1.484 0 1.072-.01 1.936-.01 2.2 0 .215.144.465.55.386A8.008 8.008 0 0016 8c0-4.418-3.582-8-8-8z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/ruhan-pacolli-b9042632a/" target="_blank" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175A1.177 1.177 0 010 14.854V1.146zm4.943 12.248V6.169H3.134v7.225h1.81zm-.906-8.248a1.05 1.05 0 110-2.101 1.05 1.05 0 010 2.101zm6.274 8.248V9.359c0-.621-.013-1.42-.865-1.42-.866 0-.998.676-.998 1.374v4.08h-1.81V6.169h1.738v.973h.025c.242-.459.834-.94 1.717-.94 1.834 0 2.172 1.208 2.172 2.777v4.413h-1.81z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
