"use client"
import React, { useState } from 'react';

export default function NotFoundIndex() {
  const [isHoverButton, setIsHoverButton] = useState(false);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center dark:!bg-dark !font-Cairo text-white`}>
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">The page you are looking for does not exist.</p>
      <button
        onMouseEnter={() => setIsHoverButton(true)}
        onMouseLeave={() => setIsHoverButton(false)}
        className={`px-6 py-3 rounded-lg text-lg transition-all duration-300
          ${isHoverButton ? 'bg-blue-600' : 'bg-blue-500'}
          hover:scale-105`}
      >
        Go to Home Page
      </button>
    </div>
  );
};