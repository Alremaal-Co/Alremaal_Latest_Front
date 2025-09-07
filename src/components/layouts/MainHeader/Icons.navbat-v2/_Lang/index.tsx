"use client"
import React, { useRef } from 'react'
import { MAIN_DROPDOWN_NAVEBAR_V2_TYPE } from '../../_init/types';
import { MAIN_DROPDOWN_NAVEBAR_V2 } from '../../_init';
import { NAVBAR_STATE_TYPE } from '../../_init/enum';
import DropdownContent from './DropdownContent';
import useReduxState from '@/hooks/useReduxState';

export default function LangViewPupNavBarV2() {
  const ref = useRef<any>(null);
  const [MainDropdownNavBar, setMainDropdownNavBar] = useReduxState<MAIN_DROPDOWN_NAVEBAR_V2_TYPE>("MAIN_DROPDOWN_NAVEBAR_V2", MAIN_DROPDOWN_NAVEBAR_V2);
  const {state} = MainDropdownNavBar.config

  const onMouseEnter = ()=>{
    if (!ref?.current) return;
    const { width } = ref.current.getBoundingClientRect();
    setMainDropdownNavBar((prev:MAIN_DROPDOWN_NAVEBAR_V2_TYPE)=>({
      ...prev,
      config:{
        ...prev.config,
        state:NAVBAR_STATE_TYPE.LANG,
        hoverState:true,
        position:{
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        }
      }
    }))
  } 



  const IsLang = state === NAVBAR_STATE_TYPE.LANG

  return (
  <div onClick={onMouseEnter}  className={`hidden   justify-start items-center gap-1  text-bl font-medium text-[14px]  hover:text-dis h-full cursor-pointer transition-all ease-in-out duration-700`}>
    {/* <div ref={ref} className='w-10 h-10 flex justify-center items-center relative'>
     <i className="fa-solid fa-earth-americas text-2xl"></i>
     <div className='absolute text-[11px] text-white top-1 right-1 bg-dis w-4 h-4 rounded-full flex justify-center items-center'>
       <i className="fa-solid fa-flag "></i>
      </div> 
    </div> */}



      <div  ref={ref} className={`w-10 h-10  rounded-sm md:flex justify-center items-center text-bl relative cursor-pointer `}>
        <div className='w-full h-[25.5px] rounded-[5px] grid grid-cols-2 bg-gray-100 shadow border'>
          <div className='rounded-r-[5px] bg-white flex justify-center items-center text-[8px] font-extrabold'>عربي</div>
          <div className='rounded-l-[5px] bg-bl  flex justify-center text-white text-[10px] font-extrabold'>SA</div>
        </div>
      </div>

    <DropdownContent/>

  </div>
  )
}

