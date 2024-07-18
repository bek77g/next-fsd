import { Link } from '@/i18n.config';
import { ROUTES } from '@/src/shared/constants';
import { Form, Input } from '@/src/shared/ui';
import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';

interface ILoginForm {
	form: any;
	onSubmit: (data: { pin: string; password: string }) => void;
	submitBtn: ReactNode;
}

export function LoginForm({ form, onSubmit, submitBtn }: ILoginForm) {
	const translateForm = useTranslations('form');
	const translateAuth = useTranslations('auth');

	return (
		<Form
			form={form}
			layout='vertical'
			className='grid gap-[20px]'
			onFinish={onSubmit}>
			<Form.Item
				name='pin'
				className='!my-0'
				label={translateForm('label.pin')}
				rules={[{ required: true }]}>
				<Input
					type='text'
					size='large'
					placeholder={translateForm('placeholder.pin')}
				/>
			</Form.Item>
			<Form.Item
				name='password'
				className='!my-0'
				label={translateForm('label.password')}
				rules={[{ required: true }]}>
				<Input
					type='password'
					size='large'
					placeholder={translateForm('placeholder.password')}
				/>
			</Form.Item>
			{submitBtn}
			<div className='flex justify-between'>
				<Link
					href={ROUTES.forgotPassword}
					scroll={false}
					className='text-primary-dark font-semibold hover:underline hover:text-primary'>
					{translateAuth('forgotPassword')}
				</Link>
				<Link
					href={ROUTES.register}
					scroll={false}
					className='text-primary-dark font-semibold hover:underline hover:text-primary'>
					{translateAuth('signUp')}
				</Link>
				<Link
					href={ROUTES.esi}
					scroll={false}
					className='text-primary-dark font-semibold hover:underline hover:text-primary'>
					{translateAuth('signByESI')}
				</Link>
			</div>
		</Form>
	);
}
