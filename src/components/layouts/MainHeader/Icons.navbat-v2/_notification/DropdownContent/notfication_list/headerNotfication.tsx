import React from 'react'

export default function HeaderNotfication({title , time}:{title:string , time:string}) {
  return (
  <div className='w-full flex justify-between items-center'>
    <h1 className='text-[14px] font-bold text-dis'>{title}</h1>
    <div className='flex gap-4 items-center mx-2'>
     <p className='text-gr text-[11px]'>{time}</p>
    </div>
  </div>
  )
}
