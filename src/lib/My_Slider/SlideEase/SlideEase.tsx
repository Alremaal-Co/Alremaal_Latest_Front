"use client"
import React, { MouseEvent, ReactNode, TouchEvent, useEffect, useRef, useState } from 'react'
import { useDrag } from './hook/useDrag';

interface SlideEaseProps {
  className?: any, 
  Scroll:(direction: 'left' | 'right' ) => void, 
  dot?: number, 
  dir?: number, 
  children?: ReactNode,
  arrow?: boolean, 
  title?: any, 
  sliderRef:React.MutableRefObject<HTMLDivElement | null>
}

/**
 * @function SlideEase
 * @description A slider component with a custom scrollbar and next/previous buttons.
 * @param {React.MutableRefObject<HTMLDivElement | null>} sliderRef The ref of the container element.
 * @param {ReactNode} children The content of the slider.
 * @param {(direction: 'left' | 'right' ) => void} Scroll A function to scroll the slider.
 * @param {number} [dot] The number of dots to display.
 * @param {number} [dir] The direction of the dots.
 * @param {boolean} [arrow] Whether to display the next/previous buttons.
 * @param {any} [title] The title of the slider.
 * @param {any} [className] The className of the slider container.
 * @returns {JSX.Element} The slider component.
 */
export default function SlideEase({ sliderRef , children, Scroll , dot, dir, arrow, title, className }: SlideEaseProps) {
  const { handleDragStart, handleDragEnd, handleDragMove } = useDrag(sliderRef);

  return (
    <div className='relative'>
      {arrow && <div className='flex justify-between items-center gap-4 after:bg-gr after:w-full after:h-[0.1vh] after:absolute relative after:bottom-1 py-4 after:z-[500] after:right-1
                        before:w-[1vh] before:z-[500] before:h-[1vh] before:absolute before:ltr:left-1/2 before:rtl:right-1/2 before:rounded-full before:bg-gr before:bottom-0'>
                {title && <div className='flex justify-start items-center gap-2'>
        <h1 className='text-2xl text-bl font-bold p-2 whitespace-nowrap border-b-[1px] border-b-bl'>
          {title}
        </h1>
        <i className='fa-solid fa-reply-all text-3xl text-bl -rotate-90 mt-5'></i>
        </div>}
          <div className='flex justify-end items-center w-[49%] font-bold'>
            <div
              onClick={(e) => {
                e.stopPropagation();
                Scroll('right')
              }}
              className='flex justify-end items-center gap-2 w-1/4 text-[14px] text-bl hover:text-[#B5B5B5] cursor-pointer'>
              <i className="fa-solid fa-arrow-right ltr:rotate-180"></i>
              <p className='text-[10px]'>لسابق</p>
            </div>

            <div onClick={(e) => {
              e.stopPropagation();
              Scroll('left')
            }}
              className='flex justify-end items-center gap-2 w-1/4 text-[14px] text-bl hover:text-[#B5B5B5] cursor-pointer'>
              <p className='text-[10px]'>التالي</p>
              <i className="fa-solid fa-arrow-left ltr:rotate-180"></i>
            </div>
          </div>
        </div>}

      <div className='flex justify-between items-center gap-3 group absolut bottom-0 left-0 w-full z-50 '>
        <div className='relative w-full h-full p-1 flex items-center animate-translate-to- '>
          <div
            ref={sliderRef}
            className={`w-[100%] h-full flex mx-auto items-center overflow-x-hidden `}
            onMouseDown={handleDragStart}
            onMouseLeave={handleDragEnd}
            onMouseUp={handleDragEnd}
            onMouseMove={handleDragMove}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
            onTouchMove={handleDragMove}
          >
            {children && children}
          </div>
        </div>
      </div>
    </div>
  )
}
