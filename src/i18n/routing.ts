import { Languages } from "@/core/enum/general";
import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: [Languages.ARABIC, Languages.ENGLISH],
  defaultLocale: Languages.ARABIC,
  // pathnames: {
  //   '/': '/',
  //   '/pathnames': {
  //     en: '/pathnames',
  //     de: '/pfadnamen'
  //   }
});


export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
  
// export type Pathnames = keyof typeof routing.pathnames;

