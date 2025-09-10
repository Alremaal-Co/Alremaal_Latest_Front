import { AnimatePresence, motion } from "framer-motion";
import { MAIN_DROPDOWN_NAVEBAR_V2_TYPE } from "./_init/types";
import { dropdownVariants, MAIN_DROPDOWN_NAVEBAR_V2 } from "./_init";
import { NAVBAR_STATE_TYPE } from "./_init/enum";
import useReduxState from "@/hooks/useReduxState";
import { MotionDiv } from "@/components/MotionElements";

export function MainDropdown({ children , stateValue }: {stateValue?:NAVBAR_STATE_TYPE ,  children: React.ReactNode }) {
  const [MainDropdownNavBar, setMainDropdownNavBar] = useReduxState<MAIN_DROPDOWN_NAVEBAR_V2_TYPE>(
    "MAIN_DROPDOWN_NAVEBAR_V2",
    MAIN_DROPDOWN_NAVEBAR_V2
  );

  const { config } = MainDropdownNavBar;


  const handleMouseEnter = () => {
    try {
      setMainDropdownNavBar((prev: MAIN_DROPDOWN_NAVEBAR_V2_TYPE) => ({
        ...prev,
        config: {
          ...prev.config,
          state: NAVBAR_STATE_TYPE.DEFAULT,
          position:({...prev.config.position ,opacity: 0 })

        },
      }));
    } catch (error) {
      console.error("Error updating dropdown state:", error);
    }
  };

  return (
    <AnimatePresence >
    <motion.div
      key={config.state}
      variants={dropdownVariants}
      initial="initial"
      animate={config.state === stateValue ? "animate" : "initial"}
      exit="exit"
      className={`w-screen h-[calc(100vh-4rem)] fixed left-0 top-[4rem] bottom-0`}
    >
      {MainDropdownNavBar.config.state === stateValue && 
      <div 
      onMouseEnter={handleMouseEnter}
       className="w-screen h-full absolute bottom-0"></div>}
      {children}
    </motion.div>
    </AnimatePresence>
  );
}
