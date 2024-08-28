'use client';
import { IUser, IUserToken } from '@/src/shared/lib/auth';
import { useSession } from 'next-auth/react';

interface AuthHook {
	user: IUser;
	token: IUserToken;
	isLoggedIn: boolean;
	sessionStatus: 'unauthenticated' | 'loading' | 'authenticated';
}

export const useAuth = (): AuthHook => {
	const { data: session, status: sessionStatus } = useSession();

	const isLoggedIn: boolean = sessionStatus === 'authenticated';
	const isLoadingSession: boolean = sessionStatus === 'loading';

	const user: Record<string, any> | null = session?.user || null;
	const token: Record<string, any> | null = session?.token || null;

	return { user, token, isLoggedIn, isLoadingSession, sessionStatus };
};
