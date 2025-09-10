// "use client";

// import { useEffect, useState } from "react";
// import { AppSidebar } from "@/components/app-sidebar";
// import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
// import { useThemeCustomizer } from "@/context/ThemeCustomizerContext";
// import { cn } from "@/lib/utils";
// import Loading from "@/app/loading";
// import { AdminHeader } from "@/components/header";
// import { AppHorizontalNav } from "@/components/AppHorizontalNav";

// export default function AdminLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const { settings } = useThemeCustomizer();
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) {
//     return <Loading />;
//   }

//   const isRtl = settings.direction === 'rtl';
//   const isHorizontalLayout = settings.layout === 'horizontal';

//   return (
//     <SidebarProvider>
//       {/* عرض الشريط الجانبي أو الأفقي بناءً على الإعدادات */}
      
      // {isHorizontalLayout ? (
      //   <AppHorizontalNav />
      // ) : (
      //   <AppSidebar 
      //     className={cn(
      //       "fixed top-0 h-full z-40",
      //       isRtl ? "right-0" : "left-0"
      //     )} 
      //   />
      // )}

//       {/* تعديل الحاوية الرئيسية لتناسب كلا الوضعين */}
//       <div
//         className={cn(
//           "transition-all duration-300 ease-in-out",
//           // في الوضع الأفقي، أضف حشو علوي فقط
//           isHorizontalLayout && "pt-16",
//           // في الوضع العمودي، استخدم SidebarInset
//           !isHorizontalLayout && (isRtl ? "mr-[var(--sidebar-width)]" : "ml-[var(--sidebar-width)]")
//         )}
//       >
//         {/* في الوضع الأفقي، نحتاج إلى Header منفصل داخل المحتوى */}
//         {/* {isHorizontalLayout && } */}
        
//         <main className="flex-grow p-4">{children}</main>
//       </div>
//     </SidebarProvider>
//   );
// }



















"use client";

import { useEffect, useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useThemeCustomizer } from "@/context/ThemeCustomizerContext";
import { cn } from "@/lib/utils";
import Loading from "@/app/loading"; 
import { AdminHeader } from "@/components/header/admin.header";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { settings } = useThemeCustomizer();
  const [isMounted, setIsMounted] = useState(false); 

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Loading />;
  }

  const isRtl = settings.direction === 'rtl';

  return (
    <SidebarProvider>
      <AppSidebar 
        className={cn(
          "fixed top-0 h-full z-40",
          isRtl ? "right-0" : "left-0"
        )} 
      />
      <SidebarInset 
        className={cn("overflow-x-hidden" ,
          isRtl ? "mr-" : ""
        )}
      >
        <AdminHeader />
        <main className="flex-grow p-4 bg-muted 
        
        ">{children}</main>
     {/* relative before:w-5 before:rounded-lb-3xl before:h-5 before:absolute before:top-0 before:right-0 before:bg-sidebar before: */}
      </SidebarInset>
    </SidebarProvider>
  );
}