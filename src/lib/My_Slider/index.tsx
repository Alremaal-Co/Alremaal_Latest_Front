"use client"
import React, { MouseEvent, ReactNode, TouchEvent, useEffect, useRef, useState } from 'react'
import { useDrag } from './useDrag';
import { t } from '@/i18n/trans';




interface My_SliderProps {
  className?: any, 
  Scroll?:(direction: 'left' | 'right' ) => void, 
  dot?: number, 
  dir?: number, 
  children?: ReactNode,
  arrow?: boolean, 
  title?: any, 
  // setIsActive?: any, 
  // IsActive?: any ,
  sliderRef:React.MutableRefObject<HTMLDivElement | null>
}




export default function My_Slider({ sliderRef , children, Scroll , dot, dir, arrow, title, className }: My_SliderProps) {
  const { handleDragStart, handleDragEnd, handleDragMove } = useDrag(sliderRef);
  const [isActiveDot, setisActiveDot] = useState<number>(5)



  return (
    <div className='relative h-full w-full'>
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
              // handlePrev();
              Scroll?.('right')
            }}
            className='flex justify-end items-center gap-2 w-1/4 text-[14px] text-bl hover:text-[#B5B5B5] cursor-pointer'>
            <i className="fa-solid fa-arrow-right ltr:rotate-180"></i>
            <p className='text-[10px]'>{t(`general.previous`)}</p>
          </div>

          <div onClick={(e) => {
            e.stopPropagation();
            // handleNext();
            Scroll?.('left')
          }}
            className='flex justify-end items-center gap-2 w-1/4 text-[14px] text-bl hover:text-[#B5B5B5] cursor-pointer'>
            <p className='text-[10px]'>{t(`general.next`)}</p>
            <i className="fa-solid fa-arrow-left ltr:rotate-180"></i>
          </div>
        </div>
      </div>}

      <div className='flex justify-between items-center gap-3 group absolut bottom-0 left-0 w-full h-full z-50 '>
        <div className='relative w-full h-full p-1 flex items-center animate-translate-to- '>
          <div
            ref={sliderRef}
            className={`${className ? className : "w-full h-full flex mx-auto items-center"} overflow-x-hidden `}
            onMouseDown={handleDragStart}
            onMouseLeave={handleDragEnd}
            onMouseUp={handleDragEnd}
            onMouseMove={handleDragMove}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
            onTouchMove={handleDragMove}
          >
            {children? children : <div className={"w-[20px] h-[20px] bg-or"}>برجاء ادخال محتوي </div>}


          </div>
        </div>






      </div>
    </div>
  )
}
