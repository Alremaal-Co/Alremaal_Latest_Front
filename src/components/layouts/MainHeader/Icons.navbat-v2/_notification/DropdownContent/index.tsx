"use client"
import React, { useState } from 'react';
import { MainDropdown } from '../../../_MainDropdown';
import { MAIN_DROPDOWN_NAVEBAR_V2 } from '../../../_init';
import { MAIN_DROPDOWN_NAVEBAR_V2_TYPE } from '../../../_init/types';
import { NAVBAR_STATE_TYPE } from '../../../_init/enum';
import NotficationList from './notfication_list';
import useReduxState from '@/hooks/useReduxState';
import { DropdownArrow } from '../../../_DropdownArrow';

export enum AccountType {
  Admin = 'مدير',
  TeamMember = 'فريق',
  NewUser = 'مستخدم جديد',
  Agent = 'وسيط',
  RegularUser = 'مستخدم عادي',
}

export enum NotificationTypeEnum {
  Message = 'رسالة',
  Join = 'انضمام',
  Approval = 'موافقة',
  Announcement = 'إعلان',
  Request = 'طلب',
  Financing = 'تمويل',
  General = 'إشعار عام',
  Alert = 'تنبيه',
  Invitation = 'دعوة',
  Review = 'مراجعة',
  RealEstateRequest = 'طلب عقاري',
  Advertisement = 'إعلان عقاري',
  ProjectUpdate = 'تحديث مشروع',
  Interaction = 'تفاعل',
  UnitPurchase = 'شراء وحدة'
}


export interface notificationsType {
  type: NotificationTypeEnum;   // نوع الإشعار
  icon: string;             // أيقونة الإشعار
  title: string;            // عنوان الإشعار
  des: string;              // وصف الإشعار
  link: string;             // رابط متعلق بالإشعار
  time: string;             // الوقت منذ حدوث الإشعار (e.g., "2h ago")
  category: string;         // القسم أو التصنيف (e.g., "Finance")
  backgroundColor: string;  // لون الخلفية
  borderColor: string;      // لون الحدود
  image?: string;           // صورة مرفقة (اختيارية)
  userName: string;         // اسم المستخدم المرتبط بالإشعار
  userStatus: boolean;      // حالة المستخدم: true إذا كان متصلًا، false إذا كان غير متصل
  accountType: AccountType; // نوع الحساب
  actions?: string[];       // قائمة بالإجراءات المتاحة (e.g., ["Approve", "Deny", "Reply"])
  content?:any;
}

