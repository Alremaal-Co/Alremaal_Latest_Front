import Link from "next/link";
import { useEffect, useRef } from "react";
import { t } from "@/i18n/trans";
import { Languages } from "@/core/enum/general";
import { MAIN_DROPDOWN_NAVEBAR_V2_TYPE } from "../../../../_init/types";
import { NAVBAR_STATE_TYPE } from "../../../../_init/enum";
import { MAIN_DROPDOWN_NAVEBAR_V2 } from "../../../../_init";
import useReduxState from "@/hooks/useReduxState";

export interface LinkData {
  name: string;
  link?:string;
  dis: string;
  subLinks?: {
    title: string;
    href: string;
  }[]
  className?: string;
  classNameLine?: string;
}



export function DynamicLinksSection({viewInDrawer}:{viewInDrawer?:boolean}) {
  const [MainDropdownNavBar, setMainDropdownNavBar] = useReduxState<MAIN_DROPDOWN_NAVEBAR_V2_TYPE>("MAIN_DROPDOWN_NAVEBAR_V2", MAIN_DROPDOWN_NAVEBAR_V2);
  const {config} = MainDropdownNavBar


  const ref = useRef<any>(null);
  const {state} = MainDropdownNavBar.config

  const onClick = (e:any)=>{
    e.preventDefault();
    setMainDropdownNavBar((prev:MAIN_DROPDOWN_NAVEBAR_V2_TYPE)=>({
      ...prev,
      config:{
        ...prev.config,
        state:NAVBAR_STATE_TYPE.DEFAULT,
        hoverState:false,
      }
    }))
  } 

   const GetLang = t(Languages.LANGUAGE) === Languages.ENGLISH 
  
   const styleLine = "before:w-[20px] bg-gray-100 before:border-gray-100 before:h-[5vh] before:ltr:-left-4 before:rtl:-right-4"
  return (
    <div className="col-span-1">
      {(GetLang ? linksDataEn : linksDataAr).map((link, index) => (
        <div
        
          key={`${index}Link`}
          className="text-dis mt-1 p-3 rtl:pl-[0px] ltr:pr-[0px] inner-group rounded-xl hover:bg-gray-100 transition-all ease-in-out duration-1000"
        >
          <Link href={link.link ? link.link : "#"} className="flex items-center gap-2 ">
            <i
              className={`w-4 h-4 border-[1px] border-white rounded-full relative before:absolute ${styleLine} before:border-b-2 before:border-r-2 before:rounded-br-[8px] before:bottom-[calc(100%-9px)] transition-all`}
            ></i>
            <p className="font-bold">{link.name}</p>
          </Link>
          <p className="text-gr text-[9px] px-1 ">{link.dis}</p>
          <div className="flex justify-start items-center gap-1 text-[10px] whitespace-nowrap flex-wrap mt-2 px-1">
            {link?.subLinks?.map((item:any , index:number)=>(
              <Link
        
                key={`${item.href}-sublink-${index}`}
                href={item.href}
                className="text-gray-50 border rounded px-[2px] font-bold hover:text-bl hover:border-bl transition-all ease-in-out duration-700"
              >
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}




const linksDataAr: LinkData[] = [
  {
    name: "المطورين العقاريين",
    link:"/developers",
    dis: "استعراض جميع المطورين في المنصه والتبديل بين الطلبات والإعلانات.", 
    subLinks: [
      { title: "إعلانات للبيع", href: "developers" },
      { title: "إعلانات للإيجار", href: "developers" },
      { title: "فلل", href: "developers" },
      { title: "شقق ", href: "developers" },
      { title: "قصور ", href: "developers" },
      { title: "عقارات تجاريه ", href: "developers" },
      { title: "عرض الكل", href: "developers" },
    ],
    classNameLine:
      "before:w-[20px] bg-gray-100 before:border-gray-100 before:h-[5vh] before:ltr:-left-4 before:rtl:-right-4",
  },
  {
    name: "الوسطاء العقاريين",
    link:"/developers",
    dis: "استعراض جميع الطلبات والعروض العقاريه من خلال الوسطاء لدينا تضم المنصه اكثر من 10 الاف وسيط عقاري سيكون معك للنهايه.",
    subLinks: [
      { title: "طلبات للبيع", href: "developers" },
      { title: "طلبات للإيجار", href: "developers" },
    ],
    classNameLine:
      "before:w-[20px] bg-gray-100 before:border-gray-100 before:h-[16.3vh] before:ltr:-left-5 before:rtl:-right-5",
  },
  {
    name: "الأراضي والمخططات",
    dis: "اكتشف خيارات الأراضي والمخططات المتاحة، مع تفاصيل دقيقة عن المواقع والمساحات، واحجز ما يناسبك بسهولة.",
    subLinks: [
      { title: "للبيع", href: "#" },
      { title: "للإيجار", href: "#" },
      { title: "إضافه إعلان", href: "#" },
    ],
    classNameLine:
      "before:w-[25px] bg-gray-100 before:border-gray-100 before:h-[27.66vh] before:ltr:-left-6 before:rtl:-right-6",
  },
  {
    name: "المشاريع العقارية",
    dis: "تعرف على المشاريع العقارية المتاحة، واستعرض الوحدات السكنية أو التجارية داخلها، مع خيارات تفاعل متنوعة.",
    subLinks: [
      { title: "مشروعات للبيع", href: "#" },
      { title: "مشروعات للإيجار", href: "#" },
      { title: "إضافه مشروع", href: "#" },
    ],
    classNameLine:
      "before:w-[30px] bg-gray-100 before:border-gray-100 before:h-[39vh] before:ltr:-left-7 before:rtl:-right-7",
  },
];



const linksDataEn: LinkData[] = [
  {
    name: "Real Estate Developers",
    link:"/developers",
    dis: "Browse all developers on the platform and switch between requests and ads.", 
    subLinks: [
      { title: "Ads for Sale", href: "developers" },
      { title: "Ads for Rent", href: "developers" },
      { title: "Houses", href: "developers" },
      { title: "Apartments", href: "developers" },
      { title: "Palaces", href: "developers" },
      { title: "Commercial Properties", href: "developers" },
      { title: "View All", href: "developers" },
    ],
    classNameLine:
      "before:w-[20px] bg-gray-100 before:border-gray-100 before:h-[5vh] before:ltr:-left-4 before:rtl:-right-4",
  },
  {
    name: "Real Estate Brokers",
    link:"/developers",
    dis: "Browse all requests and ads from our real estate brokers, with more than 10,000 brokers on our platform.",
    subLinks: [
      { title: "Requests for Sale", href: "developers" },
      { title: "Requests for Rent", href: "developers" },
    ],
    classNameLine:
      "before:w-[20px] bg-gray-100 before:border-gray-100 before:h-[16.3vh] before:ltr:-left-5 before:rtl:-right-5",
  },
  {
    name: "Land and Maps",
    dis: "Discover available land and map options, with detailed information about locations and areas, and book your choice with ease.",
    subLinks: [
      { title: "For Sale", href: "#" },
      { title: "For Rent", href: "#" },
      { title: "Create Ad", href: "#" },
    ],
    classNameLine:
      "before:w-[25px] bg-gray-100 before:border-gray-100 before:h-[27.66vh] before:ltr:-left-6 before:rtl:-right-6",
  },
  {
    name: "Real Estate Projects",
    dis: "Learn about available real estate projects, browse residential or commercial units inside them, and interact with various options.",
    subLinks: [
      { title: "Projects for Sale", href: "#" },
      { title: "Projects for Rent", href: "#" },
      { title: "Create Project", href: "#" },
    ],
    classNameLine:
      "before:w-[30px] bg-gray-100 before:border-gray-100 before:h-[39vh] before:ltr:-left-7 before:rtl:-right-7",
  },
];





// const linksData: LinkData[] = [
//   {
//     name: "العروض العقاريه",
//     dis: "عرض كافه العروض العقاريه من الوسطاء والمطورين لدينا والتفاعل معها",
//     subLinks:[
//       {title:"اعلانات للبيع" , href:"#"},
//       {title:"اعلانات للايجار" , href:"#"},
//       {title:"انشاء اعلان" , href:"#"},
//     ],
//     classNameLine:
//       "before:w-[20px] bg-gray-100 before:border-gray-100 before:h-[5vh] before:ltr:-left-4 before:rtl:-right-4",
//   },
//   {
//     name: "الطلبات العقاريه",
//     dis: "عرض كافه الطلبات العقاريه من الوسطاء والمطورين لدينا والتفاعل معها",
//     subLinks:[
//       {title:"طلبات للبيع" , href:"#"},
//       {title:"طلبات للايجار" , href:"#"},
//       {title:"انشاء طلب" , href:"#"},
//     ],
//     classNameLine:
//       "before:w-[20px] bg-gray-100 before:border-gray-100 before:h-[16.3vh] before:ltr:-left-5 before:rtl:-right-5",
//   },
//   {
//     name: "الاراضي والمخططات",
//     dis: "مشاهده الاراضي والمخططات لدينا والتفاعل معها وحجز الاراضي بسهوله",
//     subLinks:[
//       {title:"للبيع" , href:"#"},
//       {title:"للايجار" , href:"#"},
//       {title:"انشاء اعلان" , href:"#"},
//     ],
//     classNameLine:
//       "before:w-[25px] bg-gray-100 before:border-gray-100 before:h-[27.66vh] before:ltr:-left-6 before:rtl:-right-6",
//   },
//   {
//     name: "المشاريع العقاريه",
//     subLinks:[
//       {title:" مشروعات للبيع" , href:"#"},
//       {title:"مشروعات  للايجار" , href:"#"},
//       {title:"انشاء مشروع" , href:"#"},
//     ],
//     dis: "صفحه عرض المشاريع العقاريه والتفاعل معها ومشاهده الوحدات بها",
//     classNameLine:
//       "before:w-[30px] bg-gray-100 before:border-gray-100 before:h-[39vh] before:ltr:-left-7 before:rtl:-right-7",
//   },
// ];