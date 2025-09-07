import { Languages } from "@/core/enum/general";
import { t } from "@/i18n/trans";
import Link from "next/link";

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
   const styleLine = "before:w-[20px]  bg-gray-100 before:border-gray-100 before:h-[5vh] before:ltr:-left-4 before:rtl:-right-4"
      const GetLang = t(Languages.LANGUAGE) === Languages.ENGLISH 
   
  return (
    <div className="col-span-1 ">
      {(GetLang ? linksDataEn : linksDataAr).slice(0, viewInDrawer ? linksDataEn.length : 4).map((link, index) => (
        <div
          key={index}
          className="text-dis dark:text-white cursor-pointer mt-1 p-3 rtl:pl-[0px] ltr:pr-[0px] inner-group rounded-xl hover:bg-gray-100 dark:hover:bg-dark-card transition-all ease-in-out duration-1000"
        >
          <Link href={link.link || "/"} className="flex items-center gap-2">
            <i
              className={`w-4 h-4 border-[1px] border-white rounded-full relative 
                before:absolute ${styleLine} 
                before:border-b-2 
                rtl:before:border-r-2 rtl:before:rounded-br-[8px] 
                ltr:before:border-l-2 ltr:before:rounded-bl-[8px] 
                
                before:bottom-[calc(100%-9px)] 
                rtl:before:left-4 ltr:before:right-4
                transition-all`}
            ></i>
            <p className="font-bold  dark:hover:text-or transition-all ease-in-out duration-700">{link.name}</p>
          </Link>
          <p className="text-gr dark:text-gray-300 text-[9px] px-1 ">{link.dis}</p>
          <div className="flex justify-start items-center gap-1 text-[10px] whitespace-nowrap flex-wrap mt-2 px-1">
            {link?.subLinks?.map((item:any , index:number)=>(
              <Link
                key={`seb-link${index}`}
                href={item.href}
                className="text-gray-50 dark:text-white dark:hover:text-or border dark:border-none rounded px-[2px] font-bold hover:text-bl hover:border-bl  transition-all ease-in-out duration-700"
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
  {
    name: "خدمات عقارية",
    dis: "تعرف على الخدمات العقارية المتاحة لدينا، والتي تشمل التمويل العقاري، والاستشارات العقارية، وتقديم خدمات الشركات، والخ.",
    subLinks: [
      { title: "تمويل عقاري", href: "/real-estate-financing" },
      { title: "اضافه عروض عقاريه", href: "/offers/add-offer" },
      { title: "اضافه طلبات عقاريه", href: "/orders/add-order" },
      { title: "استشارات عقارية", href: "/real-estate-consulting" },
      { title: "ترويج للشركات", href: "/company-promotion" },
      { title: "حاسبة التمويل", href: "/finance-calculator" },
      { title: "خطط الاستثمار", href: "/investment-plans" },
      { title: "تسويق عقاري", href: "/real-estate-marketing" },
      { title: "تقييم العقارات", href: "/property-evaluation" },
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
  {
    name: "Real Estate Services",
    dis: "Learn about available real estate services, including real estate financing, real estate consulting, company promotion, finance calculator, investment plans, and more.",
    subLinks: [
      { title: "Add Financing", href: "/real-estate-financing" },
      { title: "Add Offer", href: "/offers/add-offer" },
      { title: "Add Order", href: "/orders/add-order" },
      { title: "Add Consulting", href: "/real-estate-consulting" },
      { title: "Company Promotion", href: "/company-promotion" },
      { title: "Finance Calculator", href: "/finance-calculator" },
      { title: "Investment Plans", href: "/investment-plans" },
      { title: "Eeal Estate Marketing", href: "/real-estate-marketing" },
      { title: "Property Evaluation", href: "/property-evaluation" },
    ],
    classNameLine:
      "before:w-[30px] bg-gray-100 before:border-gray-100 before:h-[39vh] before:ltr:-left-7 before:rtl:-right-7",
  },
];

