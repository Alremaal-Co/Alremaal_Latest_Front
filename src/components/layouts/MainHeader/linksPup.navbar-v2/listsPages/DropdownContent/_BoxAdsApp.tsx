"use client"
import useImageAnimation from '@/hooks/useImageAnimation';
import { t } from '@/i18n/trans';
import { formatImageUrl } from '@/lib/format-Image-url';
import React, { useState, useEffect } from 'react';

const animationOutClasses = [
  'image-animation-out-slide',
  'image-animation-out-zoom',
  'image-animation-out-rotate',
  'image-animation-out-fade',
  'image-animation-out-scale',
  'image-animation-out-flip',
  'image-animation-out-slide-left',
  'image-animation-out-slide-right',
  'image-animation-out-bounce'
];

const animationInClasses = [
  'image-animation-in-slide',
  'image-animation-in-zoom',
  'image-animation-in-rotate',
  'image-animation-in-fade',
  'image-animation-in-scale',
  'image-animation-in-flip',
  'image-animation-in-slide-left',
  'image-animation-in-slide-right',
  'image-animation-in-bounce'
];

const images = [
    "/files/1757423416224-628533166.jpg",
    "/files/1757424361056-128636716.png",
    "/files/1757424405249-964609232.png",
    // "/assets/images/gif/_test/ads-app-3.png"
];

export default function BoxAdsApp() {

    const {animationClassName , currentIndex , isHovered , setIsHovered} = useImageAnimation(images, animationOutClasses, animationInClasses);
    useEffect(()=>{
        setIsHovered(true)
    },[])
  const fullImageUrl = formatImageUrl(images[currentIndex]);

    return (
        <div       
        //    onMouseEnter={() => setHovered(true)}
        //    onMouseLeave={() => setHovered(!false)}
         className={`w-[calc(100%-8px)] relative h-[calc(100%-8px)] bg-cover rounded-lg ${isHovered ? animationClassName : ''} transition-all ease-in-out duration-700`} 
         style={{ backgroundImage: `url(${fullImageUrl})` }}>
            <div className='bg-dark bg-opacity-30 absolute w-full h-full rounded-lg'></div>
            <div style={{
                borderTopLeftRadius: "50% 20%",
                borderTopRightRadius: "50% 20%"
            }} className="w-full h-[5vh] absolute bottom-0 rounded-b-lg  bg-or hover:bg-opacity-90 bg-opacity-80 transition-all duration-1000 ease-in-out">
                <div className="w-full h-full flex justify-center items-center">
                    <h1 className=" p-2 w-1/2 text-white font-black border-b-[1px]">{t("Download the app")}</h1>
                </div>
            </div>
        </div>
    );
}
