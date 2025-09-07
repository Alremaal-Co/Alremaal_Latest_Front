"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import React from 'react'

export function PageTransitionWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const variants = {
    hidden: { opacity: 0, y: 15 }, 
    enter: { opacity: 1, y: 0 },   
    exit: { opacity: 0, y: -15 }, 
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname} 
        variants={variants}
        initial="hidden" 
        animate="enter"  
        exit="exit"     
        transition={{ duration: 0.4, ease: "easeInOut" }} 
        className="flex-grow"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}