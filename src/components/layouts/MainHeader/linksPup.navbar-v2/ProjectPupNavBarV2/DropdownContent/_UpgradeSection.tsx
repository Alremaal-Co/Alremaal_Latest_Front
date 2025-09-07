import Image from "next/image";
import Link from "next/link";
import { t } from "@/i18n/trans";

// Upgrade Section
export function UpgradeSection() {
    return (
    <div className='col-span-3 row-span-1 p-3  rounded-b-lg flex justify-between items-start gap-4 bg-gold dark:bg-dark-card'>
     
      <div className='text-[14px] font-bold text-white'>
        <div className="flex justify-between items-center gao-2">
          <div className="flex justify-start items-center gap-2 pb-1">
            <div className="rounded-full text-xl text-gold dark:text-or bg-white w-8 h-8 p-2 flex justify-center items-center">
             <i className="fa-solid fa-crown  "></i>
            </div>
            <h1>{t("Upgrade your account to a premium real estate developer")}</h1>
          </div>
          <div className='flex justify-between items-center gap-2 text-[14px]'>
           <Link href="#" className='bg-gold dark:bg-or hover:bg-dis dark:hover:bg-dark-box dark:hover:text-or border-2 dark:border-[0px] dark:py-[3px] border-white hover:border-dis text-white hover:bg-opacity-85 hover:text-white px-2 py-[2px] whitespace-nowrap rounded transition-all ease-in-out duration-1000'>{t("Join Now")}</Link>
           <Link href="#" className='border-[1px] text-dis bg-white hover:bg-dis hover:text-white hover:border-dis px-2 py-[2px] whitespace-nowrap rounded transition-all ease-in-out duration-1000'>{t("Learn More")}</Link>
          </div>
        </div>
          <p className='w-full text-[10px] mt-[1px] text-white'>
            {t("A real estate developer is what is known as a provider of distinctive real estate services from announcements")}
          </p>
      </div>

    </div>
    );
  }


  
