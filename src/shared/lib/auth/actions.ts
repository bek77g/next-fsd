'use server';

import { AuthError } from 'next-auth';
import { cookies } from 'next/headers';
import { signIn, signOut } from './auth';

const defaultValues = {
	pin: '',
	password: '',
	recaptcha: '',
};

export async function login(formData: FormData) {
	try {
		await signIn('credentials', {
			redirect: false,
			...formData,
		});

		return {
			message: 'success',
			errors: {},
		};
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return {
						message: 'credentials error',
						errors: {
							...defaultValues,
							credentials: 'incorrect email or password',
						},
					};
				default:
					return {
						message: 'unknown error',
						errors: {
							...defaultValues,
							unknown: 'unknown error',
						},
					};
			}
		}
		throw error;
	}
}

export async function logout() {
	await signOut();
	await cookies().delete(process.env.NEXT_AUTH_TOKEN_TYPE);
	await cookies().delete(process.env.NEXT_AUTH_TOKEN_ACCESS);
}
