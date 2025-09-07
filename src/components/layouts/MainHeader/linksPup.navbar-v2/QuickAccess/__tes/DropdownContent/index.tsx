import Link from 'next/link';
import React from 'react';
import { Services } from './_Services';
import { DropdownArrow } from './_DropdownArrow';
import { NAVBAR_STATE_TYPE } from '../../../../_init/enum';
import { MAIN_DROPDOWN_NAVEBAR_V2_TYPE } from '../../../../_init/types';
import { MainDropdown } from '../../../../_MainDropdown';
import { DynamicLinksSection } from '../../../listsPages/DropdownContent/_DynamicLinksSection';
import { ServicesSection } from '../../../listsPages/DropdownContent/_ServicesSection';
import { MAIN_DROPDOWN_NAVEBAR_V2 } from '../../../../_init';
import useReduxState from '@/hooks/useReduxState';

// Dropdown Content
export default function DropdownContent() {
  const [MainDropdownNavBar, setMainDropdownNavBar] = useReduxState<MAIN_DROPDOWN_NAVEBAR_V2_TYPE>("MAIN_DROPDOWN_NAVEBAR_V2", MAIN_DROPDOWN_NAVEBAR_V2);
  const {config} = MainDropdownNavBar
  const onClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>, state:boolean)=>{
    try {
      e.stopPropagation()
      setMainDropdownNavBar((prev: MAIN_DROPDOWN_NAVEBAR_V2_TYPE) => ({
        ...prev,
        config: {
          ...prev.config,
          hoverState: state,
          state: NAVBAR_STATE_TYPE.DEFAULT
          
        },
      }));
    } catch (error) {
      console.error("Error updating dropdown state:", error);
    }
  } 



  return (
    <MainDropdown stateValue={NAVBAR_STATE_TYPE.QUICK_ACCESS}>
      <div onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>onClick(e , false)} 
          className='absolute rounded-b-[20px] -top-0 lg:ltr:left-[17.3vw] lg:rtl:right-[17.3vw] md:ltr:left-[5vw] md:rtl:right-[5vw] md:w-[90vw] lg:w-[70vw] xl:w-[55vw] 2xl:w-[40vw] h-auto bg-white dark:bg-dark-box shadow-lg'>
      <DropdownArrow />

        <div className='w-full h-full p-4'>

          <div  className='w-full h-full grid grid-cols-3 gap-x-4'>
            <DynamicLinksSection/>
            <ServicesSection />
          </div>
        </div>
      </div>
    </MainDropdown>
  );
}























