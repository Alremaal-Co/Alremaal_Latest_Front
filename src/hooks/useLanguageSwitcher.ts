"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
// الآن سيتمكن TypeScript من العثور على هذا المسار بنجاح
import { useEffect } from "react";

export function useLanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (newLocale: 'ar' | 'en') => {
    router.push(pathname, { locale: newLocale });
  };

  useEffect(() => {
    const newDirection = locale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = newDirection;
  }, [locale]);

  return {
    currentLocale: locale,
    changeLanguage,
  };
}