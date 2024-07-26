'use client';
import { months } from '@/src/shared/constants';
import { Calendar } from 'antd';
import clsx from 'clsx';
import { useLocale } from 'next-intl';

interface ISimpleCalendar {
	className?: string;
}

export function SimpleCalendar({ className }: ISimpleCalendar) {
	const locale = useLocale();

	return (
		<div
			className={clsx('p-[16px] w-full bg-primary-white rounded', className)}>
			<Calendar
				locale={locale}
				fullscreen={false}
				headerRender={({ value }) => {
					const month = value.month();
					const year = value.year();

					return (
						<div>
							<h3 className='text-primary font-semibold'>
								{months[month]} {year}
							</h3>
							<nav></nav>
						</div>
					);
				}}
			/>
		</div>
	);
}
