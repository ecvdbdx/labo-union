import { supabase } from '$lib/auth';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const { data: profiles, error: err } = await supabase.from('Profile').select('*');

	if (err) {
		throw error(500, {
			code: 500,
			message: 'Une erreur est survenue',
		});
	}

	return {
		profiles,
	};
}) satisfies PageLoad;
