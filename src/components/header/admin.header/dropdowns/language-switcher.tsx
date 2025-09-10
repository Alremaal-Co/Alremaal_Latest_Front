"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLanguageSwitcher } from "@/hooks/useLanguageSwitcher";

// مكون SVG محسن وأكثر وضوحًا لعلم الولايات المتحدة
const UsaFlagIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 15" {...props}>
    <defs>
      <rect id="a" width="21" height="15" rx="1.5" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use fill="#FFF" xlinkHref="#a" />
      <path
        fill="#D00"
        d="M0 0h21v1.5H0zm0 3h21v1.5H0zm0 3h21v1.5H0zm0 3h21v1.5H0zm0 3h21v1.5H0z"
        mask="url(#b)"
      />
      <path fill="#002868" d="M0 0h10.5v9H0z" mask="url(#b)" />
    </g>
  </svg>
);

// مكون SVG محسن وأكثر وضوحًا لعلم السعودية
const SaudiArabiaFlagIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 15" {...props}>
    <rect width="21" height="15" fill="#006c35" rx="1.5" />
    {/* تمثيل مبسط وواضح للشهادة والسيف */}
    <text
      x="10.5"
      y="8"
      fill="#fff"
      fontFamily="Arial, sans-serif"
      fontSize="3.5"
      textAnchor="middle"
      fontWeight="bold"
    >
      لَا إِلٰهَ إِلَّا الله
    </text>
    <path
      fill="#fff"
      d="M4 11h13v.8H4z m2.5 -0.4 l8 -0.8 v-0.5 l-8 0.8 z" // سيف مبسط
    />
  </svg>
);

export function LanguageSwitcher() {
  const { currentLocale, changeLanguage } = useLanguageSwitcher();

  const toggleLanguage = () => {
    const nextLocale = currentLocale === 'en' ? 'ar' : 'en';
    changeLanguage(nextLocale);
  };

  // تحديد محتوى التلميح بناءً على اللغة الحالية
  const tooltipContent = currentLocale === 'en' ? 'العربية' : 'English';

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            aria-label={`Switch to ${tooltipContent}`}
          >
            {currentLocale === 'en' ? (
              <UsaFlagIcon className="h-5 w-5 rounded-sm" />
            ) : (
              <SaudiArabiaFlagIcon className="h-5 w-5 rounded-sm" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipContent}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}










// "use client";

// import { Button } from "@/components/ui/button";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
// import { useLanguageSwitcher } from "@/hooks/useLanguageSwitcher";
// import { Check, Languages } from "lucide-react";

// export function LanguageSwitcher() {
//   const { currentLocale, changeLanguage } = useLanguageSwitcher();

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" size="icon">
//           <Languages className="h-[1.2rem] w-[1.2rem]" />
//           <span className="sr-only">Change language</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem onClick={() => changeLanguage('en')} className="flex justify-between">
//           English {currentLocale === 'en' && <Check className="h-4 w-4" />}
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => changeLanguage('ar')} className="flex justify-between">
//           العربية {currentLocale === 'ar' && <Check className="h-4 w-4" />}
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }