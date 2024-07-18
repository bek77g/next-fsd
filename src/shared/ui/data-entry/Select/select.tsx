import { Select as AntSelect, SelectProps } from 'antd';
import { FC } from 'react';

import { ArrowIcon } from '@/src/shared/ui/Icons/icons';

export const Select: FC<SelectProps> = ({
	size = 'large',
	suffixIcon = <ArrowIcon />,
	placeholder,
	...props
}) => {
	return (
		<AntSelect size={size} suffixIcon={suffixIcon} virtual={false} {...props} />
	);
};
