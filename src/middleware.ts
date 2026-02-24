import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const cookie = req.cookies.get("admin_session");
  const isAuthenticated = cookie?.value === "authenticated";

  if (!isAuthenticated) {
    const loginUrl = new URL("/admin", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
