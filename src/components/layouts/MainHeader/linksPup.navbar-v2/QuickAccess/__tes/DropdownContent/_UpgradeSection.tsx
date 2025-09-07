import { t } from "@/i18n/trans";
import Image from "next/image";
import Link from "next/link";

// Upgrade Section
export function UpgradeSection() {
    return (
    <div className='h-[85px] p-3 bg-dis rounded-b-lg flex justify-between items-start gap-4'>
      <div className='text-[14px] font-bold text-white'>
        <div className="flex justify-between items-center gao-2">
          <div className="flex justify-start items-center gap-2">
            <div className="rounded-full text-xl text-or bg-white w-6 h-6 p-2 flex justify-center items-center">
             <i className="fa-solid fa-fire"></i>
            </div>
            <h1 className="xl:text-[11px] text-[10px]">{t('Upgrade your account to a professional real estate broker')}</h1>
          </div>
          <div className='flex justify-between items-center gap-2 text-[10px]'>
           <Link href="#" className='bg-or text-white hover:bg-opacity-85 hover:text-white px-1 py-[2px] whitespace-nowrap rounded transition-all ease-in-out duration-1000'>{t('Join Now')}</Link>
           <Link href="#" className='border text-white hover:bg-or hover:text-white hover:border-or px-2 py-[2px] whitespace-nowrap rounded transition-all ease-in-out duration-1000'>{t('Learn More')}</Link>
          </div>
        </div>
          <p className='w-full text-[9px]  text-gr'>{t('realEstateBrokerInfo')}.</p>
      </div>

    </div>
    );
}
  
  

