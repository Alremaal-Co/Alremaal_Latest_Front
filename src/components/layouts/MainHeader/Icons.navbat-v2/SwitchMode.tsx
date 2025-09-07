"use client"
import { mode } from "@/core/enum/general";
import { motion } from "framer-motion";
import useLocalStorage from "localstorage-hook-v4";
import { useEffect } from "react";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

export enum THEME_ENUM  {
  LIGHT="light",
  DARK ="dark"
}
type Theme = "light" | "dark";
 
export interface THEME_MODE_TYPE {
    mode:Theme
}

export const INIT_THEME_MODE:THEME_MODE_TYPE = {
    mode: THEME_ENUM.LIGHT,
}



export default function SwitchMode() {
      const [darkMode, SetdarkMode] = useLocalStorage("theme", mode.Light);
      
      const [fontSizeLocal] = useLocalStorage<any>("fontSize", "");
      const [TOPBARCOLOR, setTOPBARCOLOR] = useLocalStorage("TOPBAR_COLOR","");
      useEffect(() => { 
        if(fontSizeLocal)  document.body.style.fontSize = `${fontSizeLocal}px`;
      }, [fontSizeLocal]);
  
      useEffect(() => {
          darkMode == mode.Dark ? document.documentElement.classList.add(mode.Dark) : document.documentElement.classList.remove(mode.Dark) 
      }, [darkMode])





    const handelerMode = ()=>{
      SetdarkMode(darkMode === mode.Light? mode.Dark : mode.Light)
    }

    const isLightMode = darkMode === mode.Light
  return (

    <div onClick={handelerMode} className={`relative  flex md:w-[56px] w-6  h-6 md:mx-0 mx-4 cursor-pointer items-center rounded-full shadow  ${isLightMode ? "md:bg-gray-100":"md:bg-bl h-7 dark:md:bg-white"} transition-all ease-in-out duration-1000`}>     

    <div className="md:block hidden ">
      {isLightMode && <p className={`text-bl  rtl:left-[18px] ltr:right-[18px] scale-50 text-[9px] w-2 h-2 rounded-full bg-dis absolute top-[2px] transition-all ease-in-out duration-[1000ms]`}></p>}
      {isLightMode && <p className={`text-bl  rtl:left-[15px] ltr:right-[15px] bottom-[6px] scale-50 text-[10px] w-2 h-2 rounded-full bg-dis absolute transition-all ease-in-out duration-[1000ms]`}></p>}
      {isLightMode && <p className={`text-bl  rtl:left-[3px] ltr:right-[3px] scale-50 text-[12px] w-2 h-2 rounded-full bg-dis absolute top-[5px] transition-all ease-in-out duration-[1000ms]`}></p>}
    
      {!isLightMode && <i className={`fa-solid dark:text-bl text-white rtl:right-[18px] ltr:left-[18px] scale-50 text-[9px] fa-star absolute  top-[2px] animate-pulse transition-all ease-in-out duration-[1000ms]`}></i>}
      {!isLightMode && <i className={`fa-solid dark:text-bl text-bl rtl:right-[28px] ltr:left-[28px] top-[6px] scale-50 text-[10px] fa-star absolute animate-pulse transition-all ease-in-out duration-[1000ms]`}></i>}
      {!isLightMode && <i className={`fa-solid dark:text-bl text-white rtl:right-[3px] ltr:left-[3px] scale-50 text-[12px] fa-star absolute top-[5px] animate-pulse transition-all ease-in-out duration-[1000ms]`}></i>} 
    
    </div>


      <div
        className={`absolute inset-0 z-0 flex  ${
          !isLightMode ? "md:justify-end justify-center" : "md:justify-start justify-center"
        }`}
      >
        <motion.span
          layout

          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className={`h-full  text-[20px] rounded-full flex justify-center items-center 
            ${isLightMode 
              ? "bg-white text-bl border-[1px]  border-gray-100"
              :"md:bg-white bg-transparent  md:w-1/2 md:mx-[0.5px] min-w-6 h-6 md:border-[1px] border-bl md:text-bl text-white"} `}
        >
           <i className={`fas  ${isLightMode ? "fa-sun":"fa-moon"} dark:md:text-bl transition-all ease-in-out duration-1000`}></i>
        </motion.span>
      </div>

    </div>
  )
}
