import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type LocaleType } from './i18n.config';

export default getRequestConfig(async ({ locale }) => {
	if (!locales.includes(locale as LocaleType)) {
		return notFound();
	}

	return {
		messages: (await import(`./public/locales/${locale}.json`)).default,
	};
});
