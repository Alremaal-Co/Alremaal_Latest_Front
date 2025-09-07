 import Link from 'next/link'
import React from 'react'
 
 export default function Financing({content}:{content:any}) {
   return (
    <>
    <div className='w-full border rounded-lg h-[7vh] my-2 p-2 flex hover:bg-white justify-between items-center'>
       <Link href={"#"} className='w-full h-full flex justify-start  items-center gap-2 cursor-pointer'>
         <div className='flex justify-center items-center bg-gray-100 w-[5vh] h-[5vh] text-3xl rounded-md text-gold'>
           <i className="fa-solid fa-sack-dollar"></i>
         </div>
         <div className=''>
            <h1 className='text-dis font-bold text-[14px] hover:text-bl cursor-pointer'>شقه للبيع بالرياض بحي ابو عريش</h1>
            <p className='text-[11px]'>20,000,000 <small>ر.س</small></p>
         </div>
       </Link>
       <div className='w-8 h-8 bg-gray-100 flex justify-center items-center rounded-full'>
         <i className="fa-solid fa-clock-rotate-left"></i>
       </div>
     </div>

    <div className='flex justify-between items-center gap-2  my-2'>
   
   
     <Link href={"#"} className='h-auto w-1/2 flex justify-center items-center bg-gold rounded-lg text-center py-1  text-white group-hover:bg-or transition-all ease-in-out duration-1000 '>
       <i className="fa-solid fa-arrow-up-right-from-square rtl:ml-2 ltr:mr-2"></i>
       <p className=''> معلومات عن البنك </p>
      </Link>
   
      <Link href={"#"} className='h-auto w-1/2 flex justify-center items-center bg-gray-100 rounded-lg text-center py-1 group-hover:text-dis group-hover:bg-white transition-all ease-in-out duration-1000 '>
        <i className="fa-solid fa-arrow-up-right-from-square rtl:ml-2 ltr:mr-2"></i>
        <p className=''> كل البنوك </p>
      </Link>

    </div>
    
    </>

   )
 }
 