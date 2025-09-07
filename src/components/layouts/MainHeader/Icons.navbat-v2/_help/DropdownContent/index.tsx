import Link from 'next/link';
import React from 'react';
import { MainDropdown } from '../../../_MainDropdown';
import { MAIN_DROPDOWN_NAVEBAR_V2 } from '../../../_init';
import { MAIN_DROPDOWN_NAVEBAR_V2_TYPE } from '../../../_init/types';
import { NAVBAR_STATE_TYPE } from '../../../_init/enum';
import CallsUs from './_CallsUs';
import useReduxState from '@/hooks/useReduxState';
import { DropdownArrow } from '../../../_DropdownArrow';

export default function DropdownContent() {
  const [MainDropdownNavBar, setMainDropdownNavBar] = useReduxState<MAIN_DROPDOWN_NAVEBAR_V2_TYPE>("MAIN_DROPDOWN_NAVEBAR_V2", MAIN_DROPDOWN_NAVEBAR_V2);
  
  const handleMouseEnter = () => {
    setMainDropdownNavBar(prev => ({
      ...prev,
      config: { ...prev.config, state: NAVBAR_STATE_TYPE.DEFAULT },
    }));
  };

  return (
    <MainDropdown stateValue={NAVBAR_STATE_TYPE.HELP}>
      {/* {MainDropdownNavBar.config.state === NAVBAR_STATE_TYPE.DEFAULT && <div onMouseEnter={handleMouseEnter} className="w-screen h-full absolute bottom-0"></div>} */}
      <div className='absolute rounded-b-[20px] -top-0 ltr:right-[1.3vw] rtl:left-[1.3vw] w-[32vw] h-auto bg-white shadow-lg'>
        <DropdownArrow />
        <div className='w-full h-full grid grid-cols-5 gap-x-2 px-2 pb-2'>
          <div className='col-span-2 h-full'>
          <h1 className='text-bl text-xl font-medium border-b-[1px] pb-2 mb-2 mx-2'>دعمك</h1>
          
            <div className='w-auto flex justify-between items-start flex-col gap-3'>
              <PagesSupport icon="fas fa-book" title="مركز المعرفة" des="استعرض المقالات والموارد لمساعدتك." link="##" />
              <PagesSupport icon="fas fa-folder-open" title="إضافه شكوى" des="هنا يمكنك عرض الشكاوي المقدمة سابقاً." link="##" />
              <PagesSupport icon="fas fa-file-alt" title="عرض الشكاوي" des="هنا يمكنك تقديم شكوى جديدة." link="##" />
              <PagesSupport icon="fas fa-question-circle" title="أسئلة شائعة" des="هنا يمكنك العثور على إجابات للأسئلة الشائعة." link="##" />
              <PagesSupport icon="fas fa-comments" title="الدردشة المباشرة" des="تحدث مع أحد ممثلي الدعم مباشرة." link="##" />
            </div>
          
          </div>
          <CallsUs/>
        </div>
      </div>
    </MainDropdown>
  );
}

export function PagesSupport({ title, des, link , icon }: { title: string; des: string; link: string , icon: string}) {
  return (
    <Link href={link || "#"} className='hover:bg-gray-100 transition-all duration-1000 ease-in-out rounded-lg  w-full py-1'>
      <div className='flex justify-start items-center gap-2 font-semibold px-2 text-dis'>
        <div className='w-6 h-6 flex justify-center items-center rounded shadow-inner bg-gray-100'>
          <i className={`fas ${icon}`}></i>
        </div>
        <h1>{title}</h1>
      </div>
      <p className='rtl:pr-3 ltr:pl-3 text-[11px] text-gr'>{des}</p>
    </Link>
  );
}
























