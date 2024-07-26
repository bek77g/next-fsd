import { Link } from '@/i18n.config';
import { ROUTES } from '@/src/shared/constants';
import {
	BagIcon,
	BellIcon,
	HomeIcon,
	StarBadgeIcon,
} from '@/src/shared/ui/icons';
import clsx from 'clsx';
import { getLocale, getTranslations } from 'next-intl/server';
import { headers } from 'next/headers';

export async function HeaderLinks() {
	const t = await getTranslations('routes');
	const locale = await getLocale();
	const headersList = headers();
	const pathname = headersList.get('referer')
		? new URL(headersList.get('referer')).pathname
		: `/${locale}`;
	const withoutLocalePathname = pathname.replace(`/${locale}`, '/');

	const links: { title: string; icon: string; href: string }[] = [
		{
			title: t('home'),
			icon: HomeIcon,
			href: ROUTES.home,
		},
		{
			title: t('vacancies'),
			icon: BagIcon,
			href: ROUTES.vacancies,
		},
		{
			title: t('contests'),
			icon: StarBadgeIcon,
			href: ROUTES.contests,
		},
		{
			title: t('notifications'),
			icon: BellIcon,
			href: ROUTES.notifications,
		},
	];

	const linkClassName = (href: string) =>
		clsx(
			'transition-all stroke-second-dark grid place-items-center gap-[8px] relative duration-300 before:transition-all before:duration-300 before:absolute before:content-[""] before:h-[2px] before:bg-primary before:top-[106%] before:left-1/2 before:-translate-x-1/2 hover:before:w-full hover:stroke-primary',
			withoutLocalePathname === href
				? '!stroke-primary before:w-full'
				: 'before:w-[0%]'
		);

	return (
		<ul className='flex items-center gap-6 justify-between w-full max-w-[550px]'>
			{links.map(({ title, href, icon: Icon }) => (
				<li key={title}>
					<Link href={href} className={linkClassName(href)}>
						<Icon />
						<span>{title}</span>
					</Link>
				</li>
			))}
		</ul>
	);
}
