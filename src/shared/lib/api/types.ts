export interface ApiResponseData<T = any> {
	data: T;
	message: string;
	error: boolean;
}
