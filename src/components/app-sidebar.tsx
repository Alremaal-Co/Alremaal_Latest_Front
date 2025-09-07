"use client"

import * as React from "react"
import { useThemeCustomizer } from "@/context/ThemeCustomizerContext";
import { cn } from "@/lib/utils";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { TeamSwitcher } from "./team-switcher";
import { NavUser } from "@/components/nav-user";
import { sidebarDataAr } from "@/core/data/sidebar-data-ar";

import { GalleryVerticalEnd } from "lucide-react"; 
import { sidebarDataEn } from "@/core/data/sidebar-data-en";

const data = {
  user: {
    name: "محمد أحمد",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    { name: "Acme Inc", logo: GalleryVerticalEnd, plan: "Enterprise" }
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { settings } = useThemeCustomizer();
  const isRtl = settings.direction === 'rtl';

  const sidebarData = isRtl ? sidebarDataAr  : sidebarDataEn;
  const { open , isMobile  , openMobile , setOpen , setOpenMobile , state , toggleSidebar  } = useSidebar() 

  return (
    <Sidebar
      collapsible="icon"
      {...props}
    >
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>

      <SidebarContent>
        {sidebarData.sections.map((section) => {
          return (
            <React.Fragment key={section.title}>
              {section?.items?.length > 0 && (
                <NavMain
                  label={section.title}
                  items={section?.items}
                  isRtl={isRtl}
                />
              )}
            </React.Fragment>
          );
        })}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}









