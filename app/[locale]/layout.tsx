import { locales } from '@/i18n.config';
import { AppProvider } from '@/src/app/providers';
import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';

import '@/src/app/styles/antd.scss';
import '@/src/app/styles/globals.css';

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
			<AppProvider locale={locale}>
				<body>{children}</body>
			</AppProvider>
		</html>
	);
}
