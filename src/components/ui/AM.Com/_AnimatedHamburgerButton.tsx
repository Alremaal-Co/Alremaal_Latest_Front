"use client"
import React, { useEffect, useState } from "react";
import { MotionConfig, motion } from "framer-motion";

// Component Props Interface
interface AnimatedHamburgerButtonProps {
  className?: string;  // Allow custom classNames for parent div
  buttonClassName?: string; // Allow custom classNames for button
  barColor?: string; // Allow changing the bar color
  width?: number; // Allow dynamic sizing (width/height)
  height?: number; // Allow dynamic sizing (
  onClick?: (e?:any) => void;
  isActive?: boolean; //
}

export const AnimatedHamburgerButton: React.FC<AnimatedHamburgerButtonProps> = ({
  className = "bg-bl ",
  // buttonClassName = "text-er",
  width = 20 , // default size
  height = 2,
  onClick,
  isActive
}) => {
  const [active, setActive] = useState(isActive);
  useEffect(()=>{
    setActive(isActive)
  },[isActive])
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={(e:any) => {
           setActive((pv) => !pv)
           onClick?.(e)
          }
          }
        className={`relative ${className}  w-20 h-20 flex justify-center items-center rounded-full bg-whit transition-all ease-in-out duration-700`}
      >
        <motion.span
          variants={VARIANTS.top}
          className={`absolute bg-current`}
          style={{ 
            width:`${width}px`,
            height:`${height}px` ,  
            y: "-50%", 
            left: "50%", 
            x: "-50%", 
            top: "35%" 
          }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className={`absolute bg-current`}
          style={{
            width:`${width}px`,
            height:`${height}px` ,
            left: "50%", 
            x: "-50%", 
            top: "50%", 
            y: "-50%" 
          }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className={`absolute bg-current`}
          style={{
            width:`${width / 2}px`,
            height:`${height}px` ,
            x: "-50%",
            y: "50%",
            bottom: "35%",
            // left: "50%",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      // left: "calc(50% + 10px)",
    },
  },
};
