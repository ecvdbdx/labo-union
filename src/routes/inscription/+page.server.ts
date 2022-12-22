import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

import { supabase } from '$lib/auth';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const email = formData.get('email')?.toString();
		const password = formData.get('password')?.toString();
		const termAndConditions = formData.get('termAndConditions')?.toString();

		if (!email || !password || !termAndConditions) {
			return fail(400, {
				email_error: !email ? 'Veuillez renseigner votre adresse email' : null,
				password_error: !password ? 'Veuillez renseigner votre mot de passe' : null,
				termAndConditions_error: !termAndConditions
					? "Veuillez accepter les conditions d'utilisation"
					: null,
				email,
				password,
			});
		}

		if (password.toString().length < 9) {
			return fail(400, {
				password_error: 'Votre mot de passe doit faire au moins 9 caractères',
				email,
				password,
			});
		}

		if (!isValidPassword(password)) {
			return fail(400, {
				password_error:
					'Votre mot de passe doit contenir au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial',
				email,
				password,
			});
		}

		if (!isEmailValid(email)) {
			return fail(400, {
				email_error: "Vous devez utiliser une adresse mail de l'école",
				email,
				password,
			});
		}

		await supabase.auth.signUp({
			email: email as string,
			password: password as string,
		});

		return { success: true };
	},
};

function isValidPassword(password: string): boolean {
	const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/;
	return regex.test(password);
}

function isEmailValid(email: string): boolean {
	const emailRegex = /^[^@]+@mail-ecv\.fr$/;
	return emailRegex.test(email);
}
