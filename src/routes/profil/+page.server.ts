/** @type {import('./$types').Actions} */

import { fail, redirect, error } from '@sveltejs/kit';

import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	return {
		params,
	};
};

export const actions: Actions = {
	postExperience: async ({ request, locals: { getSession, supabase } }) => {
		const session = await getSession();
		const user_id = session?.user.id;

		const { data } = await supabase.from('Profile').select('id').eq('user_id', user_id).single();

		const formData = await request.formData();
		const start_date = formData.get('start_date') as string;
		const end_date = formData.get('end_date') ? (formData.get('end_date') as string) : null;
		const job = formData.get('job') as string;
		const company = formData.get('company') as string;
		const mission = formData.get('mission') as string;
		if (start_date === '' || job === '' || company === '') {
			return fail(400, {
				start_date_error: start_date === '' ? 'Veuillez renseigner une date de début' : null,
				job_error: job === '' ? 'Veuillez renseigner votre poste' : null,
				company_error: company === '' ? 'Veuillez renseigner votre entreprise' : null,
			});
		}

		const { error: errExp } = await supabase.from('Experience').insert([
			{
				start_date: start_date,
				end_date: end_date,
				job: job,
				company: company,
				mission: mission,
				profile_id: data?.id,
			},
		]);

		if (errExp) {
			throw error(500, {
				code: 500,
				message: errExp.message,
			});
		}

		throw redirect(303, '/profil');
	},
	updateExperience: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const start_date = formData.get('start_date') as string;
		const end_date = formData.get('end_date') ? (formData.get('end_date') as string) : null;
		const job = formData.get('job') as string;
		const company = formData.get('company') as string;
		const mission = formData.get('mission') as string;
		if (start_date === '' || job === '' || company === '') {
			return fail(400, {
				start_date_error: start_date === '' ? 'Veuillez renseigner une date de début' : null,
				job_error: job === '' ? 'Veuillez renseigner votre poste' : null,
				company_error: company === '' ? 'Veuillez renseigner votre entreprise' : null,
			});
		}

		const { error: err } = await supabase
			.from('Experience')
			.update({
				start_date: start_date,
				end_date: end_date,
				job: job,
				company: company,
				mission: mission,
			})
			.eq('id', new URL(request.url).searchParams.get('id'));

		if (err) {
			throw error(500, {
				code: 500,
				message: err.message,
			});
		}

		throw redirect(303, '/profil');
	},
	postTraining: async ({ request, locals: { getSession, supabase } }) => {
		const session = await getSession();
		const user_id = session?.user.id;

		const { data, error: errr } = await supabase
			.from('Profile')
			.select('id')
			.eq('user_id', user_id)
			.single();
		errr && console.error(errr);

		const formData = await request.formData();
		const start_date = formData.get('start_date') as string;
		const end_date = formData.get('end_date') ? (formData.get('end_date') as string) : null;
		const school = formData.get('school') as string;
		const diploma = formData.get('diploma') as string;
		if (start_date === '' || school === '' || diploma === '') {
			return fail(400, {
				start_date_error: start_date === '' ? 'Veuillez renseigner une date de début' : null,
				job_error: diploma === '' ? 'Veuillez renseigner votre diplome' : null,
				company_error: school === '' ? 'Veuillez renseigner votre école' : null,
			});
		}

		const { error: err } = await supabase.from('Training').insert([
			{
				start_date: start_date,
				end_date: end_date,
				school: school,
				diploma: diploma,
				profile_id: data?.id,
			},
		]);

		if (err) {
			throw error(500, {
				code: 500,
				message: err.message,
			});
		}

		throw redirect(303, '/profil');
	},
	updateTraining: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const start_date = formData.get('start_date') as string;
		const end_date = formData.get('end_date') ? (formData.get('end_date') as string) : null;
		const school = formData.get('school') as string;
		const diploma = formData.get('diploma') as string;
		if (start_date === '' || school === '' || diploma === '') {
			return fail(400, {
				start_date_error: start_date === '' ? 'Veuillez renseigner une date de début' : null,
				job_error: diploma === '' ? 'Veuillez renseigner votre diplome' : null,
				company_error: school === '' ? 'Veuillez renseigner votre école' : null,
			});
		}
		const { error: err } = await supabase
			.from('Training')
			.update({
				start_date: start_date,
				end_date: end_date,
				school: school,
				diploma: diploma,
			})
			.eq('id', new URL(request.url).searchParams.get('id'))
			.select('*');

		if (err) {
			throw error(500, {
				code: 500,
				message: err.message,
			});
		}

		throw redirect(303, '/profil');
	},
	updateProfile: async ({ request, locals: { getSession, supabase } }) => {
		const session = await getSession();
		const user_id = session?.user.id;
		const formData = await request.formData();
		const first_name = formData.get('first_name') as string;
		const last_name = formData.get('last_name') as string;
		//const grade = formData.get('grade') as string;
		//const speciality = formData.get('speciality') as string;
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
				//grade: grade,
				//speciality: speciality,
				description: description,
				status: !!status,
			})
			.eq('user_id', user_id);

		if (err) {
			throw error(500, {
				code: 500,
				message: err.message,
			});
		}

		throw redirect(303, '/profil');
	},
};
