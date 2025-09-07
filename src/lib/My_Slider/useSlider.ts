import { useEffect } from "react";

export const useSlider = (state_Key: string, state: any, setState: React.Dispatch<React.SetStateAction<any>>) => {
    useEffect(() => {
      const storedLabel = localStorage.getItem(`${state_Key}_SliderSelected`);
      if (storedLabel) {
        const parsedLabel = JSON.parse(storedLabel);
        setState({ [state_Key]: parsedLabel || state });
      }
    }, [state_Key, state, setState]);
  
    const handleClick = (valueSelected: string) => {
      setState({ [state_Key]: valueSelected });
      localStorage.setItem(`${state_Key}_SliderSelected`, JSON.stringify(valueSelected));
    };
  
    return handleClick;
  };
  