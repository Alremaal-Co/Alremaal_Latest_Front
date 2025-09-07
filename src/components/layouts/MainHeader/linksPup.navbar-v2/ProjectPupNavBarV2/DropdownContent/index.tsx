import Link from 'next/link';
import React from 'react';
import { DropdownArrow } from './_DropdownArrow';
import { dropdownVariants, MAIN_DROPDOWN_NAVEBAR_V2 } from '../../../_init';
import { MAIN_DROPDOWN_NAVEBAR_V2_TYPE } from '../../../_init/types';
import { NAVBAR_STATE_TYPE } from '../../../_init/enum';
import { AnimatePresence , motion } from 'framer-motion';
import TagesProjects from './_TagesProjects';
import { UpgradeSection } from './_UpgradeSection';
import TopProjectsNavBarV2 from './_TopProjects.navbar-v2';
import { MainDropdown } from '../../../_MainDropdown';
import useReduxState from '@/hooks/useReduxState';

// Dropdown Content
export default function DropdownContent() {
  const [MainDropdownNavBar, setMainDropdownNavBar] = useReduxState<MAIN_DROPDOWN_NAVEBAR_V2_TYPE>("MAIN_DROPDOWN_NAVEBAR_V2", MAIN_DROPDOWN_NAVEBAR_V2);
  const {config} = MainDropdownNavBar
  const handleMouseEnter = () => {
    try {
      setMainDropdownNavBar((prev: MAIN_DROPDOWN_NAVEBAR_V2_TYPE) => ({
        ...prev,
        config: {
          ...prev.config,
          state: NAVBAR_STATE_TYPE.DEFAULT,
        },
      }));
    } catch (error) {
      console.error("Error updating dropdown state:", error);
    }
  };


  
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
    <MainDropdown stateValue={NAVBAR_STATE_TYPE.PROJECTS_OVERVIEW}>
      {/* {MainDropdownNavBar.config.state === NAVBAR_STATE_TYPE.DEFAULT && <div onMouseEnter={handleMouseEnter} className="w-screen h-full absolute bottom-0"></div>} */}

      <div 
      // onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>onClick(e , false)} 
      className='absolute rounded-b-[20px] -top-0 xl:ltr:left-[17.3vw] xl:rtl:right-[17.3vw] md:ltr:left-[2vw] md:rtl:right-[2vw] 2xl:w-[50vw] xl:w-[68vw] lg:w-[90vw] w-[97vw] h-auto bg-white dark:bg-dark-box shadow-lg'>
        <DropdownArrow />
        <div className='w-full h-full grid grid-cols-4 grid-rows-5 gap-x-2 p-4'>
          <TagesProjects/>
          <TopProjectsNavBarV2/>
          <UpgradeSection/>
        </div>
      </div>
    </MainDropdown>
  );
}



// <div className='w-full h-full grid grid-cols-3 gap-x-4'>
// <DynamicLinksSection/>
// <ServicesSection />
// </div>







































