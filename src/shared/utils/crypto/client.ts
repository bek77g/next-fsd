import CryptoJS from 'crypto-js';

const INIT_VECTOR = CryptoJS.enc.Hex.parse(process.env.NEXT_CRYPTO_INIT_VECTOR_HEX || '');

const SECURITY_KEY = CryptoJS.enc.Hex.parse(process.env.NEXT_CRYPTO_SECURITY_HEX || '');

const algorithm = 'AES-128-CBC';

export const encryptData = (text?: string): string => {
	if (!text) {
		return '';
	}

	return CryptoJS.AES.encrypt(text, SECURITY_KEY, {
		iv: INIT_VECTOR,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7,
	}).toString();
};

export const decryptData = (cipherText?: string): string => {
	if (!cipherText) {
		return '';
	}

	return CryptoJS.AES.decrypt(cipherText, SECURITY_KEY, {
		iv: INIT_VECTOR,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7,
	}).toString(CryptoJS.enc.Utf8);
};
