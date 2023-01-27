import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { supabase } from '$lib/auth';

export const actions: Actions = {
	default: async ({ request }) => {
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
		try {
			await supabase.auth.signInWithPassword({
				email: email as string,
				password: password as string,
			});
		} catch (error) {
			console.error(error);
		}
		return {
			success: true,
		};
	},
};
