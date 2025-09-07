"use client"
import { useSpring } from 'framer-motion';
import React, { useEffect, useState } from 'react'

export function SpringCount({start, end , duration=3000 , bounce=0}:{bounce?:number , duration?:number , start:number , end:number}) {
   const [countUser , setCountUser] = useState(0)
   const springSubCount = useSpring(start , {
      bounce,
      duration
   })
   springSubCount.on('change',(value: number) => {
      setCountUser(Math.round(value));
   })
   useEffect(()=>{
      springSubCount.set(end)
   },[])
  return (
    <small className='text-center'>
      {countUser}
    </small>
  )
}
