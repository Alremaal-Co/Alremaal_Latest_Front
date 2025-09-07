"use client"

import * as React from "react"
import { ChevronsUpDown, Plus } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar, // تأكد من أن هذا الخطاف يوفر خاصية open
} from "@/components/ui/sidebar"
import Image from "next/image"
import { useThemeCustomizer } from "@/context/ThemeCustomizerContext"

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    logo: React.ElementType
    plan: string
  }[]
}) {
  const { settings } = useThemeCustomizer();
  const isDarkMode = settings?.mode === "dark"
  
  const { open , isMobile } = useSidebar() 
  
  const [activeTeam, setActiveTeam] = React.useState(teams[0])

  if (!activeTeam) {
    return null
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground flex justify-between items-center"
            >
              <div className={`text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg ${open ? 'hidden' : 'flex'}`}>
                <Image alt="logo-small" width={32} height={32} src={`/assets/images/logo-${isDarkMode ? "light" : "dark"}.svg`} />
              </div>
              <Image 
                alt="logo-big" 
                width={150}
                height={60} 
                src={`/assets/images/logo-big-${!isDarkMode ? "dark" : "light"}.png`} 
                className={`${!open ? 'hidden' : 'block'}`} 
              />
              <ChevronsUpDown className={`text-primary dark:text-white ${!open ? 'hidden' : 'block'}`} />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}















// "use client"

// import * as React from "react"
// import { ChevronsUpDown, Plus } from "lucide-react"

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import {
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   useSidebar,
// } from "@/components/ui/sidebar"
// import Image from "next/image"
// import { useThemeCustomizer } from "@/context/ThemeCustomizerContext"

// export function TeamSwitcher({
//   teams,
// }: {
//   teams: {
//     name: string
//     logo: React.ElementType
//     plan: string
//   }[]
// }) {
//   const { settings } = useThemeCustomizer();
//   const isDarkMode = settings?.mode === "dark"
//   const { isMobile } = useSidebar()
//   const [activeTeam, setActiveTeam] = React.useState(teams[0])

//   if (!activeTeam) {
//     return null
//   }

//   return (
//     <SidebarMenu>
//       <SidebarMenuItem>
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <SidebarMenuButton
//               size="lg"
//               className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
//             >
//               <div className="dark:bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
//                 {/* <activeTeam.logo className="size-4" /> */}
//                 <Image alt="logo2" width={1700} height={1700} src={`/assets/images/logo-${isDarkMode ? "light" : "dark"}.svg`} className="" />
//               </div>
//               <div className="grid flex-1 text-left text-sm leading-tight">
//                 <span className="truncate font-medium">{activeTeam.name}</span>
//                 <span className="truncate text-xs">{activeTeam.plan}</span>
//               </div>
//               <ChevronsUpDown className="ml-auto" />
//             </SidebarMenuButton>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent
//             className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
//             align="start"
//             side={isMobile ? "bottom" : "right"}
//             sideOffset={4}
//           >
//             <DropdownMenuLabel className="text-muted-foreground text-xs">
//               Teams
//             </DropdownMenuLabel>
//             {teams.map((team, index) => (
//               <DropdownMenuItem
//                 key={team.name}
//                 onClick={() => setActiveTeam(team)}
//                 className="gap-2 p-2"
//               >
//                 <div className="flex size-6 items-center justify-center rounded-md border">
//                   <team.logo className="size-3.5 shrink-0" />
//                 </div>
//                 {team.name}
//                 <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
//               </DropdownMenuItem>
//             ))}
//             <DropdownMenuSeparator />
//             <DropdownMenuItem className="gap-2 p-2">
//               <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
//                 <Plus className="size-4" />
//               </div>
//               <div className="text-muted-foreground font-medium">Add team</div>
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </SidebarMenuItem>
//     </SidebarMenu>
//   )
// }
