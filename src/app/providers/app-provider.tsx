import { AntdProvider } from '@/src/app/providers';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ReactNode } from 'react';

interface AppProviderProps {
	children: ReactNode;
	locale: string;
}

export async function AppProvider({ children, locale }: AppProviderProps) {
	const messages = await getMessages();

	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			<AntdProvider>{children}</AntdProvider>
		</NextIntlClientProvider>
	);
}
