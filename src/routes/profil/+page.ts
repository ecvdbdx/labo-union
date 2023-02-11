import type { PageServerLoad } from './$types';

import { error } from '@sveltejs/kit';
import { supabase } from '$lib/auth';
import type { User } from '@interfaces';

export const load: PageServerLoad = async ({ parent }) => {
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
		profile: data as User,
	};
};
