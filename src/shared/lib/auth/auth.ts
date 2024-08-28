import { $api, cookies } from '@/src/shared/lib/api';
import { IUserState } from '@/src/shared/lib/auth/types';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { authConfig } from './auth.config';

async function getUser(
	login: string,
	password: string,
	recaptchaToken: string
): Promise<IUserState | null> {
	try {
		const { data, error, message } = await $api.post(
			'https://example.com/api/user/login',
			{
				login: login,
				password: password,
				recaptchaToken: recaptchaToken,
			}
		);

		const {
			authState: { id, s, n, p, r, idUd, exp },
			tokenType,
			token,
			expiresIn,
		} = data;

		const sessionData = {
			user: { id, name: n, surname: s, patronymic: p, idUd, role: r },
			token: {
				type: tokenType,
				access_token: token,
				expires_in: expiresIn,
				exp_timestamp: exp,
			},
		};

		return sessionData;
	} catch (error) {
		console.log('Login error:');
		console.log(error);

		return null;
	}
}

async function getUserMock(
	login: string,
	password: string,
	recaptchaToken: string
): Promise<IUserState | null> {
	try {
		// Mock response example:
		if (password !== 'qwerty') {
			throw new Error('Invalid password');
		}

		const data = {
			authState: {
				id: 1,
				s: 'Zheenkulo',
				n: 'Beknur',
				p: 'Zheenkulovich',
				r: 'admin',
				idUd: 1,
				exp: Date.now() + 60 * 60 * 1000,
			},
			tokenType: 'bearer',
			token: '1234567890',
			expiresIn: 60 * 60,
		};

		const {
			authState: { id, s, n, p, r, idUd, exp },
			tokenType,
			token,
			expiresIn,
		} = data;

		const sessionData = {
			user: { id, name: n, surname: s, patronymic: p, idUd, role: r },
			token: {
				type: tokenType,
				access_token: token,
				expires_in: expiresIn,
				exp_timestamp: exp,
			},
		};

		return sessionData;
	} catch (error) {
		console.log('Login error:');
		console.log(error);

		return null;
	}
}

export const {
	auth,
	signIn,
	signOut,
	handlers: { GET, POST },
} = NextAuth({
	...authConfig,
	providers: [
		Credentials({
			async authorize(credentials) {
				const parsedCredentials = z
					.object({
						login: z.string().min(14).max(14),
						password: z.string().min(6),
						recaptcha: z.string(),
					})
					.safeParse(credentials);

				if (!parsedCredentials.success) return null;

				const { login, password, recaptcha } = parsedCredentials.data;

				const userData = await getUserMock(login, password, recaptcha);

				if (!userData) return null;

				cookies.set(process.env.NEXT_AUTH_TOKEN_TYPE, userData.token.type);
				cookies.set(
					process.env.NEXT_AUTH_TOKEN_ACCESS,
					userData.token.access_token
				);

				return userData;
			},
		}),
	],
	callbacks: {
		jwt({ token, user }) {
			if (!user) return token;
			return { ...token, ...user };
		},
		session({ session, token }) {
			session.user = token.user;
			session.token = token.token;
			session.expires = new Date(token.token.exp_timestamp).toISOString();

			return session;
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
});
