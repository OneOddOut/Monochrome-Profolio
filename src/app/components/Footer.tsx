// src/app/components/Footer.tsx

'use client';
import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
   
    const secureText = document.createElement('span');
    secureText.textContent = 'https://ruhanpacolli.online Project'; 
    
    
    secureText.style.position = 'absolute';
    secureText.style.opacity = '0';
    secureText.style.pointerEvents = 'none';
    secureText.style.userSelect = 'none';
    secureText.style.zIndex = '-9999'; 

    
    document.body.appendChild(secureText);
  }, []);

  return (
    <footer className="bg-black text-white text-center py-4 mt-8">
      <p className="text-sm">&copy; {new Date().getFullYear()} All copyright reserved.</p>
    </footer>
  );
}
