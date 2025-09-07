import Link from 'next/link'
import React from 'react'

export default function RealEstateRequest({content}:{content:{actions:string[] , tages:string[]}}) {
  const {tages , actions} = content
  return (
    <>
    <div className='flex justify-start items-center flex-wrap gap-x-2 gap-y-1 mt-1'>
      {tages.map((tag:string, index:number)=>{
        return <Tag_RealEstateRequest key={index} title={tag}/>
      })}
    </div>
    <div className='w-full py-2 px-2 group-hover:bg-white flex justify-between items-center gap-2'>
        {/* <AMInput
          placeholder={"اضافه تعليق"} 
          icon={"fa-envelope"}
          Placeholder_CN={"!text-[12px] peer-focus:bg-white peer-focus:-top-[3px]"}
          className='!py-0 !w-full !text-[12px] !border-gray-100 !text-dis ' /> */}
        <div className={`bg-scss flex justify-center items-center w-10 h-8 rounded-md text-white group-hover:bg-or transition-all ease-in-out duration-700`}>
         <i className="fa-regular fa-paper-plane"></i>
          {/* ارسال  */}
        </div>
      </div>
    <div className='flex justify-between items-center gap-2  my-2'>
      <Link href={"#"} className='h-auto w-1/2 flex justify-center items-center bg-gray-100 rounded-lg text-center py-1 group-hover:text-dis group-hover:bg-white transition-all ease-in-out duration-1000 '>
        <i className="fa-solid fa-arrow-up-right-from-square rtl:ml-2 ltr:mr-2"></i>
        <p className=''> عرض التفاصيل</p>
      </Link>

      <Link href={"#"} className='h-auto w-1/2 flex justify-center items-center bg-gold rounded-lg text-center py-1  text-white group-hover:bg-or transition-all ease-in-out duration-1000 '>
        <i className="fa-solid fa-heart rtl:ml-2 ltr:mr-2"></i>
        <p className=''> قبول الطلب </p>
      </Link>
    </div>
    
    </>
  )
}




 function Tag_RealEstateRequest({title}:{title:string}) {
  return (
    <div className='border px-2 py-[2px] rounded-full text-[10px]'>
        <p>{title}</p>
    </div>
  )
}
