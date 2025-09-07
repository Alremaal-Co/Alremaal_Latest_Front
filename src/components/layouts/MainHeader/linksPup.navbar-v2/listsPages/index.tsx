"use client"
import React, { useRef } from 'react'
import DropdownContent from './DropdownContent';
import { MAIN_DROPDOWN_NAVEBAR_V2_TYPE } from '../../_init/types';
import { NAVBAR_STATE_TYPE } from '../../_init/enum';
import { MAIN_DROPDOWN_NAVEBAR_V2 } from '../../_init';
import { AnimatePresence , motion } from 'framer-motion';
import { t } from '@/i18n/trans';
import useReduxState from '@/hooks/useReduxState';

export default function ListsPagesNavBarV2() {
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
        state:NAVBAR_STATE_TYPE.LISTING_PAGES,
        hoverState:true,
      }
    }))
  } 

  const isListPages = state === NAVBAR_STATE_TYPE.LISTING_PAGES 
  const isQuickAccess = state === NAVBAR_STATE_TYPE.QUICK_ACCESS


  return (
  <div className={`${isListPages ? "" : ""} flex justify-start items-center gap-1 text-dis font-medium text-[14px]  hover:text-bl h-full cursor-pointer transition-all ease-in-out duration-700`}>
     <div onClick={onMouseEnter} ref={ref} className={`${isListPages ? "border-b-2 border-b-or":"border-b-2 border-b-white"} mt-2 pb-2 flex justify-center items-center gap-2 transition-all ease-in-out duration-1000`}>
      <div  className={`flex justify-between items-center `}>
        <i className="fa-solid fa-grip-vertical text-or dark:text-or "></i>
        <i className="fa-solid fa-grip-vertical text-bl dark:text-white relative rtl:left-[3px]"></i>
      </div>
      <h1 className='whitespace-nowrap dark:text-white'>{t('listingPages')}</h1>
     </div>
    {/* <DropdownContent/> */}
  </div>
  )
}









