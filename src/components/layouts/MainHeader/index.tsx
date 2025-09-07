"use client"
import LinksPupNavbarV2 from './linksPup.navbar-v2'
import IconsNavbarV2 from './Icons.navbat-v2'
import { MAIN_DROPDOWN_NAVEBAR_V2_TYPE } from './_init/types';
import { MAIN_DROPDOWN_NAVEBAR_V2 } from './_init';
import { NAVBAR_STATE_TYPE } from './_init/enum';
import { AnimatePresence , motion} from 'framer-motion';
import { MotionDiv } from '@/components/MotionElements';
import useReduxState from '@/hooks/useReduxState';
import LogoNavbar from './_logo.navbar';



export const DrawerConfig = {
  // isActive:true,
  className:"w-[20rem] min-w-[20rem] min-h-[100vh] h-screen",
  backgroundColor:"#013064",
  // setActive:(value:boolean)=>{ !DrawerConfig.isActive === value},
  // setActive(value:boolean) {
  //   return !this.isActive === value ;
  // },
  

}
export function MainHeader() {
  const [MainDropdownNavBar, setMainDropdownNavBar] = useReduxState<MAIN_DROPDOWN_NAVEBAR_V2_TYPE>("MAIN_DROPDOWN_NAVEBAR_V2", MAIN_DROPDOWN_NAVEBAR_V2);
  const {position} = MainDropdownNavBar.config
  const handleMouseEnter = (state:boolean) => {
    try {
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
  };

  const isHoverNavBar = MainDropdownNavBar.config.hoverState 
  const onMouseLeave = ()=>{
    setMainDropdownNavBar((prev: MAIN_DROPDOWN_NAVEBAR_V2_TYPE) => ({
      ...prev,
      config: {
        ...prev.config,
        // position:({...prev.config.position ,opacity: 0 })
      },
    }));
  }

  return (
    <div 
      //  onMouseLeave={onMouseLeave}
      //  onMouseEnter={()=>{handleMouseEnter(MainDropdownNavBar.config.state !== NAVBAR_STATE_TYPE.DEFAULT && true)}} 
       className='w-screen h-[4rem]  fixed top-0 z-[101] flex justify-between items-center  gap-4 xl:px-28 lg:px-[6%] md:px-[4%] px-[2%]  md:bg-white dark:bg-dark-box bg-gray-100  shadow'>
      <AnimatePresence>
        <MotionDiv
          key={`$background-${isHoverNavBar}`}
          // variants={dropdownVariantsNoOpacity}
          // initial="initial"

          // initial={{opacity:0}}
          // animate={{opacity: !isHoverNavBar ? 0 : 0.9}}
          // exit={{opacity:0}}
          
          // exit="exit"
          onMouseEnter={()=>{handleMouseEnter(false)}}
          className={`bg-dark  ${isHoverNavBar ? "block":"hidden"}  w-screen h-full fixed inset-0 top-[4rem] opacity-40 z-[100]`}
        ></MotionDiv>
        
      </AnimatePresence>
      <Cursor/>

        <div className="md:w-1/2 w-1/4 flex justify-start items-center xl:gap-10 gap-4  h-full z-[101]">
          <LogoNavbar className={""}/>
          <LinksPupNavbarV2/>
        </div>
        {/* <IconsNavbarV2/>     */}
 
    </div>
  )
}





export  function Cursor() {
  const [MainDropdownNavBar, setMainDropdownNavBar] = useReduxState<MAIN_DROPDOWN_NAVEBAR_V2_TYPE>("MAIN_DROPDOWN_NAVEBAR_V2", MAIN_DROPDOWN_NAVEBAR_V2);
  const {position , state , hoverState} = MainDropdownNavBar.config
  const isUserVeiw = state === NAVBAR_STATE_TYPE.USER_VIEW
  const isNotification = state === NAVBAR_STATE_TYPE.NOTIFICATIONS
  const isHelp = state === NAVBAR_STATE_TYPE.HELP
  const isLang = state === NAVBAR_STATE_TYPE.LANG

  return (
    <MotionDiv
    initial={{ left: 0 , width: 0 , opacity: 0}}
      animate={{
        ...position,
      }}
      transition={{duration:0.5}}
      className={`absolute bg-gray-200 dark:bg-dark h-10 w-10 rounded-full   p-2`}>
         
    </MotionDiv>
  )
}





const AnimatedStroke = ({className}:{className?:string}) => {
  const [MainDropdownNavBar, setMainDropdownNavBar] = useReduxState<MAIN_DROPDOWN_NAVEBAR_V2_TYPE>("MAIN_DROPDOWN_NAVEBAR_V2", MAIN_DROPDOWN_NAVEBAR_V2);
  const {position , state , hoverState} = MainDropdownNavBar.config
  const isUserVeiw = state === NAVBAR_STATE_TYPE.USER_VIEW
  const isNotification = state === NAVBAR_STATE_TYPE.NOTIFICATIONS
  return (
    <motion.svg key={state}
      className={`${className} absolute z-[103]  left-[10px] -bottom-[16px] h-6 w-[8vh]`}
      width="50"
      height="18"
      viewBox="0 0 50 18"

      // width="298" height="114" viewBox="0 0 298 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ strokeDasharray: 50, strokeDashoffset: 50 }}
      animate={{ strokeDashoffset: 0 }}
      exit={{ strokeDasharray: 50, strokeDashoffset: 50 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <path
        d="M2.38235 1V1C1.17889 5.54641 4.60697 10 9.30997 10H29.4584C38.3446 10 46.1369 15.9338 48.5 24.5V24.5"
        stroke="#e5e7eb"
        strokeWidth="3"
      />





    </motion.svg>
  );
};
