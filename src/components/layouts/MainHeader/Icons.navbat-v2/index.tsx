"use client"
import React, { useState } from 'react'
import SwitchMode from './SwitchMode'
import HelpPupNavBarV2 from './_help'
import UserViewPupNavBarV2 from './_userView'
import NotificationsViewPupNavBarV2 from './_notification'
import LangViewPupNavBarV2 from './_Lang'
import { DynamicLinksSection } from '../linksPup.navbar-v2/listsPages/DropdownContent/_DynamicLinksSection'
import LanguageSwitcher from '../LanguageSwitcher'
import Drawer from '@/components/ui/AM.Com/drawer/Drawer'
import Link from 'next/link'
import { t } from '@/i18n/trans'
import { Icon } from '@radix-ui/react-select'



export default function IconsNavbarV2() {
  const [isActiveDrawer , setIsActiveDrawer] = useState<boolean>(false)
  return (
    <div className="w-1/2 border-tes flex justify-end items-center gap-2 h-full z-[101] ">
      {/* <div className='w-auto px-2 h-10 bg-gold group hover:bg-dis transition-all duration-1000 ease-in-out flex justify-center items-center text-white font-bold rounded-lg'>
        <Link href={`${t("lang")}/Real-estate-finance`} className='w-full h-full flex justify-center items-center gap-2'>
        <div className='flex justify-center items-center w-8 h-7 bg-white rounded-full text-gold  group-hover:text-dis  transition-all duration-1000 ease-in-out'>
        <i className="fa-solid fa-sack-dollar"></i>
        </div>
        طلب تمويل عقاري</Link>
      </div> */}

      <FinancingRequest className="bg-or text-white" name={"financingRequest"} icon={"fa-hand-holding-dollar"} />
      <div className='flex justify-center items-center md:w-auto w-10 h-10'>
        <LanguageSwitcher />
      </div>

      <SwitchMode/>
      <LangViewPupNavBarV2/>
      <NotificationsViewPupNavBarV2/>
      <UserViewPupNavBarV2/>
      <HelpPupNavBarV2/>
      <div className='md:hidden block '>
      <Drawer
        config={{
          isActive: isActiveDrawer,
          className:"w-[20rem] min-w-[20rem] min-h-[100vh] h-screen ",
          backgroundColor:"#ffffff",
          drawerButton:{
            state:"mix-active",
            className:"text-dis bg-gray-100 rounded-full"
          },
          }}
          setIsActiveDrawer={(e?: any, Active?: boolean) =>{setIsActiveDrawer(!isActiveDrawer)}}
          >

    <div className={`${isActiveDrawer ? "opacity-0" : "opacity-100"} w-10 h-10 rounded-sm flex justify-center items-center text-dis dark:text-white relative `}>
      {/* <i className="fa-solid fa-headset text-xl" aria-hidden="true"></i> */}
      <i className="fa-solid fa-bars-staggered text-xl"></i>
    </div>
        <div className="text-bl whitespace-normal w-fullh-[calc(100vh-32pz)] mt-[32px] p-4 dark:bg-dark-card ">
          <div className='-mt-6 flex justify-center items-center pb-2'>
            <h1 className='text-[16px] text-dis dark:text-white font-bold border-b-2 border-gray-100'>{t('listingPages')}</h1>
          </div>
          
          <DynamicLinksSection viewInDrawer={true}/>
 
          
        </div>
      </Drawer>
        </div> 


  </div>
  )
}









export function FinancingRequest({className , name , icon}:{icon?:string , className:string , name:string}) {

  return (
    <Link href='/services/add-financing' >
      <div className={`${className ? className : "text-bl "} xl:flex hidden align-center  rounded-[10px]  hover:opacity-80 py-1 cursor-pointer rounded-t-[5px lg:pl-2 lg:pr-2 lg:ml-2`}>
        <h1 className="lg:text-[16px] text-[13px] whitespace-nowrap lg:px-3">
          {t(`${name}`)}
        </h1>
        <Icon className={`${icon} border-white`} />
      </div>
    </Link>
  );
}