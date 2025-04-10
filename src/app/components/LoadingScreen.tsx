'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [passwordChars, setPasswordChars] = useState<string[]>([]);
  const fullPasswordLength = 8; // Total number of dots we want

  useEffect(() => {
    if (passwordChars.length < fullPasswordLength) {
      const timer = setTimeout(() => {
        setPasswordChars(prev => [...prev, '•']);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [passwordChars]);

  return (
    <div className="fixed inset-0 bg-[#004E98] flex items-center justify-center">
      <div className="relative w-[400px] h-[300px]">
        <Image
          src="/windowsxp_login.png"
          alt="Windows XP Login"
          fill
          style={{ objectFit: 'contain' }}
        />
        
        {/* Text Overlay */}
        <div className="absolute inset-0">
          {/* Username Text - 25% from right, 60% down */}
          <div className="absolute right-[61%] top-[55%]">
            <span className="text-black text-sm">Ani_Arvind</span>
          </div>
          
          {/* Password Text - 25% from right, 68% down */}
          <div className="absolute right-[62%] top-[64%]">
            <span 
              className="text-black text-sm whitespace-pre inline-block text-left"
              style={{ width: '8ch' }} // Ensures consistent width for the password field
            >
              {passwordChars.join('')}
              <span className="animate-blink">|</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}









