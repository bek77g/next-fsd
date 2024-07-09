import { ApiError, ApiRequestConfig, ApiResponse } from './types';

export const errorHandler = (err: ApiError) => {
	console.error('[Error handler]:');
	console.error(err);

	return Promise.reject(err);
};

export const requestHandler = (config: ApiRequestConfig) => {
	const headers = config.headers || {};

	return { ...config, headers };
};

export const responseHandler = (res: ApiResponse) => {
	return res;
};
