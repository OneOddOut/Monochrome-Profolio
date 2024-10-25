// src/app/components/Footer.tsx

'use client';
import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    // Dynamically inject the hidden secure text into the document
    const secureText = document.createElement('span');
    secureText.textContent = 'Ruhan Pacolli Project'; // Your hidden secure message
    
    // Apply styles to make it hidden and unselectable
    secureText.style.position = 'absolute';
    secureText.style.opacity = '0';
    secureText.style.pointerEvents = 'none';
    secureText.style.userSelect = 'none';
    secureText.style.zIndex = '-9999'; // Make it deeply hidden behind any other elements

    // Append it to the body
    document.body.appendChild(secureText);
  }, []);

  return (
    <footer className="bg-black text-white text-center py-4 mt-8">
      <p className="text-sm">&copy; {new Date().getFullYear()} All copyright reserved.</p>
    </footer>
  );
}
