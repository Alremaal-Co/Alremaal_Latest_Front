import { t } from '@/i18n/trans'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Message({msg , link}:{link:string ,msg:any}) {
  const {actions} = msg
  return (
    <>
     <div className='h-auto mt-2  w-full rounded-l-lg border-r-2 group-hover:border-r-scss transition-all ease-in-out duration-700'>
      {msg.content && <p className='px-2 pb-1 text-dis py-2 bg-gray-100 group-hover:bg-white group-hover:text-bl text-[11px] transition-all ease-in-out duration-700 '>{msg.content}</p>}
       {msg.type === "pdf" && 
       <div className='w-[calc(100%-16px)] h-full rounded-lg border m-2 flex justify-between items-start gap-2 p-2'>
         <div className='flex justify-center items-center bg-gray-100 group-hover:bg-white w-8 h-8 rounded-full'>
          <i className="fa-solid fa-cloud-arrow-up"></i>
         </div>
         <div dir='ltr' className='flex justify-start gap-2'>
           <Image className='w-10 h-10' src={`/assets/images/svg/pdf.svg`} width={1700} height={1700} alt='pdf' />
           <div>
             <p className='text-dis'>Riyadh apartment.pdf</p>
             <p className='text-gr'>20MB</p>
           </div>
         </div>
       </div>}
      <div className='w-full py-2 px-2 group-hover:bg-white flex justify-between items-center gap-2'>
        {/* <AMInput
          placeholder={"اضافه رد"} 
          icon={"fa-envelope"}
          Placeholder_CN={"!text-[12px] peer-focus:bg-white peer-focus:-top-[3px]"}
          className='!py-0 !w-3/4 !text-[12px] !border-gray-100 !text-dis ' /> */}
        <div className={`bg-scss text-white px-2 group-hover:border-[1px] group-hover:border-gray-200 rounded-lg md:text-xl text-[14px] font-bold md:w-1/4 h-8 flex justify-center items-center gap-2 hover:shadow hover:rounded-[5px] transition-all ease-in-out duration-700`}>
         <i className="fa-regular fa-paper-plane"></i>
          ارسال 
        </div>
      </div>
     </div>
     
     <div className={`h-8 mt-2 ${actions&&actions?.length > 1 ? "md:w-2/3":"md:w-1/3"} flex justify-between items-center gap-2`}>
        {actions?.map((action:string , index:number) => {
          return( 
            <Link href={`${t("lang")}/${link}`} key={index} className='w-full whitespace-nowrap'>
              <div key={index} className={`${index === 0 ? "bg-dis text-white":"bg-gray-100 group-hover:border-[1px] group-hover:border-gray-200"}  rounded-lg text-[14px]  font-bold h-8 flex justify-center w-full items-center gap-2 hover:shadow hover:rounded-[5px] transition-all ease-in-out duration-700`}>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                {action}
              </div>
            </Link>
          )
        })}
     </div>

    </>
  )
}
