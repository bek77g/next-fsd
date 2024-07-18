import { RegisterPage } from '@/src/pages/shared/register';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Register page',
	description: 'Auth',
};

export default async function Register() {
	return <RegisterPage />;
}
