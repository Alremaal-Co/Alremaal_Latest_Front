"use client"

import { ChevronDown, ChevronRight, type LucideIcon } from "lucide-react"
import Link from "next/link";
import { usePathname } from "@/i18n/routing";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type SubItem = { title: string; href: string; };
type NavItem = { title:string; href?: string; icon?: LucideIcon; items?: SubItem[]; };

interface NavMainProps {
  label?: string; 
  items: NavItem[];
  isRtl: boolean;
  orientation?: 'vertical' | 'horizontal';
}

const ListItem = forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";


export function NavMain({ label, items, isRtl, orientation = 'vertical' }: NavMainProps) {
  const pathname = usePathname();

  // =================================================================
  // === العرض الأفقي (HORIZONTAL LAYOUT) ============================
  // =================================================================
  if (orientation === 'horizontal') {
    return (
      <NavigationMenu>
        <NavigationMenuList>
          {items.map((item) => {
            const hasSubmenu = !!item.items?.length;
            const isActive = item.href ? pathname.startsWith(item.href) : (
              item.items?.some(sub => pathname.startsWith(sub.href)) ?? false
            );

            if (!hasSubmenu && item.href) {
              return (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink 
                      active={isActive}
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            }

            return (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger >
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {item.items?.map((subItem) => (
                      <ListItem
                        key={subItem.title}
                        title={subItem.title}
                        href={subItem.href}
                      >
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    );
  }

  // =================================================================
  // === العرض العمودي (VERTICAL LAYOUT) ================
  // =================================================================
  return (
    <SidebarGroup> 
      {label && <SidebarGroupLabel>{label}</SidebarGroupLabel>}
      <SidebarMenu>  
        {items.map((item) => {
          const hasSubmenu = !!item.items?.length;
          const isActive = item.href ? pathname.startsWith(item.href) : (
            item.items?.some(sub => pathname.startsWith(sub.href)) ?? false
          );

          if (!hasSubmenu && item.href) {
            return (
              <SidebarMenuItem key={item.title} className="relative">
                <Link href={item.href} className="">
                  <SidebarMenuButton
                    tooltip={item.title}
                    isActive={isActive}
                    className={cn("w-full justify-start cursor-pointer text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground", isActive && "!bg-primary")}
                  >
                    {isActive && <div className="absolute left-0 h-6 w-1 rounded-full bg-primary rtl:left-auto rtl:right-0" />}
                    {item.icon && <item.icon className={cn("size-4 shrink-0" , isActive && "text-white ")} />}
                    <span className={cn("truncate" , isActive && "text-white font-bold" )}>{item.title}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            );
          }

          return (
            <Collapsible key={item.title} asChild defaultOpen={isActive}>
              <SidebarMenuItem className="relative">
                {/* {isActive && <div className="absolute left-0 h-full w-1 rounded-full bg-primary/20 rtl:left-auto rtl:right-0" />} */}
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title} isActive={isActive} 
                    className={cn("w-full justify-start cursor-pointer text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground", isActive && "!bg-primary")}
                  
                  >
                    {item.icon && <item.icon className={cn("size-4 shrink-0" , isActive && "text-white ")} />}
                    <span className={cn("truncate" , isActive && "text-white font-bold" )}>{item.title}</span>
                    <ChevronRight className={cn("ml-auto transition-transform duration-200 group-data-[state=open]/trigger:rotate-90 rtl:ml-0 rtl:mr-auto rtl:-rotate-180 rtl:group-data-[state=open]:-rotate-90", isActive && "text-white ")} />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub 
                    className={cn(
                      "pl-2", 
                      isRtl && "rtl-submenu-fix border-r border-l-[0px]" 
                    )}
                  >
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild className="" isActive={pathname === subItem.href}>
                          <Link href={subItem.href}>
                            <span className={`truncate  ${pathname === subItem.href ? "text-primary font-bold":"text-muted-foreground"}`}>{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}





















// "use client"

// import { ChevronRight, type LucideIcon } from "lucide-react"
// import Link from "next/link";
// import { usePathname } from "@/i18n/routing";

// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible"
// import {
//   SidebarGroup,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarMenuSub,
//   SidebarMenuSubButton,
// } from "@/components/ui/sidebar"
// import { cn } from "@/lib/utils";
// import { useThemeCustomizer } from "@/context/ThemeCustomizerContext";

// type SubItem = {
//   title: string;
//   href: string;
// };
// type NavItem = {
//   title:string;
//   href?: string;
//   icon?: LucideIcon;
//   items?: SubItem[];
// };
// interface NavMainProps {
//   label: string;
//   items: NavItem[];
//   isRtl: boolean
// }

// export function NavMain({ label, items, isRtl }: NavMainProps) {
//   const pathname = usePathname();
//     const { settings } = useThemeCustomizer();
//   const {contentWidth , fontSize , mode , layout , routerTransition} = settings
//   console.log("settings" , settings)
//   return (
//     <SidebarGroup> 
//       <SidebarGroupLabel>{label}</SidebarGroupLabel>
//       <SidebarMenu>  
//         {items.map((item) => {
//           const hasSubmenu = !!item.items?.length;
//           const isActive = item.href ? pathname.startsWith(item.href) : (
//             item.items?.some(sub => pathname.startsWith(sub.href)) ?? false
//           );

//           if (!hasSubmenu && item.href) {
//             return (
//               // الإصلاح هنا: تمت إزالة 'asChild' من هذا السطر
//               <SidebarMenuItem key={item.title} className="relative">
//                 <Link href={item.href}>
//                   <SidebarMenuButton
//                     tooltip={item.title}
//                     isActive={isActive}
//                     className={cn(
//                       "w-full justify-start text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
//                       isActive && "text-primary bg-accent"
//                     )}
//                   >
//                     {isActive && <div className="absolute left-0 h-6 w-1 rounded-full bg-primary rtl:left-auto rtl:right-0" />}
//                     {item.icon && <item.icon className="size-4 shrink-0" />}
//                     <span className="truncate">{item.title}</span>
//                   </SidebarMenuButton>
//                 </Link>
//               </SidebarMenuItem>
//             );
//           }

//           return (
//             <Collapsible key={item.title} asChild defaultOpen={isActive}>
//               <SidebarMenuItem className="relative">
//                 {isActive && <div className="absolute left-0 h-full w-1 rounded-full bg-primary/20 rtl:left-auto rtl:right-0" />}
//                 <CollapsibleTrigger asChild>
//                   <SidebarMenuButton
//                     tooltip={item.title}
//                     isActive={isActive}
//                     className={cn(
//                       "group/trigger w-full text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
//                       isActive && "text-primary"
//                     )}
//                   >
//                     {item.icon && <item.icon className="size-4 shrink-0" />}
//                     <span className="truncate">{item.title}</span>
//                     <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/trigger:rotate-90 rtl:ml-0 rtl:mr-auto rtl:-rotate-180 rtl:group-data-[state=open]:-rotate-90" />
//                   </SidebarMenuButton>
//                 </CollapsibleTrigger>
//                 <CollapsibleContent>
//                   <SidebarMenuSub 
//                     className={cn(
//                       "ml-4 mt-2 pl-6 relative border-l border-muted/50", 
//                       isRtl && "ml-0 mr-4 pr-6 pl-0 border-l-0 border-r" 
//                     )}
//                   >
//                     {item.items?.map((subItem) => {
//                       const isSubActive = pathname === subItem.href;
//                       return (
//                         // الإصلاح هنا أيضاً: تمت إزالة 'asChild' من هذا السطر
//                         <SidebarMenuItem key={subItem.title} className="relative">
//                           <Link href={subItem.href}>
//                             <SidebarMenuSubButton
//                               isActive={isSubActive}
//                               className={cn(
//                                 "w-full text-muted-foreground transition-colors hover:text-primary",
//                                 isSubActive && "text-primary font-semibold"
//                               )}
//                             >
//                               {isSubActive && <div className="absolute -left-[1.55rem] top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-primary rtl:left-auto rtl:-right-[1.55rem]" />}
//                               <span className="truncate">{subItem.title}</span>
//                             </SidebarMenuSubButton>
//                           </Link>
//                         </SidebarMenuItem>
//                       );
//                     })}
//                   </SidebarMenuSub>
//                 </CollapsibleContent>
//               </SidebarMenuItem>
//             </Collapsible>
//           );
//         })}
//       </SidebarMenu>
//     </SidebarGroup>
//   )
// }










// "use client"

// import { ChevronRight, type LucideIcon } from "lucide-react"


// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible"
// import {
//   SidebarGroup,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarMenuSub,
//   SidebarMenuSubButton,
//   SidebarMenuSubItem,
// } from "@/components/ui/sidebar"
// import { usePathname } from "@/i18n/routing";
// import Link from "next/link";
// import { cn } from "@/lib/utils";

// type SubItem = {
//   title: string;
//   href: string;
// };
// type NavItem = {
//   title: string;
//   href?: string;
//   icon?: LucideIcon;
//   items?: SubItem[];
// };
// interface NavMainProps {
//   label: string;
//   items: NavItem[];
//   isRtl:boolean
// }

// export function NavMain({ label, items , isRtl }: NavMainProps) {
//   const pathname = usePathname();
  
//   return (
//     <SidebarGroup className=""> 
//       <SidebarGroupLabel>{label}</SidebarGroupLabel>
//       <SidebarMenu className="">  
//         {items.map((item) => {
//           const hasSubmenu = item.items && item.items.length > 0;
//           const isActive = item.href ? pathname.startsWith(item.href) : false;
//           console.log("isActive" , isActive)
//           console.log("item.href" , item.href)
  

//           if (!hasSubmenu) {
//             return (
//               <SidebarMenuItem className="" key={item.title}>
//                 <Link href={item.href || '#'} className="w-full ">
//                   <SidebarMenuButton
//                     tooltip={item.title}
//                     isActive={pathname === item.href}
//                     className={cn("w-full justify-start" , isActive && "bg-primary text-white")}
//                   >
//                     {item.icon && <item.icon className="size-4 shrink-0" />}
//                     <span className="truncate ">{item.title}</span>
//                   </SidebarMenuButton>
//                 </Link>
//               </SidebarMenuItem>
//             );
//           }

//           return (
//             <Collapsible
//               key={item.title}
//               asChild
//               defaultOpen={isActive}
//               className="group/collapsible"
//             >
//               <SidebarMenuItem>
//                 <CollapsibleTrigger asChild>
//                   <SidebarMenuButton tooltip={item.title} isActive={isActive}>
//                     {item.icon && <item.icon className="size-4 shrink-0" />}
//                     <span className="truncate">{item.title}</span>
//                     <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 rtl:ml-0 rtl:mr-auto rtl:-rotate-180 rtl:group-data-[state=open]:-rotate-90" />
//                   </SidebarMenuButton>
//                 </CollapsibleTrigger>
//                 <CollapsibleContent>
                  // <SidebarMenuSub 
                  //   className={cn(
                  //     "pl-9", 
                  //     isRtl && "rtl-submenu-fix border-r border-l-[0px]" 
                  //   )}
                  // >
                  //   {item.items?.map((subItem) => (
                  //     <SidebarMenuSubItem key={subItem.title}>
                  //       <SidebarMenuSubButton asChild isActive={pathname === subItem.href}>
                  //         <Link href={subItem.href}>
                  //           <span className="truncate">{subItem.title}</span>
                  //         </Link>
                  //       </SidebarMenuSubButton>
                  //     </SidebarMenuSubItem>
                  //   ))}
                  // </SidebarMenuSub>
//                 </CollapsibleContent>
//               </SidebarMenuItem>
//             </Collapsible>
//           );
//         })}
//       </SidebarMenu>
//     </SidebarGroup>
//   )
// }



// "use client"

// import { ChevronRight, type LucideIcon } from "lucide-react"

// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible"
// import {
//   SidebarGroup,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarMenuSub,
//   SidebarMenuSubButton,
//   SidebarMenuSubItem,
// } from "@/components/ui/sidebar"

// export function NavMain({
//   items,
// }: {
//   items: {
//     title: string
//     url: string
//     icon?: LucideIcon
//     isActive?: boolean
//     items?: {
//       title: string
//       url: string
//     }[]
//   }[]
// }) {
//   return (
//     <SidebarGroup>
//       <SidebarGroupLabel>Platform</SidebarGroupLabel>
//       <SidebarMenu>
//         {items.map((item) => (
//           <Collapsible
//             key={item.title}
//             asChild
//             defaultOpen={item.isActive}
//             className="group/collapsible"
//           >
//             <SidebarMenuItem>
//               <CollapsibleTrigger asChild>
//                 <SidebarMenuButton tooltip={item.title}>
//                   {item.icon && <item.icon />}
//                   <span>{item.title}</span>
//                   <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
//                 </SidebarMenuButton>
//               </CollapsibleTrigger>
//               <CollapsibleContent>
//                 <SidebarMenuSub>
//                   {item.items?.map((subItem) => (
//                     <SidebarMenuSubItem key={subItem.title}>
//                       <SidebarMenuSubButton asChild>
//                         <a href={subItem.url}>
//                           <span>{subItem.title}</span>
//                         </a>
//                       </SidebarMenuSubButton>
//                     </SidebarMenuSubItem>
//                   ))}
//                 </SidebarMenuSub>
//               </CollapsibleContent>
//             </SidebarMenuItem>
//           </Collapsible>
//         ))}
//       </SidebarMenu>
//     </SidebarGroup>
//   )
// }
