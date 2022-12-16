import type { Actions } from './$types';

import { supabase } from '@utils/supabaseClient';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');
		const termAndConditions = formData.get('termAndConditions');

		if (email && password && termAndConditions) {
			await supabase.auth.signUp({
				email: email as string,
				password: password as string,
			});
		}
	},
};
