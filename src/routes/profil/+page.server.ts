/** @type {import('./$types').Actions} */

import { fail, redirect, error } from '@sveltejs/kit';
import { v4 as uuidv4 } from 'uuid';

import type { PageServerLoad, Actions } from './$types';
import { realUploadSizeLimit } from '$lib/constants/files';

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
	createPortfolio: async ({ request, locals: { getSession, supabase } }) => {
		const session = await getSession();
		const user_id = session?.user.id;
		const formData = await request.formData();

		const title = formData.get('title') as string;
		const category = formData.get('category') as string;
		const link = formData.get('link') as string;
		const thumbnail = formData.get('thumbnail') as Blob;

		if (title === '' || category === '' || thumbnail.length === 0) {
			return fail(400, {
				title_error: title === '' ? 'Veuillez renseigner un titre' : null,
				category_error: category === '' ? 'Veuillez renseigner une categorie' : null,
				thumbnail_error: thumbnail.length === 0 ? 'Veuillez ajouter une image' : null,
				title,
				category,
				link,
				thumbnail,
			});
		}

		const format = thumbnail.name.split('.').pop();
		const hashProfile = uuidv4();
		const filePath = `${hashProfile}-porfolio.${format}`;

		if (thumbnail.size > realUploadSizeLimit) {
			return fail(400, {
				thumbnail_error: 'Le fichier est trop volumineux',
			});
		}

		const { error: thumb_err } = await supabase.storage
			.from('portfolio-thumbnail')
			.upload(filePath, thumbnail, { cacheControl: '0' });

		if (thumb_err) {
			return fail(500, {
				error: "Une erreur est survenue lors de l'upload de votre image",
			});
		}

		const url = supabase.storage.from('portfolio-thumbnail').getPublicUrl(filePath).data.publicUrl;

		const { data: profile, error: profile_error } = await supabase
			.from('Profile')
			.select('id')
			.eq('user_id', user_id)
			.single();

		if (profile_error) {
			return fail(500, {
				error: 'Une erreur est survenue lors de la récupération de votre profil',
			});
		}

		const { error: err } = await supabase.from('Portfolio').insert({
			title: title,
			category: category,
			link: link,
			thumbnail: url,
			user_id: profile.id,
		});

		if (err) {
			return fail(500, {
				error: err.message,
			});
		}

		throw redirect(303, '/profil');
	},
};
