"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Check, Globe } from "lucide-react"; // استيراد أيقونة الكرة الأرضية

// --- أيقونات الأعلام (مع الإضافات الجديدة) ---
const UsaFlagIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 15" {...props}><defs><rect id="a" width="21" height="15" rx="1.5" /></defs><g fill="none" fillRule="evenodd"><mask id="b" fill="#fff"><use xlinkHref="#a" /></mask><use fill="#FFF" xlinkHref="#a" /><path fill="#D00" d="M0 0h21v1.5H0zm0 3h21v1.5H0zm0 3h21v1.5H0zm0 3h21v1.5H0zm0 3h21v1.5H0z" mask="url(#b)" /><path fill="#002868" d="M0 0h10.5v9H0z" mask="url(#b)" /></g></svg> );
const SaudiArabiaFlagIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 15" {...props}><rect width="21" height="15" fill="#006c35" rx="1.5" /><text x="10.5" y="8" fill="#fff" fontFamily="Arial, sans-serif" fontSize="3.5" textAnchor="middle" fontWeight="bold">لَا إِلٰهَ إِلَّا الله</text><path fill="#fff" d="M4 11h13v.8H4z m2.5 -0.4 l8 -0.8 v-0.5 l-8 0.8 z" /></svg> );
const EgpFlagIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 15" {...props}><rect width="21" height="15" fill="#000000" rx="1.5"/><rect width="21" height="10" fill="#FFFFFF"/><rect width="21" height="5" fill="#CE1126"/><g transform="translate(10.5, 7.5) scale(0.12)"><path d="M-20-40C-20-50-10-60 0-60S20-50 20-40L10-20H-10L-20-40z" fill="#C09E00"/><path d="M-30 20L-10 0H10L30 20L20 25L0 40L-20 25L-30 20z" fill="#C09E00"/></g></svg> );
const UaeFlagIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 15" {...props}><rect width="21" height="15" fill="#009e49" rx="1.5" /><rect width="21" height="10" fill="#fff" /><rect width="21" height="5" /><path fill="red" d="M0 0h5.25v15H0z" /></svg> );
const GbpFlagIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 15" {...props}><rect width="21" height="15" fill="#00247d" rx="1.5"/><path fill="#fff" d="M0 6.5h21v2H0zM9.5 0h2v15h-2z"/><path stroke="#cf142b" strokeWidth=".7" d="M0 0l21 15m0-15L0 15" strokeDasharray="3.5,1.5"/></svg> );
const CanadaFlagIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 15" {...props}><rect width="21" height="15" fill="#d00" rx="1.5" /><path fill="#fff" d="M5.25 0h10.5v15H5.25z" /><path fill="#d00" d="M10.5 3.23L12.08 6.4h1.92l-1.5 1.5.5 2.1L10.5 8.1l-2.5 1.9.5-2.1-1.5-1.5h1.92z" /></svg> );


// --- الخطاف المخصص لحفظ الحالة (يبقى كما هو) ---
function usePersistentState<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) { console.error(error); return initialValue; }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (error) { console.error(error); }
  }, [key, state]);

  return [state, setState];
}


// --- هيكل بيانات الدول المحدّث ---
const countries = [
  { code: "USA", name: "USA", Flag: UsaFlagIcon },
  { code: "KSA", name: "KSA", Flag: SaudiArabiaFlagIcon },
  { code: "EGY", name: "EGY", Flag: EgpFlagIcon },
  { code: "UAE", name: "UAE", Flag: UaeFlagIcon },
  { code: "GBR", name: "UK", Flag: GbpFlagIcon },
  { code: "CAN", name: "Canada", Flag: CanadaFlagIcon },
];

export function CountryDropdown() {
  const [selectedCountryCode, setSelectedCountryCode] = usePersistentState('selected-country', 'USA');
  const selectedCountry = countries.find(c => c.code === selectedCountryCode) || countries[0];

  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Change country">
              <Globe className="h-5 w-5 text-primary dark:text-white" />
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>تغيير الدولة ({selectedCountry.name})</p>
        </TooltipContent>
      </Tooltip>

      <DropdownMenuContent           
          showArrow={true} 
          align="center" 
          side="bottom"
          sideOffset={20}>
        {countries.map((country) => (
          <DropdownMenuItem
            key={country.code}
            onClick={() => setSelectedCountryCode(country.code)}
            className="flex cursor-pointer items-center justify-between gap-4"
          >
            <div className="flex items-center gap-2">
              <country.Flag className="h-5 w-5 rounded-sm" />
              <span>{country.name}</span>
            </div>
            {selectedCountry.code === country.code && (
              <Check className="h-4 w-4" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}