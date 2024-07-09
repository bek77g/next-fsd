import { AntdProvider } from '@/src/app/providers';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

interface AppProviderProps {
	children: React.ReactNode;
	locale: string;
}

export function AppProvider({ children, locale }: AppProviderProps) {
	const messages = await getMessages();

	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			<AntdProvider>{children}</AntdProvider>
		</NextIntlClientProvider>
	);
}