const notificationsArray: notificationsType[] = [
  {
    type: NotificationTypeEnum.Message,
    icon: 'fas fa-envelope',
    title: 'رسالة جديدة',
    des: 'لديك رسالة جديدة بخصوص طلبك العقاري.',
    link: '/messages',
    time: 'الآن',
    category: 'الرسائل',
    backgroundColor: 'bg-blue-50',
    borderColor: 'border-blue-500',
    image: '/assets/images/_test/Logo_companies/00.jpeg',
    userName: 'عبدالله محمود',
    userStatus: true,
    accountType: AccountType.RegularUser,
    content:{
      type: 'pdf',
      content:"السلام عليكم, جاري البحث عن موصفات عقارك وفي خلال بضع ساعات او مده لا تزيد او تقل عن ساعتين سيتم اخبارك بموقع العقار الخاص بطلبك شكرا لكم.",
      actions: ['عرض الدردشه', 'عرض الطلب'],
    }
  },
  {
    type: NotificationTypeEnum.Advertisement,
    icon: 'fas fa-bullhorn',
    title: 'إعلان عقاري جديد',
    des: 'تم إضافة إعلان عقاري جديد في الرياض.',
    link: '/ads',
    time: 'قبل ساعتين',
    category: 'الإعلانات',
    backgroundColor: 'bg-orange-50',
    borderColor: 'border-orange-500',
    image: '/assets/images/_test/Logo_companies/02.jpg',
    userName: 'شركة الرمال',
    userStatus: true,
    accountType: AccountType.Admin,
    actions: ['عرض الإعلان'],
  },

  {
    type: NotificationTypeEnum.Advertisement,
    icon: 'fas fa-bullhorn',
    title: 'إعلان عقاري جديد',
    des: 'تم إضافة إعلان عقاري جديد في جده.',
    link: '/ads',
    time: 'قبل ساعتين',
    category: 'الإعلانات',
    backgroundColor: 'bg-orange-50',
    borderColor: 'border-orange-500',
    image: '/assets/images/_test/Logo_companies/02.jpg',
    userName: 'شركة الرمال',
    userStatus: true,
    accountType: AccountType.Admin,
    actions: ['عرض الإعلان'],
  },
  {
    type: NotificationTypeEnum.Financing,
    icon: 'fas fa-hand-holding-usd',
    title: 'طلب تمويل عقاري',
    des: 'لديك طلب تمويل عقاري جديد قيد المراجعة.',
    link: '/financing',
    time: 'قبل 3 ساعات',
    category: 'التمويل العقاري',
    backgroundColor: 'bg-yellow-50',
    borderColor: 'border-yellow-500',
    image: '/assets/images/_test/Logo_companies/03.jpg',
    userName: 'بنك الخليج',
    userStatus: false,
    accountType: AccountType.Agent,
    actions: ['عرض الطلب'],
  },
  {
    type: NotificationTypeEnum.Advertisement,
    icon: 'fas fa-bullhorn',
    title: 'إعلان عقاري جديد',
    des: 'تم إضافة إعلان عقاري جديد في المدينه.',
    link: '/ads',
    time: 'قبل ساعه',
    category: 'الإعلانات',
    backgroundColor: 'bg-orange-50',
    borderColor: 'border-orange-500',
    image: '/assets/images/_test/Logo_companies/02.jpg',
    userName: 'شركة الرمال',
    userStatus: true,
    accountType: AccountType.Admin,
    actions: ['عرض الإعلان'],
  },

  {
    type: NotificationTypeEnum.Financing,
    icon: 'fas fa-hand-holding-usd',
    title: 'طلب تمويل عقاري',
    des: 'لديك طلب تمويل عقاري جديد قيد المراجعة.',
    link: '/financing',
    time: 'قبل 5 ساعات',
    category: 'التمويل العقاري',
    backgroundColor: 'bg-yellow-50',
    borderColor: 'border-yellow-500',
    image: '/assets/images/_test/Logo_companies/03.jpg',
    userName: 'بنك مصر',
    userStatus: false,
    accountType: AccountType.Agent,
    actions: ['عرض الطلب'],
  },

  {
    type: NotificationTypeEnum.Message,
    icon: 'fas fa-envelope',
    title: 'رسالة جديدة',
    des: 'لديك رسالة جديدة بخصوص طلبك العقاري.',
    link: '/messages',
    time: 'الآن',
    category: 'الرسائل',
    backgroundColor: 'bg-blue-50',
    borderColor: 'border-blue-500',
    image: '/assets/images/_test/Logo_companies/00.jpeg',
    userName: 'عبدالله محمود',
    userStatus: true,
    accountType: AccountType.RegularUser,
    content:{
      type: 'text',
      content:"السلام عليكم, جاري البحث عن موصفات عقارك وفي خلال بضع ساعات او مده لا تزيد او تقل عن ساعتين سيتم اخبارك بموقع العقار الخاص بطلبك شكرا لكم.",
      actions: ['عرض الدردشه', 'عرض الطلب'],
    }
  },

  {
    type: NotificationTypeEnum.RealEstateRequest,
    icon: 'fas fa-home',
    title: 'طلب عقاري جديد',
    des: 'تم إضافة طلب جديد لشراء شقة بمواصفاتك.',
    link: '/requests',
    time: 'قبل ساعة',
    category: 'طلبات العقار',
    backgroundColor: 'bg-green-50',
    borderColor: 'border-green-500',
    image: '/assets/images/_test/Logo_companies/01.jpg',
    userName: 'محمد علي',
    userStatus: false,
    accountType: AccountType.Agent,
    content:{
      tages:[ 
        "شقه في الرياض",
        "بطل علي برج خليفه",
        "في امريكا",
        "لا تزيد عن 2 جنيه",
        "تصلح للتمويل العقاري",
        "6 غرف نوم",
        "بها عمودين كردان"
      ],
      actions: ['عرض التفاصيل'],

    }
  },

  {
    type: NotificationTypeEnum.Message,
    icon: 'fas fa-envelope',
    title: 'رسالة جديدة',
    des: 'لقد ارسل ملف pdf بخصوص طلبك العقاري',
    link: '/messages',
    time: 'الآن',
    category: 'الرسائل',
    backgroundColor: 'bg-blue-50',
    borderColor: 'border-blue-500',
    image: '/assets/images/_test/Logo_companies/00.jpeg',
    userName: 'عبد العزيز موجود',
    userStatus: true,
    accountType: AccountType.RegularUser,
    content:{
      type: 'pdf',
      content:"السلام عليكم, جاري البحث عن موصفات عقارك وفي خلال بضع ساعات او مده لا تزيد او تقل عن ساعتين سيتم اخبارك بموقع العقار الخاص بطلبك شكرا لكم.",
      actions: ['عرض الدردشه', 'عرض الطلب'],

    }
  },

  {
    type: NotificationTypeEnum.Message,
    icon: 'fas fa-envelope',
    title: 'رسالة جديدة',
    des: 'لقد ارسل ملف pdf بخصوص طلبك العقاري',
    link: '/messages',
    time: 'الآن',
    category: 'الرسائل',
    backgroundColor: 'bg-blue-50',
    borderColor: 'border-blue-500',
    image: '/assets/images/_test/Logo_companies/00.jpeg',
    userName: 'عبد العزيز موجود',
    userStatus: true,
    accountType: AccountType.RegularUser,
    content:{
      type: 'pdf',
      // content:"السلام عليكم, جاري البحث عن موصفات عقارك وفي خلال بضع ساعات او مده لا تزيد او تقل عن ساعتين سيتم اخبارك بموقع العقار الخاص بطلبك شكرا لكم."
      actions: ['عرض الدردشه', 'عرض الطلب'],

    }
  },

  {
    type: NotificationTypeEnum.ProjectUpdate,
    icon: 'fas fa-project-diagram',
    title: 'تحديث على مشروع جولدن',
    des: 'تم تعديل مخطط مشروع جولدن، يرجى التحقق من التفاصيل.',
    link: '/projects/golden',
    time: 'اليوم',
    category: 'المشاريع',
    backgroundColor: 'bg-purple-50',
    borderColor: 'border-purple-500',
    image: '/assets/images/_test/Logo_companies/04.jpg',
    userName: 'إدارة المشاريع',
    userStatus: true,
    accountType: AccountType.TeamMember,
    actions: ['عرض التعديلات'],
  },
  {
    type: NotificationTypeEnum.Interaction,
    icon: 'fas fa-comment',
    title: 'تفاعل جديد مع طلبك',
    des: 'تم إرسال تعليق جديد بخصوص العرض الخاص بك.',
    link: '/offers',
    time: 'قبل 5 ساعات',
    category: 'التفاعل',
    backgroundColor: 'bg-gray-50',
    borderColor: 'border-gray-500',
    image: '/assets/images/_test/Logo_companies/05.jpg',
    userName: 'سعيد حسن',
    userStatus: false,
    accountType: AccountType.RegularUser,
    actions: ['عرض التفاعل'],
  },
  {
    type: NotificationTypeEnum.UnitPurchase,
    icon: 'fas fa-shopping-cart',
    title: 'طلب شراء وحدة',
    des: 'تم إرسال طلب شراء لوحدتك في مشروع الرمال.',
    link: '/units',
    time: 'أمس',
    category: 'شراء الوحدات',
    backgroundColor: 'bg-teal-50',
    borderColor: 'border-teal-500',
    image: '/assets/images/_test/Logo_companies/06.jpg',
    userName: 'أحمد عمر',
    userStatus: true,
    accountType: AccountType.NewUser,
    actions: ['تفاصيل الطلب'],
  },
];


