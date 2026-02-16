import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const response = NextResponse.next();

    // Development Redirects: Redirect /blog to /insights
    const url = request.nextUrl.clone();
    if (url.pathname === '/blog' || url.pathname.startsWith('/blog/')) {
        url.pathname = url.pathname.replace(/^\/blog/, '/insights');
        return NextResponse.redirect(url);
    }

    // Security Headers
    // HSTS (HTTP Strict Transport Security) - Force HTTPS for 1 year
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

    // Prevent Clickjacking - SAMEORIGIN allows embedding on same domain (needed? usually safer to start with DENY or SAMEORIGIN)
    // Using SAMEORIGIN as safest default to not break internal iframes
    response.headers.set('X-Frame-Options', 'SAMEORIGIN');

    // Prevent MIME Sniffing
    response.headers.set('X-Content-Type-Options', 'nosniff');

    // Referrer Policy - Don't leak full URLs to other sites
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    // Permissions Policy (Optional but good) - Disable risky features by default
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
