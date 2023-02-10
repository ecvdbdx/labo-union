import { error } from '@sveltejs/kit';
import { supabase } from '$lib/auth';
import { fakeAccount_user_id } from '$lib/constants';
import type { User } from '@interfaces';

export async function load() {
	const { data, error: err } = await supabase
		.from('Profile')
		.select()
		//get accountuserId
		.eq('user_id', fakeAccount_user_id)
		.single();

	if (err) {
		throw error(500, {
			message: "Les données n'ont pas pu être collectées",
		});
	}

	return {
		profile: data as User,
	};
}
