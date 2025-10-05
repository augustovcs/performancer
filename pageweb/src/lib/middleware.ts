import { NextRequest, NextResponse } from "next/server";

export function middleWare(req: NextRequest) {
  const token = req.cookies.get(`access_token`)?.value

  const protectRoutes = ['/dashboard', '/board', '/notes', '/settings']

  if (protectRoutes.some((router) => req.nextUrl.pathname.startsWith(router))) {
      if (!token) {
        return NextResponse.redirect(new URL('/login', req.url))
      }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/board/:path*', '/notes/:path*', '/settings/:path*' ]
}
