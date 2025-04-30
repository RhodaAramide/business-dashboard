import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get('dashboard-auth')?.value;

  // Allow access to static files, API, or login page
  if (
    PUBLIC_FILE.test(url.pathname) ||
    url.pathname.startsWith('/api') ||
    url.pathname.startsWith('/login')
  ) {
    return NextResponse.next();
  }

  // If not authenticated, redirect to login
  if (!token) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
