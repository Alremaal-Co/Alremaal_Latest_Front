import { getRequestConfig } from "next-intl/server";
import {routing } from "./routing";
import { Locale } from "./config/i18n";
import { Languages } from "@/core/enum/general";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (
      await (locale === 'ar'
        ? import(`../../public/locales/ar.json`)
        : import(`../../public/locales/${locale}.json`))
    ).default

    
    // messages: (await import(`../public/locales/${locale}.json`)).default,
    // messages: (await import(`../public/config/locales/${locale}.json`)).default,
  };
});



