'use client';

import { useAuth } from '@/src/shared/hooks';
import { Loader, SiteLogo } from '@/src/shared/ui';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function AuthLayout({ children }: PropsWithChildren<unknown>) {
	const t = useTranslations('general');
	const locale = useLocale();
	const { isLoggedIn, isLoadingSession } = useAuth();
	const router = useRouter();

	return (
		<div className='bg-[linear-gradient(90deg, #f3f2f0 50%, #ffffff 50%)]'>
			<div className='relative grid grid-cols-1 md:grid-cols-2 gap justify-between items-start container h-full'>
				<aside className='sticky top-0 h-fit animate-fade animate-once'>
					<header className='w-fit mt-[20px]'>
						<SiteLogo />
					</header>
					<div className='h-[calc(100vh-90px)] flex flex-col justify-around'>
						<h2
							className='text-[32px] font-bold leading-10'
							dangerouslySetInnerHTML={{ __html: t.raw('greeting') }}
						/>
					</div>
				</aside>
				<main className='relative z-10 flex justify-center w-screen md:w-full items-center h-full bg-primary-white py-0 md:py-5 ml-[-20px] md:ml-auto'>
					{isLoadingSession ? <Loader /> : children}
				</main>
			</div>
		</div>
	);
}
