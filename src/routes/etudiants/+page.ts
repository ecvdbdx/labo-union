import { error } from '@sveltejs/kit';
import { supabase } from '$lib/auth';
import type { PageLoad } from './$types';

export const load = (async () => {
	const { data: profile, error: err } = await supabase.from('Profile').select('*');
	if (err) {
		throw error(500, {
			message: "Les données n'ont pas pu être chargées",
		});
	}
	return {
		profile,
	};
}) satisfies PageLoad;
