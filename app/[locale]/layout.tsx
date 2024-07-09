import { locales } from '@/i18n.config';
import type { Metadata } from 'next';

import '@/src/app/styles/antd.scss';
import '@/src/app/styles/globals.css';
import { unstable_setRequestLocale } from 'next-intl/server';

export const metadata: Metadata = {
	title: 'Next App | FSD',
	description: 'Generated Next App',
};

export function generateStaticParams() {
	return locales.map(locale => ({ locale }));
}

export default function LocaleLayout({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	unstable_setRequestLocale(locale);

	return (
		<html lang={locale}>
			<body>{children}</body>
		</html>
	);
}
