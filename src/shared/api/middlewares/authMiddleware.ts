import { sendErrorResponse } from '@/src/shared/api/helpers';
import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';

export async function authMiddleware(req: NextRequest, next) {
	const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
	req.user = token || null;

	if (!token) {
		return sendErrorResponse({
			statusCode: 401,
			message: 'Unauthorized',
		});
	}

	next();
}
