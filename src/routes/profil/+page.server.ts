/** @type {import('./$types').Actions} */

import type { PageServerLoad, Actions } from './$types';
import { fail, redirect, error } from '@sveltejs/kit';

import { supabase } from '$lib/auth';

export const load = (async ({ params }) => {
	return {
		params,
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request, cookies }) => {
		const session_cookie = cookies.get('supabase-auth-token');

		if (!session_cookie) {
			throw error(500, {
				code: 500,
				message: 'No session cookie found',
			});
		}

		const session = await supabase.auth
			.setSession({
				access_token: JSON.parse(session_cookie)[0],
				refresh_token: JSON.parse(session_cookie)[1],
			})
			.catch((err) => {
				throw error(500, err);
			});

		const user_id = session.data.user?.id;

		const formData = await request.formData();
		const first_name = formData.get('first_name') as string;
		const last_name = formData.get('last_name') as string;
		const grade = formData.get('grade') as string;
		const speciality = formData.get('speciality') as string;
		const description = formData.get('description') as string;
		const status = formData.get('status') as string;

		if (first_name === '' || last_name === '') {
			return fail(400, {
				first_name_error: first_name === '' ? 'Veuillez renseigner votre prénom' : null,
				last_name_error: last_name === '' ? 'Veuillez renseigner votre nom' : null,
			});
		}

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
			throw error(500, err);
		}

		throw redirect(303, '/profil');
	},
} satisfies Actions;
