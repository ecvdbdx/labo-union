import type { PageServerLoad } from './$types';

import { redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';

import { supabase } from '$lib/auth';

export const load = (async ({ params }) => {
	return {
		params,
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }: any) => {
		const formData = await request.formData();
		const first_name = formData.get('first_name');
		const last_name = formData.get('last_name');
		const grade = formData.get('grade');
		const speciality = formData.get('speciality');
		const description = formData.get('description');
		const status = formData.get('status');

		if (first_name === '' || last_name === '') {
			return fail(400, {
				first_name_error: first_name === '' ? 'Veuillez renseigner votre prénom' : null,
				last_name_error: last_name === '' ? 'Veuillez renseigner votre nom' : null,
			});
		}

		const user_id = (await supabase.auth.getUser()).data.user?.id;

		const { error: err } = await supabase
			.from('Profile')
			.update({
				first_name: first_name,
				last_name: last_name,
				grade: grade,
				speciality: speciality,
				description: description,
				status: !!status,
			})
			.eq('user_id', user_id);

		if (err) {
			throw error(500, {
				message: "L'envoie des données n'a pas pu se faire",
			});
		}

		throw redirect(303, '/profil');
	},
};
