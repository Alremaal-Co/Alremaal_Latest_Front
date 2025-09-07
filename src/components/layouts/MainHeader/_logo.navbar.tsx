import Loading from '@/app/[locale]/loading';
import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense } from 'react'

export default function LogoNavbar({className}:{className?:string}) {
  return (
    <Link href={"/"} prefetch={true} className={`h-[4rem] xl:min-w-[10rem] min-w-[4rem] flex justify-center items-center`}>        
          {/* <div className='xl:h-full xl:w-full w-[3.8rem] h-[3.8rem]
            bg-no-repeat xl:bg-contain bg-cover bg-[url(/assets/images/logo/logo-dark.svg)] dark:bg-[url(/assets/images/logo/logo-light.svg)] xl:bg-[url(/assets/images/logo/logo-big-dark.png)] dark:xl:bg-[url(/assets/images/logo/logo-big-light.png)]'
          ></div> */}
    </Link>
  )
}
