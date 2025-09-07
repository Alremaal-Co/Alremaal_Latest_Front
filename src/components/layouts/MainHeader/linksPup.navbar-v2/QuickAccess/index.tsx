"use client"
import React, { useRef } from 'react'
import { MAIN_DROPDOWN_NAVEBAR_V2_TYPE } from '../../_init/types';
import { NAVBAR_STATE_TYPE } from '../../_init/enum';
import { MAIN_DROPDOWN_NAVEBAR_V2 } from '../../_init';
import { AnimatePresence , motion } from 'framer-motion';
import { t } from '@/i18n/trans';
import DropdownContent from './__tes/DropdownContent';
import useReduxState from '@/hooks/useReduxState';

export default function QuickAccessNavBarV2() {
  const [MainDropdownNavBar, setMainDropdownNavBar] = useReduxState<MAIN_DROPDOWN_NAVEBAR_V2_TYPE>("MAIN_DROPDOWN_NAVEBAR_V2", MAIN_DROPDOWN_NAVEBAR_V2);
  const {config} = MainDropdownNavBar


  const ref = useRef<any>(null);
  const {state} = MainDropdownNavBar.config

  const onMouseEnter = ()=>{
    if (!ref?.current) return;
    const { width } = ref.current.getBoundingClientRect();
    setMainDropdownNavBar((prev:MAIN_DROPDOWN_NAVEBAR_V2_TYPE)=>({
      ...prev,
      config:{
        ...prev.config,
        state:NAVBAR_STATE_TYPE.QUICK_ACCESS,
        hoverState:true,
      }
    }))
  } 

  const isQuickAccess = state === NAVBAR_STATE_TYPE.QUICK_ACCESS


  return (
  <div onClick={onMouseEnter} className={`${isQuickAccess ? "" : ""} flex justify-start items-center gap-1 text-dis font-medium text-[14px]  hover:text-bl h-full cursor-pointer transition-all ease-in-out duration-700`}>
     <div ref={ref} className={`${isQuickAccess ? "border-b-2 border-b-or":"border-b-2 border-b-white"} mt-2 pb-2 flex justify-center items-center gap-2 transition-all ease-in-out duration-1000`}>
     <div className={`flex justify-between items-center dark:text-white`}>
     <i className="fa-solid fa-angle-down text-[10px]"></i>
    </div>
    <h1 className='whitespace-nowrap dark:text-white'>{t('Quick access')}</h1>
     </div>
    <DropdownContent/>
  </div>
  )
}









