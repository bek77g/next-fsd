import { LoginPage } from '@/src/pages/shared/login';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Login page',
	description: 'Auth',
};

export default async function Login() {
	return <LoginPage />;
}
