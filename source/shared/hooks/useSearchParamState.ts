import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useSearchParamState<T>(
	key: string,
	defaultValue: T
): [T, (newValue: T) => void, (newValue: T) => void] {
	const router = useRouter();
	const [state, setState] = useState<T>(defaultValue);

	useEffect(() => {
		const searchParamValue = router.query[key] as string | undefined;
		if (searchParamValue) {
			setState(JSON.parse(searchParamValue) as T);
		} else {
			setState(defaultValue);
		}
	}, [router.query, key]);

	const setValue = (newValue: T) => {
		setState(newValue);
		router.push({
			query: { ...router.query, [key]: JSON.stringify(newValue) },
		});
	};

	return [state, setValue];
}
