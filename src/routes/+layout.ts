import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { supabase } from '$lib/auth';
import { error } from '@sveltejs/kit';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async (event) => {
	const { session } = await getSupabase(event);

	const { data, error: err } = await supabase
		.from('Profile')
		.select('*')
		.eq('user_id', session?.user.id);

	if (err) {
		throw error(500, {
			code: 500,
			message: 'Une erreur est survenue',
		});
	}

	return {
		session,
		user: data,
	};
};
