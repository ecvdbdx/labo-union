import { error } from '@sveltejs/kit';
import { supabase } from '$lib/auth';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const { data: profile, error: err } = await supabase
		.from('Profile')
		.select()
		.eq('id', params.id)
		.single();

	if (err) {
		if (err.code === 'PGRST116') {
			throw error(404, {
				code: 404,
				message: "L'étudiant n'existe pas",
			});
		}

		throw error(500, {
			code: 500,
			message: 'Une erreur est survenue',
		});
	}
	return {
		profile,
	};
}) satisfies PageLoad;
