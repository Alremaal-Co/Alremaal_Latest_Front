"use client";
import { useThemeCustomizer } from "@/context/ThemeCustomizerContext";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { GalleryVerticalEnd, Settings } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeCustomizer } from "./theme-customizer";
import { LanguageSwitcher } from "./dropdowns/language-switcher";
import { NotificationsDropdown } from "./dropdowns/notifications-dropdown";
import { AppsDropdown } from "./dropdowns/apps-dropdown";
import { CurrencyDropdown } from "./dropdowns/currency-dropdown";
import { CountryDropdown } from "./dropdowns/country-dropdown";
import { ThemeSwitcher } from "../theme-switcher";
import { NavUser } from "../nav-user";
import { GlobalSearch } from "./GlobalSearch";

const data = {
  user: {
    name: "Mohmed Ahmed",
    email: "m@mohmed.com",
    avatar: "/assets/images/avatar.png",
  },
  teams: [
    { name: "Mohmed Ahmed", logo: GalleryVerticalEnd, plan: "Enterprise" }
  ],
};


export function AdminHeader() {
  const { settings } = useThemeCustomizer();

  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4 bg-sidebar">      
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1 rtl:ml-0 rtl:-mr-1 text-primary dark:text-white" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4 rtl:mr-0 rtl:ml-2 "
        />
            <div className="items-center gap-4 lg:flex hidden">
                <GlobalSearch />
            </div>
        {/* <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block rtl:rotate-180" />
            <BreadcrumbItem>
              <BreadcrumbPage>Data Fetching</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb> */}
      </div>

      <div className="flex items-center gap-1"> 
        <ThemeSwitcher />

        <LanguageSwitcher />
        <CountryDropdown />
        <CurrencyDropdown />
        <AppsDropdown />
        <NotificationsDropdown />

         <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5 animate-spin-slow text-primary dark:text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side={settings.direction === 'rtl' ? 'left' : 'right'} 
            className="w-[420px] p-0"
          >
            <SheetHeader>
              <SheetTitle className="sr-only">أداة تخصيص القالب</SheetTitle>
              <SheetDescription className="sr-only">
                في هذه اللوحة، يمكنك تعديل مظهر التطبيق بالكامل.
              </SheetDescription>
            </SheetHeader>
            <ThemeCustomizer />
          </SheetContent>
        </Sheet>

           <NavUser user={{
    name: "محمود خليل",
    role: "المؤسس",
    avatar: "/assets/images/avatar1.jpg" 
  }} dir={settings.direction} />
      </div>
    </header>
  );
}








