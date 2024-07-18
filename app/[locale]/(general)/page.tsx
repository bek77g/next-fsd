'use client';

import { useAuth } from '@/src/shared/hooks';
import { logout } from '@/src/shared/lib/auth';
import { Button } from 'antd';
import { useTranslations } from 'next-intl';

export default function Home({ params: { locale } }) {
	const t = useTranslations('general');
	const { isLoggedIn, user } = useAuth();

	const onLogout = async () => {
		await logout();
	};

	return (
		<div className='container text-center'>
			{t('appName')} <br />
			{JSON.stringify(user)}
			{isLoggedIn ? (
				<form action={onLogout}>
					<Button htmlType='submit'>Выйти</Button>
				</form>
			) : null}
		</div>
	);
}
