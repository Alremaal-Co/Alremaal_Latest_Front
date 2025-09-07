import Image from 'next/image'
import React from 'react'

export default function Avatar({image , bg , state}:{image?:string , bg:string , state:boolean}) {
  return (image&&
    <div className={`${bg} md:w-10 md:h-10 w-8 h-8 min-h-8 min-w-8 relative rounded-lg flex justify-center items-center`}>
      <small className={`w-2 h-2 ${state ? "bg-scss":"bg-gray-700"} rounded-full absolute rtl:left-0 ltr:right-0 bottom-0`}></small>
      <Image className='w-6 h-6 rounded-full' src={image} width={1700} height={1700} alt={"AVATAR"} />
    </div>
  )
}
