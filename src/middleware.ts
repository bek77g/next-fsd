import { defaultLocale, locales, LocaleType } from '@/i18n.config';
import { getToken } from 'next-auth/jwt';
import createMiddleware from 'next-intl/middleware';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
	locales,
	defaultLocale,
	localeDetection: false,
});

export default async function middleware(
	request: NextRequest,
	next: NextFetchEvent
) {
	const pathname = request.nextUrl.pathname;
	const requestLocale =
		pathname
			.split('/')
			.find(locale => locales.includes(locale as LocaleType)) || defaultLocale;

	const storedLocale = cookies().get('NEXT_LOCALE')?.value;

	const userToken = await getToken({
		req: request,
		secret: process.env.NEXTAUTH_SECRET,
	});

	if (
		pathname.startsWith('/api') ||
		pathname.startsWith('/_next') ||
		pathname.includes('.')
	) {
		return NextResponse.next();
	}

	const isAuthPathWithLocale = locales.some(
		locale =>
			pathname.startsWith(`/${locale}/login`) ||
			pathname.startsWith(`/${locale}/register`)
	);

	//Commented conditions for strict authenticate
	// if (!isAuthPathWithLocale && !userToken) {
	// 	const url = new URL(`/${requestLocale || storedLocale}/login`, request.url);
	// 	url.searchParams.set('callbackUrl', encodeURI(request.url));
	// 	return NextResponse.redirect(url);
	// }
	// if (isAuthPathWithLocale && userToken) {
	// 	return NextResponse.redirect(
	// 		new URL(`/${requestLocale || storedLocale}`, request.url)
	// 	);
	// }

	return intlMiddleware(request);
}

export const config = {
	matcher: ['/', '/(ru|ky)/:path*'],
};
