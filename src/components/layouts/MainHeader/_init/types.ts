import { Position } from "@/components/Shared/AM-Elemints/___SlideTabs";
import { NAVBAR_STATE_TYPE } from "./enum";

export interface MAIN_DROPDOWN_NAVEBAR_V2_TYPE {
    config:{
        hoverState: boolean,
        state:NAVBAR_STATE_TYPE,
        position:Position,
    }
}