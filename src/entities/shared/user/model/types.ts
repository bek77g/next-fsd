export interface IUser {
	id: string;
	name: string;
	surname: string;
	patronymic: string;
	idUd: string;
	role: string;
}
export interface IUserToken {
	type: string;
	access_token: string;
	expires_in: number;
	exp_timestamp: number;
}

export interface IUserState {
	user: IUser | null;
	token: IUserToken | null;
}

export interface IUserCredentials {
	pin?: string;
	password: string;
	recaptcha: string;
}
