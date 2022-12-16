import { error } from '@sveltejs/kit';
import { supabase } from '../../utils/supabaseClient';

export async function load() {
	const { data: profile, error: err } = await supabase.from('Profile').select('*');
	if (err) {
		throw error(500, {
			message: "Les données n'ont pas pu être chargées",
		});
	}
	return {
		profile,
	};
}
