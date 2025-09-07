"use client"
import { Languages } from '@/core/enum/general';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];
    
  useEffect(() => {
    localStorage.setItem('preferredLocale', currentLocale);
  }, [currentLocale]);

  return (
    <div className="flex t">
    <Link
      href={pathname.replace(`/${currentLocale}`, `/${currentLocale === Languages.ARABIC ? Languages.ENGLISH : Languages.ARABIC}`)}
      className="w-9 h-9 rounded-full p-2 hover:bg-[#f3f3f9] dark:hover:bg-gray-600 transition-all ease-in-out duration-700 focus:bg-[#f3f3f9] dark:focus:bg-gray-600"
    >
      <Image src={`/assets/images/${currentLocale === Languages.ARABIC ? "us.svg" : "saudiarabia.png"}`} width={1000} height={1000} alt="" 
      className="rounded-md w-36 md:w-10 lg:w-5" />
    </Link>
    </div>
  );
}