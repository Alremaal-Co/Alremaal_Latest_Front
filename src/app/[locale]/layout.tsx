import type { Metadata } from "next";

// import "../../../public/css/animate/index.css"
// import '../../..public/icons/fontawesome-free-6.6.0-web/css/all.css';
// import '../../../public/icons/fontawesome-free-6.6.0-web/css/all.min.css'

import { ReactNode, Suspense } from "react";
import { routing } from "../../i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import BaseLayout from "@/components/layouts";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>
};

// export function generateStaticParams() {
//   return routing.locales.map((locale) => ({locale}));
// }

export async function generateMetadata({params }: Omit<Props, 'children'>) {
  const locale = (await params).locale

  const t = await getTranslations({locale });
  return {
    title: t('AlRemalRealeState')
  };
}




export default async function LocaleLayout({ children , params}: Props) {
  const locale = (await params).locale

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  

  // const locale = params.locale as Locale;

  // // Enable static rendering
  setRequestLocale(locale);

  return <BaseLayout locale={locale}>{children}</BaseLayout>;
}
