import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

import { supabase } from '$lib/auth';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const password = formData.get('password')?.toString();
		const confirmPassword = formData.get('confirmPassword')?.toString();

		if (!password) {
			return fail(400, { password, missing: true });
		}

		if (password !== confirmPassword) {
			return fail(400, { password, invalid: true });
		}
		try {
			await supabase.auth.updateUser({
				password: password,
			});
		} catch (error) {
			console.error(error);
		}
		return { success: true };
	},
};
