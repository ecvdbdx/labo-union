/*import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { getURL } from '$lib/utils';

import { supabase } from '$lib/auth';

export const actions: Actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        console.log(formData);
        const password = formData.get('password')?.toString();
        const confirmPassword = formData.get('confirm_password')?.toString();

        if (!password) {
            return fail(400, { password, missing: true });
        }

        return { success: true };
    },
};
*/
