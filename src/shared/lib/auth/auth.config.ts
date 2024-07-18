import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
	pages: {
		error: '/',
		signIn: '/login',
		signOut: '/logout',
	},
	providers: [],
} satisfies NextAuthConfig;
