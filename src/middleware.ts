import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const role = request.cookies

    switch (role.get('user')?.value) {
        case 'admin':
            return NextResponse.rewrite(new URL('/administrator', request.url))
        case 'distributor':
            return NextResponse.rewrite(new URL('/distributor', request.url))
        case 'sto':
            return NextResponse.rewrite(new URL('/sto', request.url))
        default:
            return NextResponse.rewrite(new URL('/', request.url))
    }
}

export const config = {
    matcher: ['/administrator', '/distributor', '/sto'],
}
