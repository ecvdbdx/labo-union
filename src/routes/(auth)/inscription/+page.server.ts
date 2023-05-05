import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

import { isPasswordValid } from '$lib/validators/auth';

export const actions: Actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();

		const email = formData.get('email')?.toString();
		const password = formData.get('password')?.toString();
		const confirmedPassword = formData.get('confirmedPassword')?.toString();
		const termAndConditions = formData.get('termAndConditions')?.toString();

		if (!email || !password || !confirmedPassword || !termAndConditions) {
			return fail(400, {
				email_error: !email ? 'Veuillez renseigner votre adresse email' : null,
				password_error: !password ? 'Veuillez renseigner votre mot de passe' : null,
				confirmedPassword_error: !confirmedPassword
					? 'Veuillez confirmer votre mot de passe'
					: null,
				termAndConditions_error: !termAndConditions
					? 'Merci d’accepter les conditions d’utilisation et la politique de confidentialité'
					: null,
				email,
				password,
			});
		}

		if (!isPasswordValid(password)) {
			return fail(400, {
				password_error:
					'Votre mot de passe doit contenir 9 caractères minimum, une majuscule, une minuscule, un chiffre et un caractère spécial (@$!#?&)',
				email,
				password,
			});
		}

		if (password !== confirmedPassword) {
			return fail(400, {
				password_error: 'Les mots de passe ne correspondent pas',
				confirmedPassword_error: 'Les mots de passe ne correspondent pas',
				email,
				password,
			});
		}

		const isEmailValid = await supabase.from('AuthorizedEmail').select('*').eq('email', email);

		if (isEmailValid.data?.length === 0) {
			return fail(400, {
				email_error: 'Votre mail n’existe pas, merci de rentrer le bon email',
				email,
				password,
			});
		}

		const { data, error } = await supabase.auth.signUp({
			email: email as string,
			password: password as string,
		});

		if (error) {
			return fail(400, {
				email_error: error.message,
				email,
				password,
			});
		}

		const user_information = await supabase.from('AuthorizedEmail').select('*').eq('email', email);

		if (user_information.data === null) {
			throw new Error('Profile cannot be created');
		}

		await supabase.from('Profile').insert({
			created_at: new Date().toISOString(),
			user_id: data.user?.id,
			first_name: user_information.data[0].firstname,
			last_name: user_information.data[0].lastname,
			speciality: user_information.data[0].speciality,
			grade: user_information.data[0].grade,
			date_of_birth: user_information.data[0].birth,
		});

		return { success: true };
	},
};
