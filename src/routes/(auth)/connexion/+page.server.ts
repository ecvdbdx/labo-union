import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';

import { supabase } from '$lib/auth';

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const formData = await request.formData();

		const email = formData.get('email')?.toString();
		const password = formData.get('password')?.toString();

		if (!email || !password) {
			return fail(400, {
				email_error: !email ? 'Veuillez renseigner votre adresse email' : null,
				password_error: !password ? 'Veuillez renseigner votre mot de passe' : null,
				email,
				password,
			});
		}

		const req = await supabase.auth.signInWithPassword({
			email: email as string,
			password: password as string,
		});

		if (req.error !== null) {
			if (req.error.message === 'Invalid login credentials') {
				return fail(400, {
					error: 'Identifiants incorrects',
					email,
					password,
				});
			}

			return fail(400, {
				error: 'Une erreur est survenue',
				email,
				password,
			});
		} else if (req.data.session) {
			const { access_token, refresh_token, provider_token, provider_refresh_token } =
				req.data.session;

			cookies.set(
				'supabase-auth-token',
				JSON.stringify([access_token, refresh_token, provider_token, provider_refresh_token]),
			);

			throw redirect(302, '/');
		}
	},
};
