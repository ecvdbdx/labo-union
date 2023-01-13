import { error } from '@sveltejs/kit';
import { supabase } from '$lib/auth';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const { data: profiles, error: err } = await supabase
		.from('Profile')
		.select()
		.eq('user_id', params.id)
		.single();
	if (err) {
		throw error(500, {
			message: "Une erreur est survenue, les données n'ont pas pu être récupérées",
		});
	}
	return {
		profiles,
	};
}) satisfies PageLoad;
