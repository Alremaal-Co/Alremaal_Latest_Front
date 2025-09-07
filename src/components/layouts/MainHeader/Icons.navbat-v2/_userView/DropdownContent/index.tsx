import Link from 'next/link';
import React from 'react';
import { MainDropdown } from '../../../_MainDropdown';
import { MAIN_DROPDOWN_NAVEBAR_V2 } from '../../../_init';
import { MAIN_DROPDOWN_NAVEBAR_V2_TYPE } from '../../../_init/types';
import { NAVBAR_STATE_TYPE } from '../../../_init/enum';
import UserDetails from './_UserDetails';
import { Languages } from '@/core/enum/general';
import useReduxState from '@/hooks/useReduxState';
import { DropdownArrow } from '../../../_DropdownArrow';
import { t } from '@/i18n/trans';

const userLinksAr = [
  { 
    icon: "fas fa-user", 
    title: "الملف الشخصي", 
    des: "استعراض ملفك الشخصي بكافة تفاصيله، بما في ذلك معلوماتك الأساسية وإحصائيات النشاط الأخيرة.", 
    link: "auth/profile" 
  },
  { 
    icon: "fas fa-tachometer-alt", 
    title: "لوحة التحكم", 
    des: "إدارة جميع أعمالك ومشاريعك بسهولة، مع أدوات تحكم متقدمة للوصول إلى الإحصائيات وتحليل الأداء.", 
    link: "dashboard" 
  },
  { 
    icon: "fas fa-cog", 
    title: "الإعدادات", 
    des: "تخصيص إعدادات حسابك بالكامل، بما في ذلك إعدادات الخصوصية، الإشعارات، وتفاصيل الحساب.", 
    link: "settings" 
  },
  { 
    icon: "fas fa-history", 
    title: "السجل", 
    des: "مراجعة كافة أنشطتك السابقة بطريقة منظمة، بما يشمل التعديلات، المشاركات، والأنشطة الحديثة.", 
    link: "history" 
  },
  { 
    icon: "fas fa-heart", 
    title: "المفضلة", 
    des: "إدارة جميع العناصر التي قمت بحفظها في قائمة المفضلة، للوصول إليها بسهولة في أي وقت.", 
    link: "favorites" 
  },
  { 
    icon: "fas fa-lock", 
    title: "تسجيل الدخول", 
    des: "تسجيل الدخول إلى حسابك بشكل آمن لاستخدام بياناتك وميزاتك.", 
    link: "auth/login" 
  },
  // { 
  //   icon: "fas fa-sign-out-alt", 
  //   title: "تسجيل الخروج", 
  //   des: "تسجيل الخروج بأمان للحفاظ على خصوصية حسابك وتأمين بياناتك.", 
  //   link: "auth/logout" 
  // },
];




const userLinksEn = [
  { 
    icon: "fas fa-user", 
    title: "Profile", 
    des: "View your complete profile, including basic information and recent activity statistics.", 
    link: "auth/profile" 
  },
  { 
    icon: "fas fa-tachometer-alt", 
    title: "Dashboard", 
    des: "Manage all your work and projects easily, with advanced tools for accessing statistics and performance analysis.", 
    link: "dashboard" 
  },
  { 
    icon: "fas fa-cog", 
    title: "Settings", 
    des: "Customize your account settings completely, including privacy settings, notifications, and account details.", 
    link: "settings" 
  },
  { 
    icon: "fas fa-history", 
    title: "History", 
    des: "Review all your past activities in an organized manner, including edits, posts, and recent activities.", 
    link: "history" 
  },
  { 
    icon: "fas fa-heart", 
    title: "Favorites", 
    des: "Manage all the items you've saved in the favorites list, for easy access anytime.", 
    link: "favorites" 
  },
  { 
    icon: "fas fa-lock", 
    title: "Login", 
    des: "Login to your account securely to access your data and features.", 
    link: "auth/login" 
  },
  // { 
  //   icon: "fas fa-sign-out-alt", 
  //   title: "Logout", 
  //   des: "Logout securely to maintain your account privacy and secure your data.", 
  //   link: "auth/logout" 
  // },
];

export default function DropdownContent() {
  const [MainDropdownNavBar, setMainDropdownNavBar] = useReduxState<MAIN_DROPDOWN_NAVEBAR_V2_TYPE>("MAIN_DROPDOWN_NAVEBAR_V2", MAIN_DROPDOWN_NAVEBAR_V2);
  
  const handleMouseEnter = () => {
    setMainDropdownNavBar(prev => ({
      ...prev,
      config: { ...prev.config, state: NAVBAR_STATE_TYPE.DEFAULT },
    }));
  };
  const onClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>, state:boolean)=>{
    try {
      e.stopPropagation()
      setMainDropdownNavBar((prev: MAIN_DROPDOWN_NAVEBAR_V2_TYPE) => ({
        ...prev,
        config: {
          ...prev.config,
          hoverState: state,
          state: NAVBAR_STATE_TYPE.DEFAULT
          
        },
      }));
    } catch (error) {
      console.error("Error updating dropdown state:", error);
    }
  } 
  
  const GetLang = t(Languages.LANGUAGE) === Languages.ENGLISH 
  const userLinks = GetLang ? userLinksEn : userLinksAr

  return (
<MainDropdown stateValue={NAVBAR_STATE_TYPE.USER_VIEW}>
    {/* {MainDropdownNavBar.config.state === NAVBAR_STATE_TYPE.DEFAULT && <div onMouseEnter={handleMouseEnter} className="w-screen h-full absolute bottom-0"></div>} */}
    <div className="absolute rounded-b-[20px] -top-0 md:ltr:right-[1.3vw] md:rtl:left-[1.3vw]  2xl:w-[32vw] xl:w-[40vw] lg:w-[50vw] md:w-[60vw] w-full lg:h-auto bg-white shadow-lg">
    <DropdownArrow />
    <div onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>onClick(e , false)} className="w-full h-full grid grid-cols-5 gap-x-2 px-2 pb-2">
      <div className="col-span-2 md:block hidden h-full">
        <div className="md:flex hidden justify-between items-start flex-col md:gap-3 lg:gap-2 gap-1">
          {userLinks.map((link, index) => (
            <PagesSupport
              key={index}
              icon={link.icon}
              title={link.title}
              des={link.des}
              link={link.link}
            />
          ))}
        </div>
      </div>
      <UserDetails userLinks={userLinks} />
    </div>
  </div>
  
</MainDropdown>

  );
}

export function PagesSupport({ title, des, link , icon , isMobileView }: {isMobileView?:boolean; title: string; des: string; link: string , icon: string}) {
  return (
    <Link href={`/${link ? link : "#"} `} className='hover:bg-gray-100 transition-all duration-1000 ease-in-out rounded-lg  w-full sm:py-2 md:py-1 py-[1px]'>
      <div className='flex justify-start items-center gap-2 font-semibold sm:px-2 px-1 text-dis'>
        <div className='sm:w-6 w-4 sm:h-6 h-4 flex justify-center items-center rounded shadow-inner bg-gray-100'>
          <i className={`fas ${icon}`}></i>
        </div>
        <h1 className={`${isMobileView ? "text-[14px]":"text-[15px]"}`}>{title}</h1>
      </div>
      <p className='md:rtl:pr-3 md:ltr:pl-3 sm:rtl:pr-4 sm:ltr:pl-4 rtl:pr-6 ltr:pl-6  md:text-[11px] text-[10px] text-gr'>{des}</p>
    </Link>
  );
}
























