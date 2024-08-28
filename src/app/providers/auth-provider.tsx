import { AuthCheck } from '@/src/shared/utils/components';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

export function AuthProvider({ children }: { children: ReactNode }) {
	return (
		<SessionProvider refetchOnWindowFocus refetchWhenOffline>
			<AuthCheck />
			{children}
		</SessionProvider>
	);
}
