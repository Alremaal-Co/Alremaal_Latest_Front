import Image from "next/image";
import { Services } from "./_Services";
import { UpgradeSection } from "./_UpgradeSection";
import Link from "next/link";
import BoxAdsApp from "./_BoxAdsApp";
import { t } from "@/i18n/trans";
import QRCodeGenerator from "@/components/ui/AM.Com/QRCodeGenerator";





// Services Section
export function ServicesSection() {
  const logoUrl = '/assets/images/logo/logo-dark.svg';
  const qrCodeProps: any = {
    value: "https://alremalrealestate.com",
    size: 110,
    level: 'H',
    bgColor: '#FFFFFF',
    fgColor: '#545a6d',
    imageSettings: {
      src: logoUrl,
      height: 20,
      width: 20,
      excavate: true,
    },
  };
  return (
    <div className='col-span-2 rounded-lg  relative'>
      <div className='h-[calc(100%-80px)] flex justify-between items-start bg-gray-100 dark:bg-dark-card'>
        <Services />
        <div className="text-dis w-1/2 h-56 rounded-br-lg rounded-tl-lg bg-white dark:bg-dark-box absolute rtl:left-0 ltr:right-0 top-0 flex justify-end">
          <div className='w-3 h-3 absolute -bottom-[1px]  -right-[1px] '>
            <svg className='w-full dark:hidden h-full' width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.0007 -0.000875862L7.00275 6.99565L3.00275 6.99565L0.503214 6.9955C0.503214 6.9955 3.51339 5.89756 4.71207 4.38064C5.90008 2.87724 7.0007 -0.000875862 7.0007 -0.000875862Z" fill="#F3F4F6" />
            </svg>

          </div>
          
          <BoxAdsApp/>
          <div className='bg-gray-100 dark:bg-dark-card p-2 rounded-tl-lg w-full h-[calc(100%-70px)] absolute top-[calc(100%)] flex justify-between gap-2'>
            <div className="w-1/2">
               <h2 className="text-[13px] font-bold text-gray-800 dark:text-or mb-2">
                 {t('downloadAppNow')}
               </h2>
               <p className="text-gray-600 dark:text-gray-400 text-[8px]">
                 {t('discoverNewProperties')}
               </p>
            </div>
            <div className="w-[45%] text-dis relative">

              <QRCodeGenerator className={"py-[5px] flex justify-center items-center"} qrCodeProps={qrCodeProps} />
              {/* <div className="flex justify-between items-center gap-[1px] w-[115%] absolute -left-2">
                <Link className="w-1/2 h-6 border flex bg-white  rounded-[5px] items-center justify-center " href={"#"}>
                  <Image className="w-full h-full object-fill" width={600} height={200} src="/assets/images/svg/appStore-invert.svg" alt="لينك appStor" />
                </Link>

                <Link className="w-1/2 h-6 border flex bg-white  rounded-[5px] items-center justify-center " href={"#"}>
                  <Image className="w-full h-full object-fill" width={600} height={200} src="/assets/images/svg/playMarket-invert.svg" alt="playMarket" />
                </Link>
              </div> */}
              <div>

              </div>
            </div>

          </div>

        </div>
      </div>
      <UpgradeSection />

    </div>
  );
}




