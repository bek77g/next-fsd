import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['ru', 'ky'] as const;
export type LocaleType = (typeof locales)[number];

export const localeNames: Record<LocaleType, string> = {
	ru: 'Русский',
	ky: 'Кыргызский',
};

export const { Link, redirect, usePathname, useRouter, permanentRedirect } =
	createSharedPathnamesNavigation({ locales });
