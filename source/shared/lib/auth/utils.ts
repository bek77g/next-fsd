import { GetTokenParams, getToken } from 'next-auth/jwt';

export const getParsedToken = async (params: GetTokenParams<false>) => {
	const isDevelopment = (process.env.NODE_ENV || '').toLowerCase() === 'development';

	return await getToken({
		...params,
		secret: process.env.AUTH_SECRET,
		cookieName: isDevelopment ? 'authjs.session-token' : '__Secure-authjs.session-token',
	});
};
