import { LocaleSwitcher } from '@/src/shared/ui';
import { HeaderLinks, HeaderProfile } from '@/src/shared/ui/layout/header/ui';
import { SiteLogo } from '@/src/shared/ui/site-logo';

export function Header() {
	return (
		<header className='py-[16px]'>
			<div className='container'>
				<nav className='flex justify-between gap-6'>
					<SiteLogo />
					<HeaderLinks />
					<div className='max-w-[330px] w-full flex justify-between items-center'>
						<HeaderProfile />
						<LocaleSwitcher />
					</div>
				</nav>
			</div>
		</header>
	);
}
