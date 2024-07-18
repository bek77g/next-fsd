'use client';

import { COLORS } from '@/src/shared/constants';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, ThemeConfig } from 'antd';
import ru_RU from 'antd/lib/locale/ru_RU';
import { ReactNode } from 'react';

const theme: ThemeConfig = {
	components: {
		Button: {
			fontSize: 16,
		},
		List: {
			colorBorder: COLORS.stroke,
		},
		Input: {
			fontSize: 16,
			colorTextPlaceholder: COLORS.thirdDark,
			colorBgContainerDisabled: COLORS.gray,
		},
		DatePicker: {
			colorIcon: COLORS.primary,
			fontSize: 16,
		},
		Breadcrumb: {
			fontSize: 12,
		},
		Divider: {
			margin: 0,
		},
	},
	token: {
		colorFillAlter: COLORS.white,
		borderRadius: 4,
		controlHeight: 36,
		controlPaddingHorizontal: 16,
		paddingContentHorizontal: 15,
		colorPrimary: COLORS.primary,
		colorError: COLORS.red,
		colorText: COLORS.primaryDark,
		colorBorder: COLORS.stroke,
		colorTextPlaceholder: COLORS.thirdDark,
		colorBgContainerDisabled: COLORS.stroke,
		colorTextQuaternary: COLORS.stroke,
		colorIconHover: COLORS.primary,
	},
};

export const AntdProvider = ({ children }: { children: ReactNode }) => {
	return (
		<AntdRegistry>
			<ConfigProvider theme={theme} locale={ru_RU}>
				{children}
			</ConfigProvider>
		</AntdRegistry>
	);
};
