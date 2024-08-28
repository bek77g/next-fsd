import Cookies from 'universal-cookie';

export const cookies = {
	client: () => new Cookies(null, { path: '/' }),
	server: (cookie: string) => new Cookies(cookie, { path: '/' }),
};
