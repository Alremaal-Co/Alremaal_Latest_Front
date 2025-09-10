import { Variants } from "framer-motion";
import { NAVBAR_STATE_TYPE } from "./enum";
import { MAIN_DROPDOWN_NAVEBAR_V2_TYPE } from "./types";

export const MAIN_DROPDOWN_NAVEBAR_V2:MAIN_DROPDOWN_NAVEBAR_V2_TYPE ={
    config:{
      hoverState:false,
      state:NAVBAR_STATE_TYPE.DEFAULT,
      position:{
        left: 0,
        width: 0,
        opacity: 0,
      }
        
    }
}



export const dropdownVariants:Variants = {
    initial: {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      opacity: 0,
      display:"none",
    },

    animate: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      opacity: 1,
      display:"block",
      transition: {duration: 0.8, ease: "easeInOut" , delay:0.5 },
    },

    exit: {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      opacity: 0,
      display:"none",
      transition: { duration: 0.5, ease: "easeInOut" , delay:0.5},
    },
    
  };


  export const dropdownVariantsNoOpacity:Variants = {
    initial: {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      opacity: 0,
    },
    animate: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      opacity: 0.40,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };