import { LocaleSwitcher } from '@/src/shared/ui';
import { HeaderLinks } from '@/src/shared/ui/layout/header/ui';
import { SiteLogo } from '@/src/shared/ui/site-logo';
import { ReactNode } from 'react';

export function Header({ slot }: { slot?: ReactNode }) {
	return (
		<header className='py-[16px] bg-primary-white sticky top-0 z-20'>
			<div className='container'>
				<nav className='flex justify-between gap-6'>
					<div className='max-w-[272px] w-full'>
						<SiteLogo />
					</div>
					<HeaderLinks />
					<div className='max-w-[272px] w-full flex justify-between items-center'>
						{slot && slot}
						<LocaleSwitcher />
					</div>
				</nav>
			</div>
		</header>
	);
}
