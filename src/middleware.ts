import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Read cookies set on login
  const userCookie = request.cookies.get("user")?.value;
  const onboardingCompleted =
    request.cookies.get("onboardingCompleted")?.value === "true";

  // Allow public routes
  if (pathname.startsWith("/login") || pathname.startsWith("/sign-up")) {
    return NextResponse.next();
  }
  const dashboardUrl = new URL("/dashboard", request.url);
  // Allow onboarding page
  if (pathname.startsWith("/onboarding") && onboardingCompleted) {
    return NextResponse.redirect(dashboardUrl);
  }

  // Allow onboarding page
  if (pathname.startsWith("/onboarding")) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", request.url);
  const onboardingUrl = new URL("/onboarding", request.url);

  if (!userCookie) return NextResponse.redirect(loginUrl);
  if (!onboardingCompleted) return NextResponse.redirect(onboardingUrl);

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4)$).*)",
  ],
};
