import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublic = path === "/login" || path === "/signup";

  if (isPublic) {
    return NextResponse.next();
  }

  const token = request.cookies.get("token")?.value || "";

  if (!token) {
    const url = new URL("/login", request.nextUrl);
    return NextResponse.redirect(url);
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/", "/login", "/signup", "/dashboard", "/connections"],
};
