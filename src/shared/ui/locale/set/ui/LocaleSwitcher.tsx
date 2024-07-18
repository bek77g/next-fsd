'use client';

import {
	localeNames,
	locales,
	usePathname,
	useRouter,
	type Locale,
} from '@/i18n.config';
import { Select } from '@/src/shared/ui';
import { useLocale } from 'next-intl';

export function LocaleSwitcher({ locale }: { locale?: Locale }) {
	const pathname = usePathname();
	const router = useRouter();
	const savedLocale = useLocale();

	const changeLocale = (value: Locale) => {
		router.replace(pathname, { locale: value });
	};

	const options = locales.reduce(
		(acc, curr) => [...acc, { value: curr, label: localeNames[curr] }],
		[]
	);

	return (
		<Select
			value={locale || savedLocale}
			className='w-[74px]'
			onChange={changeLocale}
			options={options}
			size='middle'
		/>
	);
}
