import { Footer, Header } from '@/source/shared/ui/layout';
import type { PropsWithChildren } from 'react';

export default function GeneralLayout({
	children,
}: PropsWithChildren<unknown>) {
	return (
		<>
			<Header />
			<main className='animate-fade animate-once '>{children}</main>
			<Footer />
		</>
	);
}
