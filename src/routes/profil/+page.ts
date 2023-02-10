import { error } from '@sveltejs/kit';
import { supabase } from '$lib/auth';
import type { User } from '@interfaces';

export async function load() {
	const { data, error: err } = await supabase
		.from('Profile')
		.select()
		.eq('user_id', user_id)
		.single();

	if (err) {
		console.error(err);
		throw error(500, {
			message: "Les données n'ont pas pu être collectées",
		});
	}

	return {
		profile: data as User,
	};
}
