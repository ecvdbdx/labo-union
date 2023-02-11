import { error } from '@sveltejs/kit';
import { supabase } from '$lib/auth';
import type { PageLoad } from './$types';

export const load = (async () => {
	const { data: profiles, error: err } = await supabase.from('Profile').select('*');
	if (err) {
		throw error(500, {
			code: 500,
			message: 'Une erreur est survenue',
		});
	}

	if (profiles.length === 0) {
		throw error(404, {
			code: 404,
			message: "Aucun étudiant n'a été trouvé",
		});
	}

	return {
		profiles,
	};
}) satisfies PageLoad;
