'use client';

import { LoginForm, RegisterForm } from '@/src/features/auth/ui';
import { login } from '@/src/shared/lib/auth';
import { Button } from '@/src/shared/ui';
import { useForm } from 'antd/es/form/Form';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

interface IAuthForm {
	type: 'login' | 'register';
}

export function AuthForm({ type }: IAuthForm) {
	const t = useTranslations('auth');
	const [form] = useForm();
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const searchParams = useSearchParams();
	const locale = useLocale();

	const callbackUrl = searchParams.get('callbackUrl') as string | undefined;

	const onFinish = async (data: { pin: string; password: string }) => {
		setIsLoading(true);
		try {
			const token = await grecaptcha.execute(
				process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
				{
					action: 'submit',
				}
			);

			await login({
				pin: data.pin,
				password: data.password,
				recaptcha: token,
				callbackUrl,
			});
			setIsLoading(false);

			if (callbackUrl) {
				window.location.href = callbackUrl;
			} else {
				router.push(`/${locale}`);
			}
		} catch (error) {
			console.log({ error });
		}
	};

	const Form = type === 'login' ? LoginForm : RegisterForm;

	const titleText = type === 'login' ? t('login') : t('register');
	const submitText = type === 'login' ? t('signIn') : t('signUp');

	return (
		<div className='w-full max-w-[480px] pb-24 md:py-4 mx-4 animate-fade-up animate-once'>
			<h3 className='sticky top-0 py-4 text-[28px] font-bold bg-primary-white z-10'>
				{titleText}
			</h3>
			<Form
				form={form}
				onSubmit={onFinish}
				submitBtn={
					<Button
						loading={isLoading}
						type='primary'
						size='large'
						htmlType='submit'>
						{submitText}
					</Button>
				}
			/>
		</div>
	);
}
