'use client';

import { useTranslations } from 'next-intl';

export default function Home({ params: { locale } }) {
	const t = useTranslations('general');

	return <main>{t('appName')}</main>;
}
