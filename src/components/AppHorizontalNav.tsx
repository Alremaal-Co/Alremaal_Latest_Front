"use client"

import * as React from "react";
import { useThemeCustomizer } from "@/context/ThemeCustomizerContext";
import { NavMain } from "@/components/nav-main";
import { TeamSwitcher } from "./team-switcher";
import { sidebarDataAr } from "@/core/data/sidebar-data-ar";
import { GalleryVerticalEnd } from "lucide-react";
import { AdminHeader } from "./header"; // سنضع الهيدر هنا في الوضع الأفقي

const data = {
  teams: [{ name: "Acme Inc", logo: GalleryVerticalEnd, plan: "Enterprise" }],
};

export function AppHorizontalNav() {
  const { settings } = useThemeCustomizer();
  const isRtl = settings.direction === 'rtl';
  const sidebarData = sidebarDataAr;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-card border-b h-16 flex items-center">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <TeamSwitcher teams={data.teams} />
          <nav className="hidden md:flex items-center gap-2">
            {sidebarData.sections.map((section) => (
              <React.Fragment key={section.title}>
                {section?.items?.length > 0 && (
                  // تمرير الخاصية الجديدة هنا
                  <NavMain
                    orientation="horizontal" 
                    items={section.items}
                    isRtl={isRtl}
                  />
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
        
        {/* الهيدر الذي يحتوي على أيقونات المستخدم والإعدادات يوضع هنا */}
        <div className="hidden md:block">
            <AdminHeader />
        </div>
      </div>
    </header>
  );
}