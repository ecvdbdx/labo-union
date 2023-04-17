import { fail, redirect, error, type Actions } from '@sveltejs/kit';

import { isPasswordValid } from '$lib/validators/auth';

export const actions: Actions = {
	default: async ({ request, locals: { supabase, getSession } }) => {
		const session = getSession();

		if (!session) {
			throw error(401, { message: 'Unauthorized' });
		}

		const formData = await request.formData();
		const password = formData.get('password')?.toString();
		const passwordConfirm = formData.get('passwordConfirm')?.toString();

		if (!password) {
			return fail(400, {
				password_error: !password ? 'Veuillez renseigner votre mot de passe' : null,
				passwordConfirm,
			});
		}

		if (!passwordConfirm) {
			return fail(400, {
				passwordConfirm_error: !passwordConfirm ? 'Veuillez confirmer votre mot de passe' : null,
				password,
			});
		}

		if (password !== passwordConfirm) {
			return fail(400, {
				passwordConfirm_error: 'Les mots de passe ne correspondent pas',
				password,
				passwordConfirm,
			});
		}

		if (!isPasswordValid(password)) {
			return fail(400, {
				password_error:
					'Le mot de passe doit contenir au moins 9 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial',
			});
		}

		const { error: err } = await supabase.auth.updateUser({
			password,
		});

		if (err) {
			console.error(err);

			return fail(500, {
				error: 'Une erreur est survenue',
				password,
				passwordConfirm,
			});
		}

		throw redirect(302, '/profile');
	},
};
