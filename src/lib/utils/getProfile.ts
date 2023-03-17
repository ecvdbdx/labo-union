import { supabase } from '$lib/auth';
import { error } from '@sveltejs/kit';

export default async (userId: string) => {
	const { data, error: err } = await supabase
		.from('Profile')
		.select()
		.eq('user_id', userId)
		.maybeSingle();

	if (err) {
		throw error(500, {
			code: 500,
			message: 'Une erreur est survenue',
		});
	} else {
		return data;
	}
};
