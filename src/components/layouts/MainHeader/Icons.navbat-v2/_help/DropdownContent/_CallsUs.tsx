import Link from 'next/link'
import React from 'react'

export default function CallsUs() {
  return (
    <div className='bg-gray-100 shadow-lg col-span-3 rounded-lg'>
     <div className=' rounded-t-lg'>
         <h1 className='text-dis border-b-[1px] pb-1 text-xl font-medium mb-2 mx-2'>اتصل بنا</h1>
         <div className='grid grid-cols-2 gap-2 px-2'>
           <BoxPhoneNumber phoneNumber={"+966 38482506"} title={"السعوديه"} code={"SA"} />
           <BoxPhoneNumber phoneNumber={"+02 58485509"} title={"مصر"} code={"EG"} />
           <BoxPhoneNumber phoneNumber={"+965 38482506"} title={"الكويت"} code={"KW"} />
         </div>
     
         <BoxPhoneNumber className='border-t-[1px] w-[calc(100%-16px)] mx-auto' phoneNumber={"+00 00000000"} title={"اي مكان بالعالم"} code={"All"} />
      </div>
     <Link href={"#"} className='px-2 bg-green-400 rounded m-2 text-white py-2  flex items-center justify-center gap-2 text-[14px]'>
        <i className="fab fa-whatsapp mr-2"></i>
        <h1>دردشه علي وتساب</h1>
     </Link>

     <Link href={"#"} className='px-2 bg-[#0088cc] rounded m-2 text-white py-2  flex items-center justify-center gap-2 text-[14px]'>
        <i className="fab fa-telegram mr-2"></i>
        <h1>دردشه علي تلجرام</h1>
     </Link>

  </div>
  )
}


 const BoxPhoneNumber = ({ phoneNumber, title, code , className}: {className?:string ,  phoneNumber: string | number, title: string, code: string }) => {
  return (
   <div className={` hover:shadow p-2 ${className}`}>
   <div className='flex justify-between items-center'>
    <div className='p-1 bg-gray-100 w-7 h-5 flex justify-center items-center rounded'>
     <i className="fa-solid fa-clone"></i>
    </div>
    <h1 dir='ltr' className='font-extrabold text-[14px] text-dis'>{phoneNumber}</h1>
   </div>

    <div className='flex justify-start items-center gap-2 pt-2'>
       <p className='w-7 h-4 rounded text-center bg-white text-dis text-[14px] flex justify-center items-center'>{code}</p>
       <p className='text-[10px] text-dis'>من {title}</p>
    </div>
  </div>
  )
}
