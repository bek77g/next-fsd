import { Link } from '@/i18n.config';
import { ROUTES } from '@/src/shared/constants';
import clsx from 'clsx';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import siteLogoSrc from '../assets/logo.svg';
import styles from './logo.module.scss';

export function SiteLogo() {
	const t = useTranslations('general');
	const locale = useLocale();

	const titleClassName = clsx(
		styles.title,
		locale === 'ru' ? 'w-[260px]' : 'w-[280px]'
	);

	return (
		<Link href={ROUTES.home} className={styles.wrapper}>
			<Image className={styles.logo} src={siteLogoSrc} alt='logo' />
			<h2 className={titleClassName}>{t('monName')}</h2>
		</Link>
	);
}
