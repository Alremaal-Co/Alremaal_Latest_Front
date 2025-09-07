"use client"
import React, { useRef } from 'react'
import { MAIN_DROPDOWN_NAVEBAR_V2_TYPE } from '../../_init/types';
import { MAIN_DROPDOWN_NAVEBAR_V2 } from '../../_init';
import { NAVBAR_STATE_TYPE } from '../../_init/enum';
import DropdownContent from './DropdownContent';
import useReduxState from '@/hooks/useReduxState';

export default function NotificationsViewPupNavBarV2() {
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
        state:prev.config.state === NAVBAR_STATE_TYPE.NOTIFICATIONS ? NAVBAR_STATE_TYPE.DEFAULT : NAVBAR_STATE_TYPE.NOTIFICATIONS,
        hoverState:true,
        position:{
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        }
      }
    }))
  } 



  const IsNotification = state === NAVBAR_STATE_TYPE.NOTIFICATIONS

  return (
  <div className={`flex justify-start items-center gap-1 text-dis font-medium text-[14px]  hover:text-bl h-full cursor-pointer transition-all ease-in-out duration-700`}>
    <div onClick={onMouseEnter} ref={ref} className={`w-10 h-10 rounded-sm  flex justify-center items-center text-bl dark:text-white relative`}>
       <i className="fa-solid fa-bell sm:text-2xl text-xl"></i>
      <small className='absolute w-2 h-2 right-1 top-1 bg-scss rounded-full'></small>
    </div>
    <DropdownContent/>

  </div>
  )
}

