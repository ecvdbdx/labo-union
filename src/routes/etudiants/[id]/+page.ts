import { error, redirect } from '@sveltejs/kit';
import type { PageLoad } from '../$types';

export const load: PageLoad = async ({ params, parent }) => {
	const { session, supabase } = await parent();
	const userId = params.id;
	const userSession = session?.user.id;

	const { data, error: err } = await supabase
		.from('Profile')
		.select('*, Experience(*), Training(*)')
		.eq('id', userId)
		.maybeSingle();

	if (err || !data) {
		throw error(500, {
			code: 500,
			message: 'Une erreur est survenue',
		});
	}

	if (userSession === data.user_id) {
		throw redirect(302, '/profil');
	}

	return {
		profile: data,
	};
};
