import Link from "next/link";
import { Languages } from "@/core/enum/general";
import { t } from "@/i18n/trans";

type Category = {
    name: string; // اسم التصنيف
    icon: string; // اسم الأيقونة (FontAwesome)
    count: number; 
    link: string;
    subCategories: { name: string; link: string; icon: string }[]; // الفئات الفرعية
  };
  
  export const categoriesAr: Category[] = [
    {
      name: "كل المشاريع",
      count: 210,
      icon: "fa-tasks", 
      link:"/projects",
      subCategories: [
        { name: "جميع الانواع", link: "/projects/residential/apartments", icon: "fa-building" },
      ],
    },

    {
      name: "مشاريع سكنية",
      count: 210,
      icon: "fa-home", 
      link:"/projects/residential",
      subCategories: [
        { name: "شقق", link: "/projects/residential/apartments", icon: "fa-building" },
        { name: "فيلات", link: "/projects/residential/villas", icon: "fa-villa" },
        { name: "منازل", link: "/projects/residential/houses", icon: "fa-house-user" },
      ],
    },

    {
      name: "مشاريع تجارية",
      count: 17,
      icon: "fa-briefcase",
      link:"/projects/commercial",
      subCategories: [
        { name: "مكاتب", link: "/projects/commercial/offices", icon: "fa-chair" },
        { name: "مراكز تجارية", link: "/projects/commercial/malls", icon: "fa-store" },
        { name: "أبراج أعمال", link: "/projects/commercial/towers", icon: "fa-building" },
      ],
    },
    {
      name: "مشاريع استثمارية",
      count: 150,
      icon: "fa-chart-line",
      link:"/projects/investment",
      subCategories: [
        { name: "وحدات للإيجار", link: "/projects/investment/rental-units", icon: "fa-handshake" },
        { name: "شقق فندقية", link: "/projects/investment/hotel-apartments", icon: "fa-bed" },
      ],
    },
    {
      name: "مشاريع سياحية",
      count: 350,
      icon: "fa-umbrella-beach",
      link:"/projects/tourism",
      subCategories: [
        { name: "منتجعات", link: "/projects/tourism/resorts", icon: "fa-water" },
        { name: "شاليهات", link: "/projects/tourism/chalets", icon: "fa-hotel" },
        { name: "فنادق", link: "/projects/tourism/hotels", icon: "fa-bed" },
      ],
    },
    {
      name: "مشاريع صناعية",
      count: 500,
      icon: "fa-industry",
      link:"/projects/industrial",
      subCategories: [
        { name: "مصانع", link: "/projects/industrial/factories", icon: "fa-cogs" },
        { name: "مستودعات", link: "/projects/industrial/warehouses", icon: "fa-boxes" },
        { name: "أراضٍ صناعية", link: "/projects/industrial/lands", icon: "fa-map" },
      ],
    },
    {
      name: "مشاريع زراعية",
      count: 702,
      icon: "fa-leaf",
      link:"/projects/agricultural",
      subCategories: [
        { name: "أراضٍ زراعية", link: "/projects/agricultural/lands", icon: "fa-seedling" },
        { name: "مزارع", link: "/projects/agricultural/farms", icon: "fa-tractor" },
      ],
    },
    {
      name: "مشاريع صديقة للبيئة",
      count: 1,
      icon: "fa-seedling",
      link:"/projects/environment",
      subCategories: [
        { name: "مشاريع خضراء", link: "/projects/environment/green", icon: "fa-tree" },
        { name: "الطاقة الشمسية", link: "/projects/environment/solar", icon: "fa-sun" },
      ],
    },
    {
      name: "مشاريع فاخرة",
      count: 332,
      icon: "fa-crown",
      link:"/projects/luxury",
      subCategories: [
        { name: "شقق فاخرة", link: "/projects/luxury/apartments", icon: "fa-gem" },
        { name: "فيلات فاخرة", link: "/projects/luxury/villas", icon: "fa-diamond" },
      ],
    },
    {
      name: "مشاريع تعليمية",
      count: 3,
      icon: "fa-school",
      link:"/projects/educational",
      subCategories: [
        { name: "مدارس", link: "/projects/educational/schools", icon: "fa-chalkboard-teacher" },
        { name: "جامعات", link: "/projects/educational/universities", icon: "fa-graduation-cap" },
      ],
    },
    // {
    //   name: "مشاريع طبية",
    //   icon: "fa-hospital",
    //   link:"/projects/medical",
    //   subCategories: [
    //     { name: "مستشفيات", link: "/projects/medical/hospitals", icon: "fa-ambulance" },
    //     { name: "مراكز طبية", link: "/projects/medical/centers", icon: "fa-stethoscope" },
    //   ],
    // },
  ];

  export const categoriesEn: Category[] = [
    {
      name: "All Projects",
      count: 210,
      icon: "fa-tasks", 
      link:"/projects",
      subCategories: [
        { name: "All Types", link: "/projects/residential/apartments", icon: "fa-building" },
      ],
    },

    {
      name: "Residential Projects",
      count: 210,
      icon: "fa-home", 
      link:"/projects/residential",
      subCategories: [
        { name: "Apartments", link: "/projects/residential/apartments", icon: "fa-building" },
        { name: "Villas", link: "/projects/residential/villas", icon: "fa-villa" },
        { name: "Houses", link: "/projects/residential/houses", icon: "fa-house-user" },
      ],
    },

    {
      name: "Commercial Projects",
      count: 17,
      icon: "fa-briefcase",
      link:"/projects/commercial",
      subCategories: [
        { name: "Offices", link: "/projects/commercial/offices", icon: "fa-chair" },
        { name: "Shopping Centers", link: "/projects/commercial/malls", icon: "fa-store" },
        { name: "Business Towers", link: "/projects/commercial/towers", icon: "fa-building" },
      ],
    },
    {
      name: "Investment Projects",
      count: 150,
      icon: "fa-chart-line",
      link:"/projects/investment",
      subCategories: [
        { name: "Rental Units", link: "/projects/investment/rental-units", icon: "fa-handshake" },
        { name: "Hotel Apartments", link: "/projects/investment/hotel-apartments", icon: "fa-bed" },
      ],
    },
    {
      name: "Tourism Projects",
      count: 350,
      icon: "fa-umbrella-beach",
      link:"/projects/tourism",
      subCategories: [
        { name: "Resorts", link: "/projects/tourism/resorts", icon: "fa-water" },
        { name: "Chalets", link: "/projects/tourism/chalets", icon: "fa-hotel" },
        { name: "Hotels", link: "/projects/tourism/hotels", icon: "fa-bed" },
      ],
    },
    {
      name: "Industrial Projects",
      count: 500,
      icon: "fa-industry",
      link:"/projects/industrial",
      subCategories: [
        { name: "Factories", link: "/projects/industrial/factories", icon: "fa-cogs" },
        { name: "Warehouses", link: "/projects/industrial/warehouses", icon: "fa-boxes" },
        { name: "Industrial Lands", link: "/projects/industrial/lands", icon: "fa-map" },
      ],
    },
    {
      name: "Agricultural Projects",
      count: 702,
      icon: "fa-leaf",
      link:"/projects/agricultural",
      subCategories: [
        { name: "Agricultural Lands", link: "/projects/agricultural/lands", icon: "fa-seedling" },
        { name: "Farms", link: "/projects/agricultural/farms", icon: "fa-tractor" },
      ],
    },
    {
      name: "Eco Projects",
      count: 1,
      icon: "fa-seedling",
      link:"/projects/environment",
      subCategories: [
        { name: "Green Projects", link: "/projects/environment/green", icon: "fa-tree" },
        { name: "Solar Energy", link: "/projects/environment/solar", icon: "fa-sun" },
      ],
    },
    {
      name: "Luxury Projects",
      count: 332,
      icon: "fa-crown",
      link:"/projects/luxury",
      subCategories: [
        { name: "Luxury Apartments", link: "/projects/luxury/apartments", icon: "fa-gem" },
        { name: "Luxury Villas", link: "/projects/luxury/villas", icon: "fa-diamond" },
      ],
    },
    {
      name: "Educational Projects",
      count: 3,
      icon: "fa-school",
      link:"/projects/educational",
      subCategories: [
        { name: "Schools", link: "/projects/educational/schools", icon: "fa-chalkboard-teacher" },
        { name: "Universities", link: "/projects/educational/universities", icon: "fa-graduation-cap" },
      ],
    },
  ];
  


  
  export default function TagesProjects() {
    const getLang = t(Languages.LANGUAGE) === Languages.ENGLISH
    const dataList = getLang ? categoriesEn : categoriesAr
    return (
        <div className='col-span-1 row-span-5 grid gap-3 '>
        {dataList.map((category) => (
            <div key={category.name} className="flex flex-col hover:bg-gray-200 group/cardlink rounded-[5px] shadow border-r-[3px]  hover:border-r-gold border-r-white p-[2px] transition-all ease-in-out duration-1000">
            <Link href={`${t(Languages.LANGUAGE)}/${category.link}`} className="flex items-center gap-1 relative text-dis dark:hover:text-or dark:text-white hover:text-bl transition-all ease-in-out duration-1000">
              <div className="w-6 h-6 flex justify-center items-center">
                <i className={`fa ${category.icon}`}></i>
              </div>
              <h3 className="font-semibold text-[14px] group-hover/cardlink:text-dis hover:text-or ">{category.name}</h3>
              <div className="w-auto px-2 text-dis dark:bg-dis text-[10px] dark:text-white dark:rounded-lg absolute rtl:left-2 ltr:right-2 dark:border-none border-b-[1px]">
                 <p>{category.count}</p>
              </div>
            </Link>

            <ul className="rtl:mr-4 ltr:ml-4 flex justify-start items-center xl:flex-nowrap flex-wrap whitespace-nowrap gap-x-1">
                {category.subCategories.map((sub) => (
                <li key={sub.name} className="border-gray-100 dark:border-none  dark:text-dis hover:border-bl border-[1px] px-1 rounded-lg text-[10px] transition-all ease-in-out duration-1000">
                  <Link
                    href={sub.link}
                    className="flex items-center text-gr hover:text-bl dark:hover:text-or transition-all ease-in-out duration-1000"
                    >
                    {/* <div className="w-6 h-6 mx-1 justify-center items-center">
                      <i className={`fa ${sub.icon} text-dis`}></i>
                    </div> */}
                    <p className="">{sub.name}</p>
                    </Link>
                </li>
                ))}
            </ul>
            </div>
        ))}
        </div>
    )
  }
  