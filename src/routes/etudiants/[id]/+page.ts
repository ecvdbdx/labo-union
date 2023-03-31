import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { supabase } from '$lib/auth';
import { error, redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async (event) => {
	const { data: profile, error: err } = await supabase
		.from('Profile')
		.select()
		.eq('id', event.params.id)
		.maybeSingle();

	if (err) {
		throw error(500, {
			code: 500,
			message: 'Une erreur est survenue',
		});
	}

	if (!profile) {
		throw error(404, {
			code: 404,
			message: "L'étudiant n'existe pas",
		});
	}

	const { session } = await getSupabase(event);

	// If the profile is the current user's profile, redirect to /profil
	if (profile.user_id === session?.user.id) {
		throw redirect(302, '/profil');
	}

	return {
		profile,
	};
}) satisfies PageLoad;
