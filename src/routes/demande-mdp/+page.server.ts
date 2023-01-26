import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { getURL } from '$lib/utils';

import { supabase } from '$lib/auth';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const email = formData.get('email')?.toString();

		if (!email) {
			return fail(400, { email, missing: true });
		}
		if (!isEmailValid(email)) {
			return fail(400, { email, invalid: true });
		}
		await supabase.auth.resetPasswordForEmail(email, {
			redirectTo: getURL() + 'changement-mdp',
		});
		return { success: true };
	},
};

function isEmailValid(email: string): boolean {
	const emailRegex = /^[^@]+@mail-ecv\.fr$/;
	return emailRegex.test(email);
}
