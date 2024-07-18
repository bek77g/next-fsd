import axios, { AxiosRequestConfig } from 'axios';
import { ApiError, ApiResponseData } from './types';

declare module 'axios' {
	export interface AxiosRequestConfig {
		raw?: boolean;
		silent?: boolean;
	}
}
export class HttpError extends Error {
	constructor(message?: string) {
		super(message);
		this.name = 'HttpError';
		Object.setPrototypeOf(this, new.target.prototype);
	}
}

export const errorHandler = (error: ApiError) => {
	if (error === null) throw new Error('Unrecoverable error!! Error is null!');
	if (axios.isAxiosError(error)) {
		const response = error?.response;
		const request = error?.request;
		const config = error?.config;

		if (error.code === 'ERR_NETWORK') {
			console.log('connection problems..');
		} else if (error.code === 'ERR_CANCELED') {
			console.log('connection canceled..');
		}
		if (response) {
			const statusCode = response?.status;
			if (statusCode === 404) {
				console.log(
					'The requested resource does not exist or has been deleted'
				);
			} else if (statusCode === 401) {
				console.log('Please login to access this resource');
				//redirect user to login
			}
		} else if (request) {
			//The request was made but no response was received, `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in Node.js
		}
	}
	console.log(error.message);
};

export const requestHandler = (config: AxiosRequestConfig) => {
	const headers = config.headers || {};

	return { ...config, headers };
};

export const responseHandler = (response: ApiResponseData<any>) => {
	const config = response?.config;
	if (config.raw) {
		return response;
	}
	if (response.status == 200) {
		const data = response?.data;
		if (!data) {
			throw new HttpError('API Error. No data!');
		}
		return data;
	}
	throw new HttpError('API Error! Invalid status code!');
};
