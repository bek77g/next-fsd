import { Form, Input } from '@/src/shared/ui';
import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';

interface IRegisterForm {
	form: any;
	onSubmit: (data: { pin: string; password: string }) => void;
	submitBtn: ReactNode;
}

export function RegisterForm({ form, onSubmit, submitBtn }: IRegisterForm) {
	const translateAuth = useTranslations('auth');
	const translateForm = useTranslations('form');

	return (
		<Form
			form={form}
			layout='vertical'
			className='grid gap-[20px]'
			onFinish={onSubmit}>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-[24px]'>
				<Form.Item
					name='citizenship'
					className='!my-0'
					label={translateForm('label.citizenship')}
					rules={[{ required: true }]}>
					<Input
						type='text'
						size='large'
						placeholder={translateForm('placeholder.citizenship')}
					/>
				</Form.Item>
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
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-[24px]'>
				<Form.Item
					name='surname'
					className='!my-0'
					label={translateForm('label.surname')}
					rules={[{ required: true }]}>
					<Input
						size='large'
						placeholder={translateForm('placeholder.surname')}
					/>
				</Form.Item>
				<Form.Item
					name='name'
					className='!my-0'
					label={translateForm('label.name')}
					rules={[{ required: true }]}>
					<Input size='large' placeholder={translateForm('placeholder.name')} />
				</Form.Item>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-[24px]'>
				<Form.Item
					name='patronymic'
					className='!my-0'
					label={translateForm('label.patronymic')}
					rules={[{ required: true }]}>
					<Input
						size='large'
						placeholder={translateForm('placeholder.patronymic')}
					/>
				</Form.Item>
				<Form.Item
					name='specialty'
					className='!my-0'
					label={translateForm('label.specialty')}
					rules={[{ required: true }]}>
					<Input
						size='large'
						placeholder={translateForm('placeholder.specialty')}
					/>
				</Form.Item>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-[24px]'>
				<Form.Item
					name='gender'
					className='!my-0'
					label={translateForm('label.gender')}
					rules={[{ required: true }]}>
					<Input
						size='large'
						placeholder={translateForm('placeholder.gender')}
					/>
				</Form.Item>
				<Form.Item
					name='birthDate'
					className='!my-0'
					label={translateForm('label.birthDate')}
					rules={[{ required: true }]}>
					<Input
						size='large'
						placeholder={translateForm('placeholder.birthDate')}
					/>
				</Form.Item>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-[24px]'>
				<Form.Item
					name='passportNumber'
					className='!my-0'
					label={translateForm('label.passportNumber')}
					rules={[{ required: true }]}>
					<Input
						size='large'
						placeholder={translateForm('placeholder.passportNumber')}
					/>
				</Form.Item>
				<Form.Item
					name='passportIssueDate'
					className='!my-0'
					label={translateForm('label.passportIssueDate')}
					rules={[{ required: true }]}>
					<Input
						size='large'
						placeholder={translateForm('placeholder.passportIssueDate')}
					/>
				</Form.Item>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-[24px]'>
				<Form.Item
					name='region'
					className='!my-0'
					label={translateForm('label.region')}
					rules={[{ required: true }]}>
					<Input
						size='large'
						placeholder={translateForm('placeholder.region')}
					/>
				</Form.Item>
				<Form.Item
					name='district'
					className='!my-0'
					label={translateForm('label.district')}
					rules={[{ required: true }]}>
					<Input
						size='large'
						placeholder={translateForm('placeholder.district')}
					/>
				</Form.Item>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 gap-[24px]'>
				<Form.Item
					name='email'
					className='!my-0'
					label={translateForm('label.email')}
					rules={[{ required: true }]}>
					<Input
						size='large'
						placeholder={translateForm('placeholder.email')}
					/>
				</Form.Item>
				<Form.Item
					name='confirmationCode'
					className='!my-0'
					label={translateForm('label.confirmationCode')}
					rules={[{ required: true }]}>
					<Input
						size='large'
						placeholder={translateForm('placeholder.confirmationCode')}
					/>
				</Form.Item>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-[24px]'>
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
				<Form.Item
					name='confirmationPassword'
					className='!my-0'
					label={translateForm('label.confirmationPassword')}
					rules={[{ required: true }]}>
					<Input
						type='password'
						size='large'
						placeholder={translateForm('placeholder.password')}
					/>
				</Form.Item>
			</div>
			{submitBtn}
		</Form>
	);
}
