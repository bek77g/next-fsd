import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const defaultLocale = 'ru';
export const locales = ['ru', 'ky'] as const;
export type LocaleType = (typeof locales)[number];

export const localeNames: Record<LocaleType, string> = {
	ru: 'РУС',
	ky: 'КЫР',
};

export const { Link, redirect, usePathname, useRouter, permanentRedirect } =
	createSharedPathnamesNavigation({ locales });
