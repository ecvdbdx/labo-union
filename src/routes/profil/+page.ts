import { error } from '@sveltejs/kit';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent, depends }) => {
	const { session, supabase } = await parent();
	const userId = session?.user.id;

	depends('app:profile');

	if (!userId) {
		throw error(401, {
			code: 401,
			message: 'Vous devez être connecté•e pour accéder à cette page',
		});
	}

	const { data, error: err } = await supabase
		.from('Profile')
		.select('*, Experience(*), Training(*)')
		.eq('user_id', userId)
		.maybeSingle();

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
