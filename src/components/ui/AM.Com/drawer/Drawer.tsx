"use client"
import { AnimatePresence , motion } from 'framer-motion';
import React, { ReactNode, useEffect, useState } from 'react'
import { menuSlide, scale, slide } from './config/anim';
import { t } from '../../../../i18n/trans';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { AnimatedHamburgerButton } from '../_AnimatedHamburgerButton';
import Curve from './Curve';
import { MotionDiv } from '@/components/MotionElements';
import { cn } from '@/lib/utils';

export interface DrawerProps {
    children: ReactNode[];
    setIsActiveDrawer?:(e?:any , Active?: boolean)=>void;
    config:{
      className?: string;
      isActive: boolean;
      backgroundColor?: string;
      curve?:{
        state?:boolean,
        dir?:string,
        className?:"string"
      },
      drawerButton?:{
        className?: string;
        state?:"no-active" | "mix-active" ;
      }
       freeSpace?:{
        children?:{
          type: "ViewGif"|"ViewImage",
          url: string
        }
        className?: string;
       }
    }
}
/**
 * @description Drawer component to show the sidebar
 * @param children - The two children elements, the first element is the button to open the drawer, the second element is the content of the drawer
 * @param config - The config object with the following properties:
 *   - isActive - The active state of the drawer
 *   - className - The class name of the drawer
 *   - backgroundColor - The background color of the drawer
 *   - drawerButton - The config object of the drawer button with the following properties:
 *     - className - The class name of the drawer button
 *     - state - The state of the drawer button, either "no-active" or "mix-active"
 *   - curve - The config object of the curve with the following properties:
 *     - state - The state of the curve, either true or false
 *     - dir - The direction of the curve, either "ltr" or "rtl"
 *     - className - The class name of the curve
 *   - freeSpace - The config object of the free space with the following properties:
 *     - children - The children element of the free space
 *     - className - The class name of the free space
 * @param setIsActiveDrawer - The function to set the active state of the drawer
 * @returns The drawer component
 */
export default function Drawer({children , config , setIsActiveDrawer  }:DrawerProps) {
  const tran = useTranslations()
  const direction = tran('dir') === 'ltr' ? false : true; 

  const {
    isActive:Active ,
    className , 
    backgroundColor="#25293C",
    drawerButton,
    curve,
    freeSpace
  } = config || {}

  const FSchildren = freeSpace?.children !== undefined

  return (
    <div className={`w-full `}>
      <DrawerButton active={Active} setActive={setIsActiveDrawer}>
        {children?.[0]}
      </DrawerButton>

      <div onClick={(e)=> {setIsActiveDrawer?.(e , Active)}}  
           className={`${Active ? "block":"hidden"} ${freeSpace?.className} opacity-50 w-screen h-screen fixed top-0 left-0 z-[102] cursor-pointer transition-all ease-in-out duration-1000`} 
           style={{backgroundColor}}>
            {/* {freeSpace?.children} */}
            {renderChildren(freeSpace?.children)}

      </div>
      <AnimatePresence mode="wait">
        {Active &&
        // <motion.div
        //   variants={menuSlide(direction)}
        //   initial="initial"
        //   animate={Active ? "enter" : "exit"}
        //   exit="exit"
        //   style={{backgroundColor}}
          // className={`${className} fixed top-0 h-screen w-[16rem] ltr:left-0 rtl:right-0 z-[102]  text-white`}
        // >

        <MotionDiv
          variants={menuSlide(direction)}
          initial="initial"
          animate={Active ? "enter" : "exit"}
          exit="exit"
          style={{backgroundColor}}
          className={`${className} dark:!bg-dark-card  fixed top-0 h-screen w-[16rem] ltr:left-0 rtl:right-0 z-[102]  text-white`}
        >
         {/* {!drawerButton?.state || drawerButton?.state === "mix-active"  && */}
          <DrawerButton active={Active} className={`${drawerButton?.className} fixed z-[103] top-4 rtl:left-2 ltr:right-2`} setActive={setIsActiveDrawer}></DrawerButton>
          
           {/* } */}

          <Curve isRtl={direction} backgroundColor={backgroundColor} />
          {/* <motion.div className={""} custom={"div"} variants={slide(isRtl)} initial="initial" animate="enter" exit="exit"> */}
          {/* <motion.div variants={scale} animate={isActive ? "open" : "closed"} className={"bg-or w-10 h-10"}></motion.div> */}
          {/* </motion.div> */}
          {children?.[1]}
        </MotionDiv>
        }
        </AnimatePresence>
    </div>
  )
}






export function DrawerButton({ active, setActive, className, children }: DrawerButtonProps) {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setActive?.(event, !active);
  };

  return (
    <div onClick={handleClick} className={cn(className, "cursor-pointer")}>
      {children ?? (
        <AnimatedHamburgerButton
          className="!w-10 !h-10"
          height={2}
          width={20}
          isActive={active}
        />
      )}
    </div>
  );
}

type DrawerButtonProps = {
  active: boolean;
  setActive?: (event: React.MouseEvent<HTMLDivElement>, value: boolean) => void;
  className?: string;
  children?: ReactNode;
};









const renderChildren = (children: any) => {
  if (!children) return null;
  if (children.type === "ViewImage") {
    return (
      <div 
        className="w-[75vw] h-full grid grid-cols-1 grid-rows-1 gap-2
          bg-no-repeat bg-cover 
          bg-[url(/assets/images/png/_test/bg/bg-01.png)]">
            <div className="col-span-1 p-5">
              <Image
                loading="lazy"
                className="w-full h-full object-contain bg-white rounded-xl "
                src={children.url}
                width={1700}
                height={1700}
                alt="imageUrl"
              />
            </div>
      </div>
    );
  }else if (children.type === "ViewGif"){
    return(
      <div 
      className="w-[75vw] h-full grid grid-cols-1 grid-rows-1 gap-2
        bg-no-repeat bg-cover 
        bg-[url(/assets/images/png/_test/bg/bg-01.png)]">
          <div className="col-span-1 p-5">
            <Image
              loading="lazy"
              className="w-full h-full object-contain "
              src={children.url}
              width={1700}
              height={1700}
              alt="imageUrl"
            />
          </div>
    </div>
    )
  }
  return null;
};

