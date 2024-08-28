import { NotFoundPage } from '@/src/views/shared/not-found';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Not Found',
	description: '',
};

export default function NotFound() {
	return <NotFoundPage />;
}
