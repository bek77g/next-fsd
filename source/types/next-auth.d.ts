import 'next-auth';

import { IUser, IUserInfo, IUserToken } from '@/source/shared/lib/auth';

declare module 'next-auth' {
	interface Session {
		user: IUser;
		token: IUserToken;
		info: IUserInfo;
		expires: string;
	}
}
