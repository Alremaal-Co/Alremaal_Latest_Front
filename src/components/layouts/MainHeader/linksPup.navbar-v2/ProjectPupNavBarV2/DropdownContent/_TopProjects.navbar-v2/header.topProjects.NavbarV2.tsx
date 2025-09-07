import { t } from '@/i18n/trans'
import Link from 'next/link'
import React from 'react'

export default function HeaderTopProjectsNavbarV2() {
  return (
    <div className='col-span-1 row-span-1 rounded-t-lg flex justify-between items-center px-4'>
      <div className='flex items-center justify-start gap-2 text-bold text-lg text-dis dark:text-or border-b-[1px] dark:border-b-or pb-2  '>
        <div className="rounded-full text-xl bg-white w-8 h-8 p-2 flex justify-center items-center">
          <i className="fa-solid fa-crown  "></i>
        </div>       
        <h1 className='font-bold'> {t("New projects")}</h1>
        <i className="fa-solid fa-reply-all -rotate-90 mt-2"></i>

      </div>

      <div className='w-1/2 flex justify-end items-center gap-2'>
        <Link href={"/"} className='flex items-center gap-2 shadow bg-gold hover:bg-gold dark:bg-or dark:hover:bg-dark text-white  font-bold px-2 py-[2px] rounded-lg transition-all duration-1000 ease-in-out'>
          <p className='w-auto' > {t("View")} <small>{t("All")}</small></p>
          <div className='flex justify-start items-center '>
           <i className="fa-solid fa-arrow-up-right-from-square "></i>
          </div>
        </Link>
      </div>
      
    </div>
  )
}
