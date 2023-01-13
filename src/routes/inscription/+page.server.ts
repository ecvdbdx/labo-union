import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

import { supabase } from '$lib/auth';
import { isPasswordValid } from '$lib/validators/auth';

export const actions: Actions = {
	default: async ({ request }) => {
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
					? "Veuillez accepter les conditions d'utilisation"
					: null,
				email,
				password,
			});
		}

		if (!isPasswordValid(password)) {
			return fail(400, {
				password_error:
					'Votre mot de passe doit contenir 9 caractères minimum, une majuscule, une minuscule, un chiffre et un caractère spécial',
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

		const isEmailValid = await supabase.from('AuthorizedEmail').select().eq('email', email);

		if (isEmailValid.data?.length === 0) {
			return fail(400, {
				email_error: "Cette adresse email n'est pas autorisée",
				email,
				password,
			});
		}

		try {
			await supabase.auth.signUp({
				email: email as string,
				password: password as string,
			});

			// @TODO: Create profil based on email
		} catch (error) {
			console.error(error);
		}

		return { success: true };
	},
};
