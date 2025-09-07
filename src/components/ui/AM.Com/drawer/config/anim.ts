export const menuSlide = (isRtl:boolean) => ({
    initial: { x: isRtl ? "calc(100% + 100px)" : "calc(-100% - 100px)" },
    enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: { x: isRtl ? "calc(100% + 100px)" : "calc(-100% - 100px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
});

export const slide = (isRtl:boolean) => ({
    initial: { x: isRtl ? "-256px" : "256px" },
    enter: (i:any) => ({ x: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } }),
    exit: (i:any) => ({ x: isRtl ? "256px" : "-256px", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } })
});

export const scale = {
    open: { scale: 1, transition: { duration: 0.3 } },
    closed: { scale: 1, transition: { duration: 0.4 } }
};
