'use client';

import { useState, useEffect } from 'react';
import { handleSubmit } from '../components/handleSubmit'; // Import the standalone handleSubmit function

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await handleSubmit(formData);  // Pass only formData
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

          {/* Contact Information Box */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-center md:text-left">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <p className="text-lg text-gray-400 mb-4">
              If you&apos;d prefer to email me directly, you can reach me at:
            </p>
            <p className="text-lg font-semibold text-white mb-2">
              {process.env.toEmail || 'pacolliruhan844@gmail.com'}
            </p>
            <p className="text-lg text-gray-400 mb-6">
              I typically respond within 24-48 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
