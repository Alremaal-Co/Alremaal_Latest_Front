"use client"
import { useState, useEffect, MutableRefObject, useCallback } from 'react';

type AutoPlayType = {
  duration?: number;
  play?: boolean;
};

interface UseScrollInMySliderProps {
  sliderRef: MutableRefObject<HTMLElement | null>;
  dir: number;
  autoPlay?: AutoPlayType;
  isActive: number;
  setIsActive: (index: number) => void;
  lengthArray: number;
}

const useScrollInMySlider = ({ sliderRef, dir, autoPlay, isActive, setIsActive, lengthArray }: UseScrollInMySliderProps) => {
  const [scrollDirection, setScrollDirection] = useState<'left' | 'right'>('right');

  const handleNext = useCallback(async () => {
    if (isActive < lengthArray - 1) {
      try {
        const nextIndex = isActive + 1;
        setIsActive(nextIndex);
      } catch (error) {
        console.error('Error in handleNext:', error);
      }
    } else {
      setScrollDirection('left');
    }
  }, [isActive, lengthArray, setIsActive]);

  const handlePrev = useCallback(async () => {
    if (isActive > 0) {
      try {
        const prevIndex = isActive - 1;
        setIsActive(prevIndex);
      } catch (error) {
        console.error('Error in handlePrev:', error);
      }
    } else {
      setScrollDirection('right');
    }
  }, [isActive, setIsActive]);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? dir : -dir;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }, [dir, sliderRef]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
          handleNext();
          scroll('left');
          break;
        case 'ArrowLeft':
          handlePrev();
          scroll('right');
          break;
        case 'ArrowUp':
          handleNext();
          scroll('right');
          break;
        case 'ArrowDown':
          handlePrev();
          scroll('left');
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleNext, handlePrev, scroll]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (autoPlay?.play) {
      interval = setInterval(() => {
        if (scrollDirection === 'right') {
          handleNext();
          scroll('right');
        } else {
          handlePrev();
          scroll('left');
        }
      }, autoPlay.duration);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoPlay, handleNext, handlePrev, scroll, scrollDirection]);

  const next = useCallback(() => {
    handleNext();
    scroll('left');
  }, [handleNext, scroll]);

  const back = useCallback(() => {
    handlePrev();
    scroll('right');
  }, [handlePrev, scroll]);

  return { scroll, next, back };
};

export default useScrollInMySlider;

