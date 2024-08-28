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

export interface IUserInfo {
	birthday?: string;
	avatar_lg?: string;
	avatar_md?: string;
	organization_ru?: string;
	organization_ky?: string;
	district_ky?: string;
	district_ru?: string;
	title_ky?: string;
	title_ru?: string;
	about_ky?: string;
	about_ru?: string;
	region_ky?: string;
	region_ru?: string;
	profile_percent?: number;
}

export interface IUserState {
	user: IUser;
	token: IUserToken;
	info: IUserInfo;
}
