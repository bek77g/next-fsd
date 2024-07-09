import { COLORS } from '@/src/app/constants';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, ThemeConfig } from 'antd';
import ru_RU from 'antd/lib/locale/ru_RU';
import { ReactNode } from 'react';

const theme: ThemeConfig = {
	components: {
		Button: {
			fontSize: 16,
			colorBgContainerDisabled: COLORS.gray,
			colorTextDisabled: COLORS.white,
			borderRadius: 10,
		},
		List: {
			colorBorder: COLORS.stroke,
		},
		Avatar: {
			colorTextPlaceholder: COLORS.gray,
		},
		Tabs: {
			colorBorderSecondary: COLORS.stroke,
			borderRadius: 0,
			borderRadiusLG: 0,
			cardGutter: -1,
			margin: 0,
		},
		Tag: {
			fontSize: 15,
			fontSizeIcon: 14,
			padding: 8,
			fontSizeSM: 15,
			marginXS: 0,
		},
		Input: {
			colorBgContainerDisabled: COLORS.disabled,
			colorTextDisabled: COLORS.stroke,
			fontSize: 16,
			borderRadius: 10,
		},
		DatePicker: {
			colorIcon: COLORS.primary,
			fontSize: 16,
		},
		Typography: {
			fontSize: 16,
			lineHeight: 1.2,
			colorLink: COLORS.black,
			colorLinkHover: COLORS.black,
			colorLinkActive: COLORS.black,
		},
		Breadcrumb: {
			fontSize: 12,
		},
		Divider: {
			margin: 0,
		},
		Image: {
			colorTextLightSolid: COLORS.white,
			marginXL: 15,
		},
	},
	token: {
		colorFillAlter: COLORS.white,
		borderRadius: 10,
		borderRadiusLG: 10,
		controlHeightLG: 49,
		controlHeight: 40,
		controlPaddingHorizontal: 20,
		paddingSM: 20,
		paddingContentHorizontal: 15,
		colorPrimary: COLORS.primary,
		colorError: COLORS.red,
		colorText: COLORS.black,

		colorBorder: COLORS.gray,
		colorTextPlaceholder: COLORS.stroke,
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
