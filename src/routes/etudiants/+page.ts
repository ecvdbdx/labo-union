import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({
	parent,
	// , url
}) => {
	const { supabase } = await parent();

	let spec;
	// let params = new URLSearchParams(url.search);
	// for (const [key, value] of params.entries()) {
	// 	spec = value;
	// }
	// const resultSupabase = await supabase.from('Profile').select('*').eq('speciality', spec);

	const { data: profiles, error: profilesErr } = await supabase.from('Profile').select('*');
	const { data: grade, error: gradeErr } = await supabase.from('distinct_grade').select();
	const { data: speciality, error: specialityErr } = await supabase
		.from('distinct_speciality')
		.select();

	if (profilesErr || gradeErr || specialityErr) {
		throw error(500, {
			code: 500,
			message: 'Une erreur est survenue',
		});
	}

	if (!profiles || profiles === null) {
		throw error(404, {
			code: 404,
			message: 'Aucun profil trouvé',
		});
	}

	return {
		profiles,
		grade,
		speciality,
		spec,
	};
};
