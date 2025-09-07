"use client"
import Image from 'next/image'
import {useSpring} from "framer-motion"
import { useEffect, useState } from 'react';
import { PagesSupport } from '.';
import { t } from '@/i18n/trans';
import { SpringCount } from '@/components/ui/AM.Com/___SpringCount';
import { MotionDiv } from '@/components/MotionElements';
import QRCodeGenerator from '@/components/ui/AM.Com/QRCodeGenerator';
export default function UserDetails({userLinks}:any) {
   const [countUser , setCountUser] = useState(0)
   const logoUrl = '/assets/images/logo/logo-dark.svg';
   const qrCodeProps: any = {
     value: "https://alremalrealestate.com",
     size: 70,
     level: 'H',
     bgColor: '#FFFFFF',
     fgColor: '#545a6d',
     imageSettings: {
       src: logoUrl,
       height: 15,
       width: 15,
       excavate: true,
     },
   };

   const springSubCount = useSpring(0 , {
      bounce:0,
      duration: 3000
   })
   springSubCount.on('change',(value: number) => {
      setCountUser(Math.round(value));
   })
   useEffect(()=>{
      springSubCount.set(200)
   },[])
   return (
      <div className='bg-gray-100 shadow md:col-span-3 col-span-5 rounded-lg relative md:h-auto h-full '>
         <small className='w-2 h-2 bg-gold animate-bounce absolute top-5 right-10 rounded-full'></small>
         <div className='absolute top-2 left-2 bg-white text-gold hover:text-or transition-all duration-1000 ease-in-out sm:w-10 w-8 sm:h-10 h-8 rounded-full flex justify-center items-center sm:text-2xl text-xl'>
           <i className="fa-solid fa-share"></i>
         </div>


         <div className='bg-gray-200 w-full h-28 rounded-t-lg rounded-b-[50%]'>
            <div className='bg-light-b px-4 pt-4'>
               <div className='relative h-[15vh] w-[15vh] flex justify-center items-center mx-auto   '>
                  <div style={{ animation: "spin 60s linear infinite" }} className='absolute w-[16vh] h-[16vh]  mx-auto rounded-full animate-spin border-y-[8px] border-y-white  border-x-[8px] border-x-gold shadow-xl '></div>
                  <div className='flex justify-center items-center absolute z-10 -bottom-2 -left-3 bg-white sm:w-10 w-8 sm:h-10 h-8 p-2 rounded-full'>
                     <i className="fa-solid fa-camera text-xl cursor-pointer hover:text-or text-dis "></i>
                  </div>
                  <Image className={`min-h-[15vh] h-[15vh] min-w-[15vh]  absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 w-[15vh] object-cover rounded-full`}
                     src={"/assets/images/webp/_test/avatars/avatar.webp"} width={17000} height={17000} loading={"lazy"} alt='logo user' />
               </div>
               <div className='sm:mt-2 mt-1 w-full flex justify-center items-center flex-col'>
                  <h1 className='font-bold sm:text-xl text-lg'>{t("Fahad Bin Abdul Rahman")}</h1>
                  <div className='flex justify-center items-center flex-wrap sm:w-4/5 w-full text-[10px]'>
                     <p className=''>{t("Senior Developer")}</p>
                     <p className='ms:px-2 px-1'>|</p>
                     <p className=''>{t("Real Estate Consultan")}t</p>
                     <p className='ms:px-2 px-1'>|</p>
                     <p className=''>{t("Company Owner")}</p>
                  </div>
               </div>

            </div>


             <div className='w-full md:h-[20vh] md:flex hidden relative justify-center items-center flex-col'>  
               <div className='flex items-center gap-2 text-center'>
                 <i className="fa-solid fa-arrow-up  text-scss"></i>  
                  <h1 className='md:text-6xl text-4xl font-bold text-scss'>
                   <SpringCount start={10} end={312} duration={2000} bounce={0} />
                  </h1>
               </div>
               <p className='sm:text-sm text-xs'> {t("A team member is now online")}</p>
               <div className='flex justify-center items-center md:w-5/6 w-full flex-wrap gap-1 mt-2 '>
                   <h1 className='text-scss sm:border-2 border sm:px-2 px-1 rounded-md md:w-1/3'>
                     <i className="fa-solid fa-arrow-up  text-scss text-[8px]"></i> 
                     <SpringCount start={0} end={20} duration={2000} bounce={0} />
                      <small className='text-dis mx-[1px]'>{t("new offer")}</small>
                   </h1>
                   <h1 className='text-scss sm:border-2 border sm:px-2 px-1 rounded-md '>
                      <i className="fa-solid fa-arrow-up  text-scss text-[8px]"></i> 
                      <SpringCount start={0} end={12} duration={2000} bounce={0} />
                      <small className='text-dis mx-[1px]'>{t("new project")}</small>
                   </h1>
                   <h1 className='text-scss sm:border-2 border sm:px-2 px-1 rounded-md'>
                      <i className="fa-solid fa-arrow-up  text-scss text-[8px]"></i> 
                      <SpringCount start={0} end={1} duration={2000} bounce={0} />
                      <small className='text-dis mx-[1px]'>{t("new Order")}</small>
                    </h1>
                   <h1 className='text-er sm:border-2 border-[1px] px-2 rounded-md sm:text-[10px] text-[8px] h-6 flex justify-center items-center gap-1'> <small className='text-er w-1 h-1 bg-er rounded-full'></small>لم يتم اضافه اي مشاريع</h1>                   
               </div>
             </div>
         </div>





         <div className='md:h-20 md:block hidden rounded-b-lg bg-gold absolute bottom-0 w-full sm:p-2 p-[2px]'>
            <div className='absolute  left-1 bg-white sm:p-1 rounded-lg sm:bottom-[50%] bottom-full flex justify-center items-center '>
               <MotionDiv 
                 initial={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}}
                 animate={{clipPath: "polygon(0 0, 100% 0, 0 0, 0 100%)"}}
                 transition={{duration:2}}
                 className='absolute bg-white top-0 h-20 w-20 rounded shadow '></MotionDiv>
               <QRCodeGenerator className={"flex justify-center items-center"} qrCodeProps={qrCodeProps} />
            </div>
            <div className='flex justify-start items-center sm:gap-2 gap-1'>
               <div className='flex justify-center items-center bg-white text-gold sm:w-8 sm:h-8 w-6 h-6 rounded-full'>
                 <i className="fa-solid fa-users sm:text-[14px] text-[10px]"></i>
               </div>
               <h1 className='font-bold sm:text-[12px] text-[9px] text-white'>قدم دعوه الي زملائك للانضمام الي الفريق </h1>
            </div>
            <p className='sm:text-[11px] text-[8px] text-white pt-[4px]'>من خلال مشاركه دعوتك والدخول من خلال الرابط الخاص بك سينضم زميلك الي فريقك بكل سهوله</p>
         </div>


                 <div className="w-[90%]  md:hidden px-3 flex justify-between items-start flex-col gap-3 pt-20">
                   {userLinks.map((link:any, index:number) => (
                     <PagesSupport
                       key={index}
                       icon={link.icon}
                       title={link.title}
                       des={link.des}
                       link={link.link}
                       isMobileView={true}
                     />
                   ))}
                 </div>
      </div>
   )
}