export default function DropdownContent() {
  const [MainDropdownNavBar, setMainDropdownNavBar] =
    useReduxState<MAIN_DROPDOWN_NAVEBAR_V2_TYPE>(
      'MAIN_DROPDOWN_NAVEBAR_V2',
      MAIN_DROPDOWN_NAVEBAR_V2
    );

  const handleMouseEnter = () => {
    setMainDropdownNavBar((prev) => ({
      ...prev,
      config: { ...prev.config, state: NAVBAR_STATE_TYPE.DEFAULT },
    }));
  };

  const tabs: any[] = [
    {
      id: '1',
      name: 'All',
      icon: 'fa-bell',
      nameAr: 'الكل',
      nameEn: 'All',
    },
    {
      id: '2',
      name: 'Teams',
      icon: 'fa-users', 
      nameAr: 'الفرق',
      nameEn: 'Teams',
    },
    {
      id: '3',
      name: 'رسائل',
      icon: 'fa-comment', 
      nameAr: 'رسائل',
      nameEn: 'msg',
    },
    {
      id: '4',
      name: 'Mentions',
      icon: 'fa-at', 
      nameAr: 'الإشارات',
      nameEn: 'Mentions',
    },
  ];

  const [activeTab , setActiveTab] = useState<any>(tabs[0])

  return (
    <MainDropdown stateValue={NAVBAR_STATE_TYPE.NOTIFICATIONS}>
      <div className="absolute bg-gray-100 rounded-b-[20px] -top-0 md:ltr:right-[1.3vw] md:rtl:left-[1.3vw]  xl:w-[28vw]  md:w-[50vw] w-full sm:h-auto h-full bg-white shadow-lg">
        <DropdownArrow/>  {/*  classNameRight={"w-3 h-3 -right-3 "} classNameleft={"w-3 h-3 -left-3"}  */}
        <div className=''>
          {/* <TabsV1 
           tabs={tabs}
           activeTab={activeTab}
           onClick={(active:tapType)=>{setActiveTab(active)}}
           className='w-full sm:px-2 px-[1px]'
           /> */}
        </div>
        <div className="md:py-2 w-full">
          <div className="md:h-[60vh] h-[80vh] overflow-y-auto md:pb-0 pb-8 my-2">
            <NotficationList data={notificationsArray} activeTab={activeTab}/>
          </div>
        </div>
      </div>
    </MainDropdown>
  );
}

