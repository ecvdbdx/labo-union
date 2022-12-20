import type { Actions } from './$types';

import { supabase } from '$lib/auth';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');
		const termAndConditions = formData.get('termAndConditions');

		if (!email) {
			return { status: 400, email: 'Veuillez renseigner votre adresse email' };
		}

		if (!password) {
			return { status: 400, password: 'Veuillez renseigner votre mot de passe' };
		}

		if (!termAndConditions) {
			return { status: 400, termAndConditions: "Veuillez accepter les conditions d'utilisation" };
		}

		await supabase.auth.signUp({
			email: email as string,
			password: password as string,
		});
	},
};
