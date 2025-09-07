import React from "react";
import { motion, MotionProps } from "framer-motion";

// Define types for different HTML elements with motion props
type MotionDivProps = MotionProps & React.HTMLAttributes<HTMLDivElement>;


// إضافه المكوّن MotionDiv
export const MotionDiv: React.FC<MotionDivProps> = (props) => {
  return <motion.div {...props} >{props.children}</motion.div>;
};

type MotionSpanProps = MotionProps & React.HTMLAttributes<HTMLSpanElement>
type MotionH2Props = MotionProps & React.HTMLAttributes<HTMLHeadingElement>
type MotionPProps = MotionProps & React.HTMLAttributes<HTMLParagraphElement>
type MotionAProps = MotionProps & React.AnchorHTMLAttributes<HTMLAnchorElement>

// Export typed motion components
export const MotionImg = motion.img as React.FC<MotionProps & React.ImgHTMLAttributes<HTMLImageElement>>
export const MotionSpan = motion.span as React.FC<MotionSpanProps & React.HTMLAttributes<HTMLSpanElement>>
export const MotionH2 = motion.h2 as React.FC<MotionH2Props>
export const MotionP = motion.p as React.FC<MotionPProps>
export const MotionA = motion.a as React.FC<MotionAProps>





// Usage:

// // Before (with TypeScript error)
// <motion.div 
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     className="your-classes"
// >

// // After (fixed version)
// import { MotionDiv } from '@/components/common/motion'

// <MotionDiv 
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     className="your-classes"
// >