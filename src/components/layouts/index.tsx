import Loading from '@/app/loading'
import { Directions, Languages } from '@/core/enum/general'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import React, { Suspense } from 'react'
import ReduxProvider from './Provider'
import { ThemeCustomizerProvider } from '@/context/ThemeCustomizerContext'
import { Cairo } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Toaster } from '../ui/sonner'

const cairoFont = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export interface BaseLayout {
  locale: string
  children: React.ReactNode
}

export default async function BaseLayout({locale , children}:BaseLayout) {
  const messages = await getMessages();

  return (
    <html 
      lang={locale}
      suppressHydrationWarning 
    >
      <head>
      </head>
      <body className={cn("min-h-screen font-sans max-w-screen", cairoFont.className)}>
        <ThemeCustomizerProvider locale={locale}>
          <NextIntlClientProvider messages={messages}>
        <Toaster position="top-center" richColors closeButton dir="auto"/>

            <ReduxProvider>{children}</ReduxProvider>
          </NextIntlClientProvider>
        </ThemeCustomizerProvider>
      </body>
    </html>
  )
}












// import Loading from '@/app/loading'
// import { Directions, Languages } from '@/core/enum/general'
// import { NextIntlClientProvider } from 'next-intl'
// import { getMessages } from 'next-intl/server'
// import React, { Suspense } from 'react'
// import ReduxProvider from './Provider'

// import { ThemeCustomizerProvider } from '@/context/ThemeCustomizerContext'

// const setInitialTheme = `
// (function() {
//   try {
//     const settingsString = localStorage.getItem('theme-settings');
//     if (!settingsString) return;
//     const settings = JSON.parse(settingsString);
//     const root = document.documentElement;
//     if (settings.primaryColor) root.style.setProperty('--primary', settings.primaryColor);
//     if (settings.mode) {
//       if (settings.mode === 'dark') root.classList.add('dark');
//       else if (settings.mode === 'light') root.classList.remove('dark');
//     }
//     if (settings.skin) root.setAttribute('data-skin', settings.skin);
//     if (settings.layout) root.setAttribute('data-layout', settings.layout);
//     if (settings.contentWidth) root.setAttribute('data-content-width', settings.contentWidth);
//     if (settings.direction) root.dir = settings.direction;
//     if (settings.fontSize) root.style.setProperty('--base-font-size', settings.fontSize + 'px');
//   } catch (e) {}
// })();
// `;

// export interface BaseLayout {
//   locale: string
//   children: React.ReactNode
// }
// export default async function BaseLayout({locale , children}:BaseLayout) {
//   const messages = await getMessages();

//   return (
//     <html 
//       lang={locale}
//       suppressHydrationWarning 
//     >
//       <head>
//         <Suspense fallback={<Loading />}>
//           <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&display=swap" rel="stylesheet" />
//         </Suspense>
//       </head>
//       <body className="min-h-screen font-sans">
//          <script
//           dangerouslySetInnerHTML={{
//             __html: setInitialTheme,
//           }}
//         />
//         <ThemeCustomizerProvider locale={locale}>
//           <NextIntlClientProvider messages={messages}>
//             <ReduxProvider>{children}</ReduxProvider>
//           </NextIntlClientProvider>
//         </ThemeCustomizerProvider>
//       </body>
//     </html>
//   )
// }