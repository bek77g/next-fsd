import { getLocale, getTranslations } from 'next-intl/server';

import { Link } from '@/i18n.config';
import { ROUTES } from '@/src/shared/constants';

export async function NotFoundPage() {
	const t = await getTranslations();
	const locale = await getLocale();

	return (
		<div className='flex min-h-screen flex-col items-center justify-center bg-primary-white px-6 py-20 text-primary-dark animate-fade-down animate-once '>
			<h2 className='text-[48px] text-red font-semibold'>404</h2>
			<h3 className='text-[22px] mt-2 mb-16 text-center'>
				{t('notFound.text')}
			</h3>
			<Link
				href={ROUTES.home}
				className='rounded py-[13px] px-[50px] border border-primary text-primary mt-8 hover:bg-primary hover:text-primary-white'>
				{t('actions.back')}
			</Link>
		</div>
	);
}
