'use client';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { ROUTES } from '@/source/shared/constants';
import { cookies } from '@/source/shared/lib/api';

export function AuthCheck() {
	const { data: session } = useSession();
	const [prevSessionState, setPrevSessionState] = useState({});
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		const hasExpires = session?.expires;

		if (session && !hasExpires) {
			router.push(`/api/auth${ROUTES.logout}`);
		}

		if (session && prevSessionState) {
			const currentSession = { ...session.user, ...session.info };

			if (JSON.stringify(currentSession) !== JSON.stringify(prevSessionState)) {
				router.refresh();
			}

			setPrevSessionState({ ...session.user, ...session.info });
		}
	}, [router, session]);

	useEffect(() => {
		const tokenKeyName = process.env.NEXT_AUTH_TOKEN_ACCESS;

		if (session) {
			cookies.client().set(tokenKeyName, session?.token.access_token || '');
		} else {
			cookies.client().remove(tokenKeyName);
		}
	}, [session, pathname]);

	return null;
}
