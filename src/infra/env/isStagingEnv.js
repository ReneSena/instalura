const isServer = typeof window === 'undefined';

export const isStagingEnv = isServer
	? process.env.NODE_ENV === 'development'
	: // eslint-disable-next-line no-undef
	  globalThis.location.href.includes('localhost');
