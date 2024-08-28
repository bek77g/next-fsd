/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useCallback, useEffect, useState } from 'react';

import { useWindowWidth } from '@/source/shared/hooks';
import { cookies } from '@/source/shared/lib/api';
import { debounce } from '@/source/shared/utils';

const isBrowser = () => typeof window !== 'undefined';

export function WindowWidthSet() {
	const width = useWindowWidth();
	const [lastWidth, setLastWidth] = useState(width || isBrowser() ? window.innerWidth : 0);

	const debouncedSetWidthCookie = useCallback(
		debounce(() => {
			cookies.client().set('window-width', width);
		}, 200),
		[width]
	);

	const debouncedReloadOnResize = debounce(() => {
		if (Math.abs(lastWidth - width) > 10 && isBrowser()) {
			setLastWidth(width);

			window.location.reload();
		}
	}, 1500);

	useEffect(() => {
		debouncedSetWidthCookie();
		debouncedReloadOnResize();
	}, [width]);

	return null;
}
