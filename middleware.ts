import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, localeFromPathname } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === `/${defaultLocale}` || pathname.startsWith(`/${defaultLocale}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
    return NextResponse.redirect(url);
  }

  const headers = new Headers(request.headers);
  headers.set("x-site-locale", localeFromPathname(pathname));
  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: [
    "/((?!api(?:/|$)|_next/static|_next/image|images(?:/|$)|sitemap(?:\\.xml)?(?:/|$)|robots(?:\\.txt)?(?:/|$)|manifest(?:\\.webmanifest)?(?:/|$)|icon(?:\\.|/|$)|opengraph-image(?:\\.|/|$)).*)",
  ],
};
