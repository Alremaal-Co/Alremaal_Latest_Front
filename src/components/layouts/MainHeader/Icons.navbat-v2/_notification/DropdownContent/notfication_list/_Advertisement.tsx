"use client"
import My_Slider from '@/lib/My_Slider';
import { useScrollInMySlider } from '@/lib/My_Slider/SlideEase';
import Image from 'next/image';
import Link from 'next/link';
import React, {useRef, useState } from 'react'
import { Dispatch } from 'redux';

export default function Advertisement({content}:{content:any}) {
    const [cards, setCards] = useState<cardDataType[]>(cardData);
    const [autoPlay, setAutoPlay] = useState<boolean>(!false);


    const sliderRef = useRef<HTMLDivElement | null>(null);
  
    const [isActive, setIsActive] = useState(0);
    const { scroll:Scroll, scroll , next , back} = useScrollInMySlider({ sliderRef, dir: 80, autoPlay: { duration: 2000 , play:autoPlay}, isActive, setIsActive, lengthArray: cardData.length });
  
  return (
    <>
    <div className='h-auto border my-2 rounded-lg w-[100%] lg:max-w-[43vw] overflow-x-hidden'>
      <My_Slider className={"w-full h-full flex justify-start gap-4 items-center p-4"} sliderRef={sliderRef} Scroll={scroll}>
        {cardData.map((item:cardDataType, index:number) => { 

          return  (
            <div key={index} className='h-20 w-20 min-h-20 min-w-20'>
              <Image className='w-full h-full object-cover rounded-lg' src={item.url} width={1700} height={1700} alt='img' />
            </div>
          )
        })}
      </My_Slider>
    </div>
    <div className='flex justify-between items-center gap-2  my-2'>
      <Link href={"#"} className='h-auto w-1/2 flex justify-center items-center bg-gray-100 rounded-lg text-center py-1 group-hover:text-dis group-hover:bg-white transition-all ease-in-out duration-1000 '>
        <i className="fa-solid fa-arrow-up-right-from-square rtl:ml-2 ltr:mr-2"></i>
        <p className=''> عرض التفاصيل</p>
      </Link>

      <Link href={"#"} className='h-auto w-1/2 flex justify-center items-center bg-gold rounded-lg text-center py-1  text-white group-hover:bg-or transition-all ease-in-out duration-1000 '>
        <i className="fa-solid fa-heart rtl:ml-2 ltr:mr-2"></i>
        <p className=''> اضافه الي المفضله </p>
      </Link>
    </div>
    </>
  )
}


// {/* <div className='h-44 w-full border flex justify-start items-center flex-wrap my-4'>
// {cardData.map((img, i) =>{
//   return(
//     <div key={i} className='w-10 h-full'>
//       {/* {i} */}
//       <Image className='w-full h-full object-cover' src={img.url} width={1700} height={1700} alt='img' />
//     </div>
//   )
// })}
// </div> */}




export type cardDataType = {
  id: number;
  url: string;
};
export const cardData: cardDataType[] = [
  {
    id: 1,
    url: "/assets/images/jpg/_test/real-state/1.jpeg",
  },
  {
    id: 2,
    url: "/assets/images/jpg/_test/real-state/2.jpeg",
  },
  {
    id: 3,
    url: "/assets/images/jpg/_test/real-state/3.jpeg",
  },
  {
    id: 4,
    url: "/assets/images/jpg/_test/real-state/4.jpeg",
  },
  {
    id: 5,
    url: "/assets/images/jpg/_test/real-state/6.webp",
  },
  {
    id: 6,
    url: "/assets/images/jpg/_test/real-state/9.jpeg",
  },
  {
    id: 7,
    url: "/assets/images/jpg/_test/real-state/6.webp",
  },
  {
    id: 8,
    url: "/assets/images/jpg/_test/real-state/7.webp",
  },

  {
    id: 1,
    url: "/assets/images/jpg/_test/real-state/1.jpeg",
  },
  {
    id: 2,
    url: "/assets/images/jpg/_test/real-state/2.jpeg",
  },
  {
    id: 3,
    url: "/assets/images/jpg/_test/real-state/3.jpeg",
  },
  {
    id: 4,
    url: "/assets/images/jpg/_test/real-state/4.jpeg",
  },
  {
    id: 5,
    url: "/assets/images/jpg/_test/real-state/6.webp",
  },
  {
    id: 6,
    url: "/assets/images/jpg/_test/real-state/9.jpeg",
  },
  {
    id: 7,
    url: "/assets/images/jpg/_test/real-state/6.webp",
  },
  {
    id: 8,
    url: "/assets/images/jpg/_test/real-state/7.webp",
  },
];
