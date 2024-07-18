import { IUserCredentials, IUserState } from '@/src/entities/shared/user/model';
import { $api, cookies } from '@/src/shared/lib/api';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { authConfig } from './auth.config';

async function getUser(
	pin: string,
	password: string,
	recaptchaToken: string
): Promise<IUserState | null> {
	try {
		const { data, error, message } = await $api.post(
			'https://mugalim.edu.gov.kg/mugalim/api/user/login',
			{
				login: pin,
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

async function checkUser(): Promise<any> {
	try {
		const authorizationType = cookies.get(process.env.NEXT_AUTH_TOKEN_TYPE);
		const authorizationAccess = cookies.get(process.env.NEXT_AUTH_TOKEN_ACCESS);

		if (!authorizationType || !authorizationAccess) {
			return null;
		}

		const { data, error, message } = await $api.post(
			'https://mugalim.edu.gov.kg/mugalim/api/user/check',
			{},
			{
				headers: {
					Authorization: `${authorizationType} ${authorizationAccess}`,
				},
			}
		);

		const {
			authState: { id, s, n, p, r, idUd, exp },
			tokenType,
			token,
			expiresIn,
		} = data;

		const sessionData = {
			user: { id: id, name: n, surname: s, patronymic: p, idUd: idUd, role: r },
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
						pin: z.string().min(14).max(14),
						password: z.string().min(6),
						recaptcha: z.string(),
					})
					.safeParse(credentials);

				if (!parsedCredentials.success) return null;

				const { pin, password, recaptcha } =
					parsedCredentials.data as IUserCredentials;

				const userData = await getUser(pin, password, recaptcha);

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
