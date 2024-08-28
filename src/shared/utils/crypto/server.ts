import crypto from 'node:crypto';

const INIT_VECTOR = Buffer.from(process.env.NEXT_CRYPTO_INIT_VECTOR_HEX, 'hex');
const SECURITY_KEY = Buffer.from(process.env.NEXT_CRYPTO_SECURITY_HEX, 'hex');
const algorithm = process.env.NEXT_CRYPTO_ALGORITHM;

export function encryptData(text: string) {
	const cipher = crypto.createCipheriv(algorithm, SECURITY_KEY, INIT_VECTOR);
	let encrypted = cipher.update(text, 'utf8', 'base64');
	encrypted += cipher.final('base64');

	return encrypted;
}

export function decryptData(text: string) {
	const decipher = crypto.createDecipheriv(algorithm, SECURITY_KEY, INIT_VECTOR);

	let dec = decipher.update(text, 'base64', 'utf8');
	dec += decipher.final('utf8');

	return dec;
}
