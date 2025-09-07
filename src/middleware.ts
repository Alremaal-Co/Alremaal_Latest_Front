// import createMiddleware from 'next-intl/middleware';
// import { routing } from './i18n/routing';

// export default createMiddleware(routing);

// export const config = {
//   matcher: [
//     // Enable a redirect to a matching locale at the root
//     '/',

//     // Set a cookie to remember the previous locale for
//     // all requests that have a locale prefix
//     '/(de|en)/:path*',

//     // Enable redirects that add missing locales
//     // (e.g. `/pathnames` -> `/en/pathnames`)
//     '/((?!_next|_vercel|.*\\..*).*)'
//   ]
// };











import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { Languages } from './core/enum/general';
import { i18n } from './i18n/config/i18n';

const nextIntlMiddleware = createMiddleware({
  locales: i18n.locales,
  defaultLocale: i18n.defaultLocale,
  localePrefix: 'always',
  localeDetection: true,
  
});

export default function middleware(req: NextRequest): NextResponse {
  const { pathname } = req.nextUrl;
  const excludedPaths = [
    '/api',
    '/_next',
    '/favicon.ico',
    '/robots.txt',
    '/sitemap.xml',
    'manifest',
    '/assets',
    '/not-found',
  ];

  const isExcluded = excludedPaths.some((path) => pathname.startsWith(path));

  if (isExcluded) {
    return NextResponse.next();
  }

  const locale = pathname.split('/')[1];

  if (!locale || (locale !== Languages.ARABIC && locale !== Languages.ENGLISH)) {
    const url = new URL(req.nextUrl);
    url.pathname = `/${Languages.ARABIC}${pathname === '/' ? '' : pathname}`;
    return NextResponse.redirect(url);
  }

  const response = nextIntlMiddleware(req);
  response.cookies.set('NEXT_LOCALE', locale, { path: '/' });

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next|favicon.ico|robots.txt|sitemap.xml|assets).*)',
  ],
};
