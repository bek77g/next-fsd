import { Input as AntInput, InputProps } from 'antd';
import React from 'react';

import {
	PassInVisibleIcon,
	PassVisibleIcon,
} from '@/src/shared/ui/Icons/icons';

export const Input: React.FC<InputProps> = ({
	type,
	size = 'large',
	...props
}) => {
	switch (type) {
		case 'password':
			return (
				<AntInput.Password
					type={type}
					size={size}
					{...props}
					iconRender={visible =>
						visible ? PassVisibleIcon() : PassInVisibleIcon()
					}
				/>
			);
		default:
			return <AntInput type={type} size={size} {...props} />;
	}
};
