import { destroyCookie, setCookie } from 'nookies';
import { isStagingEnv } from '../../infra/env/isStagingEnv';

async function HttpClient(url, { headers, body, ...options }) {
	return fetch(url, {
		headers: {
			...headers,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
		...options,
	}).then((respostaDoServer) => {
		if (respostaDoServer.ok) {
			return respostaDoServer.json();
		}

		throw new Error('Falha em pegar os dados do servidor.');
	});
}

const BASE_URL = isStagingEnv
	? 'https://instalura-api-omariosouto.vercel.app'
	: 'https://instalura-api-omariosouto.vercel.app';

export const loginService = {
	async login({ username, password }) {
		return HttpClient(`${BASE_URL}/api/login`, {
			method: 'POST',

			body: {
				username, // omariosouto
				password, // senhasegura
			},
		}).then((respostaConvertida) => {
			const { token } = respostaConvertida.data;
			const DAY_IN_SECONDS = 86400;

			setCookie(null, 'APP_TOKEN', token, {
				path: '/', // todas as páginas
				maxAge: DAY_IN_SECONDS * 7,
			});

			return respostaConvertida;
		});
	},
	logout() {
		destroyCookie(null, 'APP_TOKEN');
	},
};
