import { MouseEvent, TouchEvent } from "react";

export const useDrag = (sliderRef: React.RefObject<HTMLDivElement>|React.MutableRefObject<HTMLDivElement | null>) => {
    const handleDragStart = (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (!sliderRef.current) return;
      const startX = 'pageX' in e ? e.pageX : e.touches[0].pageX;
      sliderRef.current.dataset.isDragging = 'true';
      sliderRef.current.dataset.startX = startX.toString();
      sliderRef.current.dataset.scrollLeft = sliderRef.current.scrollLeft.toString();
    };
  
    const handleDragEnd = () => {
      if (sliderRef.current) {
        sliderRef.current.dataset.isDragging = 'false';
      }
    };
  
    const handleDragMove = (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
      if (!sliderRef.current || sliderRef.current.dataset.isDragging !== 'true') return;
  
      e.preventDefault();
      const x = 'pageX' in e ? e.pageX : e.touches[0].pageX;
      const startX = parseFloat(sliderRef.current.dataset.startX || '0');
      const scrollLeft = parseFloat(sliderRef.current.dataset.scrollLeft || '0');
      const walk = (x - startX) * 2; // Increase scroll speed
      sliderRef.current.scrollLeft = scrollLeft - walk;
    };
  
    return { handleDragStart, handleDragEnd, handleDragMove };
  };
  
  