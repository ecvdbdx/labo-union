import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';
import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';

import type { Database } from '$lib/types/database.types';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ depends, data, fetch }) => {
	depends('supabase:auth');
	depends('app:profile');

	const supabase = createSupabaseLoadClient<Database>({
		supabaseUrl: env.PUBLIC_SUPABASE_URL,
		supabaseKey: env.PUBLIC_SUPABASE_ANON_KEY,
		event: { fetch },
		serverSession: data?.session,
	});

	const {
		data: { session },
	} = await supabase.auth.getSession();

	const id = session?.user.id;

	const userResponse = id
		? await supabase.from('Profile').select('*').eq('user_id', session?.user.id)
		: null;

	if (userResponse) {
		const { data, error: err } = userResponse;

		if (!data?.length || err) {
			throw error(500, {
				code: 500,
				message: 'Une erreur est survenue',
			});
		}
	}

	return {
		supabase,
		session,
		user: userResponse?.data[0],
	};
};
