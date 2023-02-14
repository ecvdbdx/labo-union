import { error } from '@sveltejs/kit';

import type { PageLoad } from './$types';
import { supabase } from '$lib/auth';

export const load: PageLoad = async ({ parent }) => {
	const { session } = await parent();
	const user_id = session?.user.id;

	const { data, error: err } = await supabase
		.from('Profile')
		.select()
		.eq('user_id', user_id)
		.single();

	if (err) {
		throw error(401, {
			code: 401,
			message: 'Vous devez être connecté pour accéder à cette page',
		});
	}

	return {
		profile: data,
	};
};
