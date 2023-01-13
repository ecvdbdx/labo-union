import { env } from '$env/dynamic/public';

export const getURL = () => {
	let url =
		env.PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
		env.PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
		'http://localhost:8080/';
	// Make sure to include `https://` when not localhost.
	url = url.includes('http') ? url : `https://${url}`;
	// Make sure to including trailing `/`.
	url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;
	return url;
};
