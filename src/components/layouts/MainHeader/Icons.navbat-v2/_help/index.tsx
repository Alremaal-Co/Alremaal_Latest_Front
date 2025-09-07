"use client"
import React, { useRef } from 'react'
import { MAIN_DROPDOWN_NAVEBAR_V2_TYPE } from '../../_init/types';
import { MAIN_DROPDOWN_NAVEBAR_V2 } from '../../_init';
import DropdownContent from './DropdownContent';
import { NAVBAR_STATE_TYPE } from '../../_init/enum';
import useReduxState from '@/hooks/useReduxState';

export default function HelpPupNavBarV2() {
  const [MainDropdownNavBar, setMainDropdownNavBar] = useReduxState<MAIN_DROPDOWN_NAVEBAR_V2_TYPE>("MAIN_DROPDOWN_NAVEBAR_V2", MAIN_DROPDOWN_NAVEBAR_V2);
  const ref = useRef<any>(null);
  const {state} = MainDropdownNavBar.config

  const onMouseEnter = ()=>{
    if (!ref?.current) return;
    const { width } = ref.current.getBoundingClientRect();
    setMainDropdownNavBar((prev:MAIN_DROPDOWN_NAVEBAR_V2_TYPE)=>({
      ...prev,
      config:{
        ...prev.config,
        state:NAVBAR_STATE_TYPE.HELP,
        hoverState:true,
        position:{
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        }
      }
    }))
  } 

  return (
  <div onClick={onMouseEnter}  className={`md:flex hidden justify-start items-center gap-1 text-bl font-medium text-[14px]  hover:text-or h-full cursor-pointer transition-all ease-in-out duration-700`}>

    <div ref={ref} className='w-10 h-10 rounded-sm flex justify-center items-center text-dis dark:text-white relative'>
      <i className="fa-solid fa-headset text-xl" aria-hidden="true"></i>
    </div>
    <DropdownContent/>

  </div>
  )
}









