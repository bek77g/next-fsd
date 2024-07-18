import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type LocaleType } from './i18n.config';

const files = ['common', 'auth', 'routes'];

export default getRequestConfig(async ({ locale }) => {
	if (!locales.includes(locale as LocaleType)) {
		return notFound();
	}

	return {
		messages: {
			...(await import(`./src/shared/locales/${locale}/common.json`)).default,
			...(await import(`./src/shared/locales/${locale}/auth.json`)).default,
			...(await import(`./src/shared/locales/${locale}/routes.json`)).default,
		},
	};
});
