import { error } from '@sveltejs/kit';

import type { PageLoad } from './$types';
import { supabase } from '$lib/auth';

export const load: PageLoad = async ({ parent }) => {
	const { session } = await parent();
	const user_id = session?.user.id;

	if (!user_id) {
		throw error(401, {
			code: 401,
			message: 'Vous devez être connecté•e pour accéder à cette page',
		});
	}

	const { data, error: err } = await supabase
		.from('Profile')
		.select('*, Experience(*)')
		.eq('user_id', user_id)
		.maybeSingle();
	err && console.error(err);
	if (err) {
		throw error(500, {
			code: 500,
			message: 'Une erreur est survenue',
		});
	}

	return {
		profile: data,
	};
};
