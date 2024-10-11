import { notification } from 'antd';
import { ArgsProps } from 'antd/es/message';
import { NotificationPlacement } from 'antd/es/notification/interface';

type NotificationType = 'success' | 'error' | 'warning' | 'info';

interface INotification extends ArgsProps {
	type?: NotificationType;
	message: string;
	placement?: NotificationPlacement;
	duration?: number;
}

export const useNotification = (): {
	openNotification: (notificationData: INotification) => void;
	closeNotification: () => void;
	contextHolder: React.ReactNode;
} => {
	const [api, contextHolder] = notification.useNotification();

	const openNotification = ({
		type,
		message,
		...props
	}: INotification): void => {
		api.open({
			...props,
			type,
			message,
			placement: props?.placement || 'topRight',
			duration: props?.duration || 3,
		});
	};

	const closeNotification = (): void => {
		api.destroy();
	};

	return { openNotification, closeNotification, contextHolder };
};
