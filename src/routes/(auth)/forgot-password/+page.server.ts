import { fail, type Actions } from '@sveltejs/kit';

import { getURL } from '$lib/utils/getUrl';

export const actions: Actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email')?.toString();

		if (!email) {
			return fail(400, {
				email_error: !email ? 'Veuillez renseigner votre adresse email' : null,
				email,
			});
		}

		await supabase.auth.resetPasswordForEmail(email, {
			redirectTo: `${getURL()}reset-password`,
		});

		return { success: true };
	},
};
