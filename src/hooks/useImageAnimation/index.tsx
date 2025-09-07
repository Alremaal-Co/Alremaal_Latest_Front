"use client"
import { useState, useEffect } from 'react';

const useImageAnimation = (
  images: string[] | string, 
  animationOutClassNames: string[], 
  animationInClassNames: string[]
) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClassName, setAnimationClassName] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let intervalId: number;
    if (isHovered) {
      intervalId = window.setInterval(() => {
        const randomIndex = Math.floor(Math.random() * animationOutClassNames.length);
        setAnimationClassName(animationOutClassNames[randomIndex]);
        window.setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          setAnimationClassName(animationInClassNames[randomIndex]);
        }, 1000);
      }, 4000);
    }
    return () => window.clearInterval(intervalId);
  }, [isHovered, images.length, animationOutClassNames, animationInClassNames]);

  return { currentIndex, animationClassName, isHovered, setIsHovered };
};

export default useImageAnimation;
