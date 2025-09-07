import React from 'react';
import { motion, Variants } from 'framer-motion'; // استورد Variants من framer-motion

export default function Curve({ backgroundColor, isRtl }: { isRtl: boolean, backgroundColor?: string }) {
  // استخدام useMemo لتجنب إعادة حساب هذه القيم في كل عملية إعادة عرض
  const height = typeof window !== 'undefined' ? window.innerHeight : 0; // تأكد من أن window متاح
  const width = 200;

  // تعريف مسارات الـ SVG
  // Path for LTR (Left-to-Right)
  const initialPathLTR = `M 0 0 Q ${width} ${height / 2} 0 ${height} Z`;
  const targetPathLTR = `M 0 0 Q ${-width} ${height / 2} 0 ${height} Z`;

  // Path for RTL (Right-to-Left)
  // لاحظ أنك كنت تستخدم `M100 0 L200 0 ...` والتي تبدأ على بعد 100px.
  // إذا كنت تريد أن تكون على الحافة تمامًا، قد تحتاج لتعديل هذه القيم.
  // مثال على مسار يبدأ من أقصى اليمين (عرض 100px)
  const initialPathRTL = `M100 0 L100 0 L100 ${height} L100 ${height} Q-100 ${height / 2} 100 0`; // مثال لتصحيح المسار
  const targetPathRTL = `M100 0 L100 0 L100 ${height} L100 ${height} Q100 ${height / 2} 100 0`; // مثال لتصحيح المسار


  // قم بتعريف كائن التحولات (Variants) مع نوع `Variants` صراحةً
  // وهذا سيساعد TypeScript على التحقق من البنية
  const curve: Variants = {
    initial: {
      d: isRtl ? initialPathRTL : initialPathLTR
    },
    enter: {
      d: isRtl ? targetPathRTL : targetPathLTR,
      // 🐛 الإصلاح هنا: تحويل مصفوفة الأرقام إلى سلسلة نصية "cubic-bezier(...)"
      // transition: { duration: 1, ease: "cubic-bezier(0.76, 0, 0.24, 1)" }
    },
    exit: {
      d: isRtl ? initialPathRTL : initialPathLTR,
      // 🐛 الإصلاح هنا: تحويل مصفوفة الأرقام إلى سلسلة نصية "cubic-bezier(...)"
      // transition: { duration: 0.8, ease: "cubic-bezier(0.76, 0, 0.24, 1)" }
    }
  };

  return (
    // تأكد من أن عرض الـ SVG (w-[100px]) كافٍ لرؤية منحنياتك، خاصة عندما تكون -width
    // قد تحتاج إلى زيادة العرض إذا كانت المنحنيات تخرج عن الإطار
    <svg className={`absolute top-0 ${isRtl ? 'right-full' : 'left-full'} w-[200px] h-full overflow-visible`}>
      <motion.path
        variants={curve}
        className='dark:fill-dark-card'
        initial="initial"
        animate="enter"
        exit="exit"
        // إذا كنت تستخدم fillProperty لـ Framer Motion، فسيقوم بتعديل خاصية 'fill' لـ SVG.
        // ولكن هنا أنت تمررها كخاصية HTML عادية، وهذا أيضًا مقبول.
        fill={backgroundColor || 'currentColor'} // توفير قيمة افتراضية إذا لم يكن backgroundColor موجودًا
      ></motion.path>
    </svg>
  );
}








// import React from 'react'
// import { motion } from 'framer-motion';

// export default function Curve({backgroundColor ,isRtl }:{isRtl:boolean ,backgroundColor?:string}) {
//   const height = window.innerHeight;
//   const width = 200
//   const initialPathLTR = `M 0 0 Q ${width} ${height / 2} 0 ${height} Z`
//   const targetPathLTR = `M 0 0 Q ${-width} ${height / 2} 0 ${height} Z`

//  const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight/2} 100 0`
//   const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight/2} 100 0`

//   const curve = {
//     initial: {
//         d: isRtl ? initialPath : initialPathLTR
//     },
//     enter: {
//         d: isRtl ? targetPath : targetPathLTR ,
//         transition: {duration: 1, ease: [0.76, 0, 0.24, 1]}
//     },
//     exit: {
//       d: isRtl ? initialPath : initialPathLTR,
//       transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}
//     }
//   }

//   return (
//     <svg className={`absolute top-0 ltr:left-full rtl:right-full w-[100px] h-full `}>
//         <motion.path  
//           variants={curve} className='dark:fill-dark-card' initial="initial" animate="enter" fill={backgroundColor}
//           exit="exit"
//         ></motion.path>
//     </svg>
//   )
// }
