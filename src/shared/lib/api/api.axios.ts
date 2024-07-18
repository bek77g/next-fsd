import {
	errorHandler,
	requestHandler,
	responseHandler,
} from '@/src/shared/lib/api/interceptors';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export const $api: AxiosInstance = axios.create({
	baseURL: '/api',
	headers: {
		'Content-Type': 'application/json',
	} as AxiosRequestConfig['headers'],
});

$api.interceptors.request.use(requestHandler);
$api.interceptors.response.use(
	(response: AxiosResponse) => responseHandler(response),
	(error: any) => errorHandler(error)
);
