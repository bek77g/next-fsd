import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './i18n.config';

export default createMiddleware({
	locales,
	defaultLocale,
	localeDetection: false,
});

export const config = {
	matcher: ['/', '/(ru|ky)/:path*'],
};
