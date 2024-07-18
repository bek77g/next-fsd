import { defaultLocale } from '@/i18n.config';
import { AntdProvider } from '@/src/app/providers';
import { AuthProvider } from '@/src/app/providers/auth-provider';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ReactNode } from 'react';

interface AppProviderProps {
	children: ReactNode;
	locale?: string;
}

export async function AppProvider({
	children,
	locale = defaultLocale,
}: AppProviderProps) {
	const messages = await getMessages();

	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			<AuthProvider>
				<AntdProvider>{children}</AntdProvider>
			</AuthProvider>
		</NextIntlClientProvider>
	);
}
