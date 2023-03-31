import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { supabase } from '$lib/auth';
import { error } from '@sveltejs/kit';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async (event) => {
	const { session } = await getSupabase(event);

	const id = session?.user.id;

	event.depends('app:profile');

	const userResponse = id
		? await supabase.from('Profile').select('*').eq('user_id', session?.user.id)
		: null;

	if (userResponse) {
		const { data, error: err } = userResponse;

		if (!data?.length || err) {
			throw error(500, {
				code: 500,
				message: 'Une erreur est survenue',
			});
		}
	}

	return {
		session,
		user: userResponse?.data[0],
	};
};
