import { defaultLocale, locales } from '@/i18n.config';
import { AppProvider } from '@/src/app/providers';
import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

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

	const storedLocale = cookies().get('NEXT_LOCALE');

	if (!locales.includes(locale as LocaleType)) {
		return redirect(`/${storedLocale || defaultLocale}`);
	}

	return (
		<html lang={locale}>
			<head>
				<script
					defer
					type='text/javascript'
					src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
				/>
			</head>
			<AppProvider locale={locale}>
				<body className='text-primary-dark bg-second-white'>{children}</body>
			</AppProvider>
		</html>
	);
}
