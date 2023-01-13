import type { LayoutLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutLoad = ({ url }) => {
	const step = parseInt(url.searchParams.get('step') ?? '');

	if (!step) {
		throw redirect(302, '/inscription?step=1');
	}

	return {
		step,
	};
};
