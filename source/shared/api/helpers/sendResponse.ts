import { NextResponse } from 'next/server';

export const sendResponse = ({
	data = false,
	message = 'error',
	error = true,
	statusCode = 400,
}: {
	data?: boolean | object;
	message?: string;
	error?: boolean;
	statusCode?: number;
}) =>
	NextResponse.json(
		{
			data,
			message,
			error,
		},
		{ status: statusCode }
	);

export const sendErrorResponse = ({
	data = false,
	message = 'error',
	statusCode = 400,
}: {
	data?: boolean | object;
	message?: string;
	statusCode?: number;
}) => sendResponse({ data, message, error: true, statusCode });

export const sendSuccessResponse = ({
	data = true,
	message = 'ok',
	statusCode = 200,
}: {
	data?: boolean | object | Array<any>;
	message?: string;
	statusCode?: number;
}) => sendResponse({ data, message, error: false, statusCode });
