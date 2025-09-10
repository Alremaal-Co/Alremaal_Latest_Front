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
import { Check } from "lucide-react";

// --- أيقونات الأعلام (تبقى كما هي) ---
const UsaFlagIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 15" {...props}><defs><rect id="a" width="21" height="15" rx="1.5" /></defs><g fill="none" fillRule="evenodd"><mask id="b" fill="#fff"><use xlinkHref="#a" /></mask><use fill="#FFF" xlinkHref="#a" /><path fill="#D00" d="M0 0h21v1.5H0zm0 3h21v1.5H0zm0 3h21v1.5H0zm0 3h21v1.5H0zm0 3h21v1.5H0z" mask="url(#b)" /><path fill="#002868" d="M0 0h10.5v9H0z" mask="url(#b)" /></g></svg> );
const SaudiArabiaFlagIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 15" {...props}><rect width="21" height="15" fill="#006c35" rx="1.5" /><text x="10.5" y="8" fill="#fff" fontFamily="Arial, sans-serif" fontSize="3.5" textAnchor="middle" fontWeight="bold">لَا إِلٰهَ إِلَّا الله</text><path fill="#fff" d="M4 11h13v.8H4z m2.5 -0.4 l8 -0.8 v-0.5 l-8 0.8 z" /></svg> );
const EuroFlagIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 15" {...props}><rect width="21" height="15" fill="#003399" rx="1.5" /><circle cx="10.5" cy="7.5" r="4" fill="none" stroke="#FFCC00" strokeWidth="1.5" /></svg> );
const GbpFlagIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 15" {...props}><rect width="21" height="15" fill="#00247d" rx="1.5"/><path fill="#fff" d="M0 6.5h21v2H0zM9.5 0h2v15h-2z"/><path stroke="#cf142b" strokeWidth=".7" d="M0 0l21 15m0-15L0 15" strokeDasharray="3.5,1.5"/></svg> );
const JpyFlagIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 15" {...props}><rect width="21" height="15" fill="#fff" stroke="#dcdcdc" strokeWidth=".5" rx="1.5"/><circle cx="10.5" cy="7.5" r="4" fill="#bc002d"/></svg> );
const EgpFlagIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 15" {...props}><rect width="21" height="15" fill="#000000" rx="1.5"/><rect width="21" height="10" fill="#FFFFFF"/><rect width="21" height="5" fill="#CE1126"/><g transform="translate(10.5, 7.5) scale(0.12)"><path d="M-20-40C-20-50-10-60 0-60S20-50 20-40L10-20H-10L-20-40z" fill="#C09E00"/><path d="M-30 20L-10 0H10L30 20L20 25L0 40L-20 25L-30 20z" fill="#C09E00"/></g></svg> );


// --- الخطاف المخصص (يبقى كما هو) ---
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


// --- التغيير رقم 1: تحديث هيكل بيانات العملات ---
const currencies = [
  { code: "USD", display: "USD", Flag: UsaFlagIcon },
  { code: "SAR", display: "ريال", Flag: SaudiArabiaFlagIcon }, // هنا التعديل
  { code: "EGP", display: "EGP", Flag: EgpFlagIcon },
  { code: "EUR", display: "EUR", Flag: EuroFlagIcon },
  { code: "GBP", display: "GBP", Flag: GbpFlagIcon },
  { code: "JPY", display: "JPY", Flag: JpyFlagIcon },
];

export function CurrencyDropdown() {
  const [selectedCurrencyCode, setSelectedCurrencyCode] = usePersistentState('selected-currency', 'USD');
  const selectedCurrency = currencies.find(c => c.code === selectedCurrencyCode) || currencies[0];

  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Change currency" className="flex h-9 w-9 items-center justify-center rounded-lg">
              {/* التغيير رقم 2: استخدام خاصية 'display' الجديدة للعرض */}
              <span className={`font-mono ${selectedCurrency.display === "ريال"  ?"text-2xl text-primary dark:text-white mb-2":"text-sm text-primary dark:text-white" }`}>{selectedCurrency.display}</span>
              {/* <span className="font-mono text-xl font-extrabold text-primary  ">
                 <span>ريال</span>
              </span> */}
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>تغيير العملة ({selectedCurrency.display})</p>
        </TooltipContent>
      </Tooltip>

      <DropdownMenuContent           
      showArrow={true} 
          align="center" 
          side="bottom"
          sideOffset={20}>
        {currencies.map((currency) => (
          <DropdownMenuItem
            key={currency.code}
            onClick={() => setSelectedCurrencyCode(currency.code)}
            className="flex cursor-pointer items-center justify-between gap-4"
          >
            <div className="flex items-center gap-2">
              <currency.Flag className="h-5 w-5 rounded-sm" />
              <span className="font-mono">{currency.code}</span>
            </div>
            {selectedCurrency.code === currency.code && (
              <Check className="h-4 w-4" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}